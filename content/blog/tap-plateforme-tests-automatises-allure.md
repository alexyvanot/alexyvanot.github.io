---
title: "TAP : Construire une plateforme de tests automatisés avec génération de rapports Allure"
slug: tap-plateforme-tests-automatises-allure
published: true
excerpt: "Conception et développement d'une plateforme de tests automatisés intégrant la génération de rapports Allure, le suivi des campagnes et le streaming temps réel des résultats. Un projet d'envergure au Synchrotron SOLEIL."
author: Alexy VANOT
publishedAt: 2025-05-28
tags:
  - projet-entreprise
  - tests-automatises
  - allure
  - synchrotron-soleil
  - java
  - qualite-logicielle
logo: Java
readingTime: 20
color: "#00B8A9"
pinned: true
---

# TAP : Construire une plateforme de tests automatisés avec génération de rapports Allure

La qualité logicielle passe par les tests. Cette affirmation, devenue un lieu commun, se heurte souvent à la réalité du terrain : tests éparpillés, résultats difficiles à consulter, absence de traçabilité, pratiques hétérogènes entre équipes. Au Synchrotron SOLEIL, j'ai eu l'opportunité de travailler sur TAP (Test Automation Platform), une plateforme visant à centraliser et professionnaliser les pratiques de test automatisé de l'organisation.

## Contexte et genèse du projet

### L'existant fragmenté

Avant TAP, les tests automatisés existaient au sein de plusieurs équipes, mais de manière dispersée et hétérogène :

**Côté développement**
- Tests unitaires JUnit ou pytest intégrés aux projets
- Exécution locale par les développeurs ou via Jenkins
- Résultats visibles uniquement dans les logs de CI

**Côté intégration**
- Scripts de test fonctionnels ad hoc
- Exécution manuelle ou semi-automatisée
- Résultats consignés dans des fichiers Excel ou des emails

**Côté métier**
- Tests de non-régression en partie manuels
- Documentation des cas de test dans Confluence
- Aucune traçabilité formelle de l'exécution

Cette fragmentation posait plusieurs problèmes :
- **Pas de vision globale** : impossible de répondre à "quel est le niveau de qualité de notre SI ?"
- **Duplication d'efforts** : chaque équipe réinventait ses outils
- **Perte de connaissance** : les résultats n'étaient pas historisés de manière exploitable
- **Faible adoption** : la complexité décourageait les équipes moins techniques

### L'ambition de TAP

TAP devait fournir une plateforme unique répondant aux besoins de toutes les équipes :

**Pour les développeurs**
- Intégration facile avec les frameworks existants (JUnit, pytest, etc.)
- Exécution automatisée dans la CI
- Rapports détaillés accessibles sans effort

**Pour les testeurs et intégrateurs**
- Interface pour configurer et lancer des campagnes de tests
- Visualisation temps réel de l'exécution
- Historique et tendances

**Pour les managers**
- Tableaux de bord synthétiques
- Indicateurs de qualité objectifs
- Comparaison entre projets et équipes

## Architecture de TAP

### Vue d'ensemble

TAP est architecturée en plusieurs composants :

```
┌─────────────────────────────────────────────────────────────┐
│                     TAP Frontend                             │
│   (Configuration, lancement, monitoring, consultation)       │
└──────────────────────────┬──────────────────────────────────┘
                           │ REST / WebSocket
┌──────────────────────────▼──────────────────────────────────┐
│                     TAP Backend                              │
│   (Orchestration, gestion des campagnes, API)               │
└────────┬─────────────────┬──────────────────┬───────────────┘
         │                 │                  │
         ▼                 ▼                  ▼
┌─────────────┐   ┌─────────────┐   ┌─────────────────────────┐
│ Test Runners│   │ PostgreSQL  │   │ Allure Report Server    │
│ (Agents)    │   │ (Metadata)  │   │ (Rapports HTML)         │
└─────────────┘   └─────────────┘   └─────────────────────────┘
```

### Choix technologiques

**Backend : Spring Boot 3 + Java 17**
Le choix naturel compte tenu de l'écosystème SOLEIL et des compétences de l'équipe. Spring Boot offre un excellent support pour les API REST, les WebSockets, et l'intégration avec divers systèmes.

**Base de données : PostgreSQL**
Stockage des métadonnées des campagnes, historique des exécutions, configuration des tests.

**Rapports : Allure Framework**
Après évaluation de plusieurs solutions (Allure, ExtentReports, ReportPortal), Allure s'est imposé :
- Rapports visuels et interactifs
- Support natif de nombreux frameworks (JUnit, pytest, TestNG, Cucumber)
- Catégorisation riche (features, stories, epics)
- Historique et tendances intégrés
- Open source et communauté active

**Communication temps réel : WebSocket (STOMP)**
Pour le streaming des résultats pendant l'exécution des tests.

### Le backend en détail

#### Modèle de données

```java
@Entity
public class Campaign {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    
    private String name;
    private String description;
    
    @OneToMany(mappedBy = "campaign", cascade = CascadeType.ALL)
    private List<TestSuite> testSuites;
    
    @Enumerated(EnumType.STRING)
    private CampaignStatus status;
    
    private LocalDateTime createdAt;
    private LocalDateTime startedAt;
    private LocalDateTime completedAt;
    
    @ManyToOne
    private User createdBy;
    
    private String allureReportUrl;
}

@Entity
public class TestSuite {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    
    private String name;
    private String path;
    
    @Enumerated(EnumType.STRING)
    private TestFramework framework;
    
    @ManyToOne
    private Campaign campaign;
    
    @OneToMany(mappedBy = "suite")
    private List<TestResult> results;
}

@Entity
public class TestResult {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    
    private String testName;
    
    @Enumerated(EnumType.STRING)
    private TestStatus status;
    
    private Long durationMs;
    
    @Column(columnDefinition = "TEXT")
    private String errorMessage;
    
    @Column(columnDefinition = "TEXT")
    private String stackTrace;
    
    private LocalDateTime executedAt;
    
    @ManyToOne
    private TestSuite suite;
}
```

#### Orchestration des tests

Le service d'orchestration coordonne l'exécution des campagnes :

```java
@Service
@Transactional
public class CampaignOrchestrator {
    
    private final CampaignRepository campaignRepository;
    private final TestRunnerRegistry runnerRegistry;
    private final AllureReportGenerator reportGenerator;
    private final WebSocketNotifier notifier;
    
    @Async
    public void executeCampaign(UUID campaignId) {
        Campaign campaign = campaignRepository.findById(campaignId)
            .orElseThrow(() -> new CampaignNotFoundException(campaignId));
        
        campaign.setStatus(CampaignStatus.RUNNING);
        campaign.setStartedAt(LocalDateTime.now());
        campaignRepository.save(campaign);
        
        notifier.notifyCampaignStarted(campaign);
        
        Path resultsDir = createResultsDirectory(campaignId);
        
        try {
            for (TestSuite suite : campaign.getTestSuites()) {
                executeSuite(suite, resultsDir);
            }
            
            String reportUrl = reportGenerator.generate(resultsDir, campaignId);
            campaign.setAllureReportUrl(reportUrl);
            campaign.setStatus(CampaignStatus.COMPLETED);
            
        } catch (Exception e) {
            campaign.setStatus(CampaignStatus.FAILED);
            log.error("Campaign {} failed", campaignId, e);
        } finally {
            campaign.setCompletedAt(LocalDateTime.now());
            campaignRepository.save(campaign);
            notifier.notifyCampaignCompleted(campaign);
        }
    }
    
    private void executeSuite(TestSuite suite, Path resultsDir) {
        TestRunner runner = runnerRegistry.getRunner(suite.getFramework());
        
        runner.execute(suite, new TestResultCallback() {
            @Override
            public void onTestCompleted(TestResult result) {
                result.setSuite(suite);
                suite.getResults().add(result);
                
                // Notification temps réel
                notifier.notifyTestCompleted(suite.getCampaign().getId(), result);
            }
        }, resultsDir);
    }
}
```

#### Streaming temps réel avec WebSocket

L'une des fonctionnalités les plus appréciées de TAP est la possibilité de voir les tests s'exécuter en direct. Chaque test qui passe, échoue ou est ignoré est immédiatement remonté à l'interface.

```java
@Controller
public class CampaignWebSocketController {
    
    private final SimpMessagingTemplate messagingTemplate;
    
    public void notifyTestCompleted(UUID campaignId, TestResult result) {
        TestResultDTO dto = TestResultDTO.from(result);
        messagingTemplate.convertAndSend(
            "/topic/campaign/" + campaignId + "/results",
            dto
        );
    }
    
    public void notifyCampaignCompleted(Campaign campaign) {
        CampaignSummaryDTO summary = CampaignSummaryDTO.from(campaign);
        messagingTemplate.convertAndSend(
            "/topic/campaign/" + campaign.getId() + "/completed",
            summary
        );
    }
}
```

Côté client, la connexion WebSocket permet une mise à jour instantanée de l'interface :

```javascript
const socket = new SockJS('/ws');
const stompClient = Stomp.over(socket);

stompClient.connect({}, () => {
    stompClient.subscribe(`/topic/campaign/${campaignId}/results`, (message) => {
        const result = JSON.parse(message.body);
        updateTestResultUI(result);
    });
    
    stompClient.subscribe(`/topic/campaign/${campaignId}/completed`, (message) => {
        const summary = JSON.parse(message.body);
        showCampaignSummary(summary);
    });
});
```

### Génération des rapports Allure

Allure fonctionne en deux phases :
1. **Pendant l'exécution** : les frameworks de test génèrent des fichiers JSON décrivant chaque test
2. **Après l'exécution** : le CLI Allure agrège ces fichiers et génère un rapport HTML statique

```java
@Service
public class AllureReportGenerator {
    
    private final AllureConfig config;
    
    public String generate(Path resultsDir, UUID campaignId) throws IOException, InterruptedException {
        Path reportDir = config.getReportBasePath().resolve(campaignId.toString());
        
        ProcessBuilder pb = new ProcessBuilder(
            config.getAllureCliPath(),
            "generate",
            resultsDir.toString(),
            "-o", reportDir.toString(),
            "--clean"
        );
        
        pb.inheritIO();
        Process process = pb.start();
        int exitCode = process.waitFor();
        
        if (exitCode != 0) {
            throw new ReportGenerationException("Allure CLI failed with code " + exitCode);
        }
        
        return config.getReportBaseUrl() + "/" + campaignId;
    }
}
```

Les rapports générés sont servis par un serveur web statique (nginx) et accessibles via une URL dédiée.

### Fonctionnalités du rapport Allure

Les rapports Allure offrent une richesse d'informations :

**Vue d'ensemble**
- Taux de succès global
- Répartition par statut (passed, failed, broken, skipped)
- Durée totale et par suite

**Détail par test**
- Étapes d'exécution (si le code utilise les annotations Allure)
- Screenshots en cas d'échec (pour les tests UI)
- Logs et messages d'erreur
- Stack traces complètes

**Catégorisation**
- Par features et stories (BDD)
- Par sévérité (critical, major, minor, trivial)
- Par package ou classe

**Tendances**
- Comparaison avec les exécutions précédentes
- Évolution du nombre de tests
- Taux de réussite dans le temps

## Défis techniques rencontrés

### Gestion de la concurrence

Plusieurs utilisateurs peuvent lancer des campagnes simultanément. Le système doit gérer cette concurrence sans dégradation de performance ni conflits.

**Solution implémentée :**
- Pool de threads configurables pour l'exécution parallèle
- Queue avec priorités pour les campagnes en attente
- Isolation des répertoires de résultats par campagne
- Verrous en base de données pour les ressources partagées

```java
@Configuration
public class AsyncConfig {
    
    @Bean
    public TaskExecutor campaignExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(4);
        executor.setMaxPoolSize(8);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("campaign-");
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        return executor;
    }
}
```

### Isolation des environnements de test

Les tests ne doivent pas interférer entre eux. Deux campagnes exécutant des tests sur la même application pourraient produire des résultats faussés.

**Approche retenue :**
- Variables d'environnement spécifiques par campagne
- Préfixage des bases de données de test
- Ports dynamiques pour les services mockés
- Documentation des prérequis d'isolation pour les rédacteurs de tests

### Performance des WebSockets sous charge

Avec de nombreux tests en parallèle, le volume de messages WebSocket peut devenir problématique.

**Optimisations :**
- Batching des messages (envoi groupé toutes les 500ms)
- Compression des payloads JSON
- Utilisation de Server-Sent Events (SSE) pour les cas simples
- Limitation du nombre de connexions simultanées par utilisateur

```java
@Component
public class BatchingNotifier {
    
    private final Map<UUID, List<TestResultDTO>> pendingNotifications = new ConcurrentHashMap<>();
    private final SimpMessagingTemplate messagingTemplate;
    
    @Scheduled(fixedRate = 500)
    public void flushNotifications() {
        pendingNotifications.forEach((campaignId, results) -> {
            if (!results.isEmpty()) {
                List<TestResultDTO> batch;
                synchronized (results) {
                    batch = new ArrayList<>(results);
                    results.clear();
                }
                messagingTemplate.convertAndSend(
                    "/topic/campaign/" + campaignId + "/results-batch",
                    batch
                );
            }
        });
    }
    
    public void queueNotification(UUID campaignId, TestResultDTO result) {
        pendingNotifications
            .computeIfAbsent(campaignId, k -> Collections.synchronizedList(new ArrayList<>()))
            .add(result);
    }
}
```

### Intégration avec les frameworks de test existants

TAP devait s'intégrer avec les frameworks déjà utilisés sans modification majeure du code de test existant.

**Pour JUnit 5 :**
Ajout d'une dépendance `allure-junit5` et configuration du listener dans le `pom.xml` ou `build.gradle`.

**Pour pytest :**
Installation de `allure-pytest` et activation via `--alluredir`.

**Pour les tests legacy :**
Développement d'adaptateurs custom convertissant les sorties vers le format Allure.

## Impact sur l'organisation

### Adoption par les équipes

Le déploiement de TAP a été progressif, équipe par équipe, avec accompagnement :

**Phase pilote (2 mois)**
Une équipe volontaire a utilisé TAP pour ses tests d'intégration. Retours d'expérience, ajustements de l'interface, corrections de bugs.

**Déploiement élargi (3 mois)**
Extension à trois autres équipes. Formation des testeurs et développeurs. Documentation et tutoriels.

**Adoption généralisée**
TAP devient l'outil de référence pour les tests automatisés. Intégration dans le processus de release.

### Changement culturel

Au-delà de l'outil, TAP a contribué à faire évoluer les pratiques :

**Visibilité accrue**
Les tableaux de bord rendent la qualité visible à tous, y compris aux non-techniciens. Cela crée une pression positive pour maintenir de bons taux de réussite.

**Gamification informelle**
Les équipes comparent leurs scores. "L'équipe X a 98% de succès, on peut faire mieux." Cette compétition amicale stimule l'attention portée aux tests.

**Documentation implicite**
Les rapports Allure, avec leurs étapes détaillées, constituent une forme de documentation du comportement attendu des applications.

**Réduction des régressions**
La détection précoce des échecs de tests permet d'identifier les régressions avant la mise en production.

## Ce que j'ai appris

### L'UX des outils internes compte

Un outil interne mal conçu ne sera pas utilisé, même s'il est obligatoire. Les utilisateurs trouveront des contournements.

J'ai investi du temps sur l'interface pour la rendre intuitive et agréable. Le streaming temps réel, par exemple, n'était pas strictement nécessaire d'un point de vue fonctionnel. Mais il a fortement amélioré l'adoption : les utilisateurs aiment voir leurs tests défiler en direct.

### Les tests de tests

Tester une plateforme de tests est méta mais nécessaire. J'ai écrit des tests d'intégration pour valider le bon fonctionnement de TAP elle-même :
- Création et exécution de campagnes
- Génération correcte des rapports
- Notifications WebSocket reçues
- Gestion des erreurs et cas limites

### L'importance des standards

Adopter Allure plutôt que créer un format propriétaire a facilité l'intégration avec les outils existants et réduit la courbe d'apprentissage pour les utilisateurs. Les standards ouverts ont une valeur qui dépasse leur qualité technique intrinsèque.

### La valeur du feedback utilisateur

Les meilleures fonctionnalités de TAP sont venues des retours utilisateurs, pas de mes spécifications initiales. Le batching des notifications, les filtres avancés sur l'historique, l'export des résultats : autant d'ajouts suggérés par les utilisateurs en situation réelle.

## Conclusion

TAP représente le projet le plus complet de mon alternance. Il combine développement backend avec Spring Boot, communication temps réel avec WebSockets, intégration avec des outils tiers (Allure), et une attention particulière à l'expérience utilisateur.

Voir les équipes adopter l'outil et améliorer leurs pratiques de test est une satisfaction professionnelle majeure. Quand un développeur me dit "grâce à TAP, on a détecté une régression avant la mise en prod", je sais que le projet a de la valeur.

Ce projet m'a confirmé mon intérêt pour les outils d'ingénierie logicielle. Construire des outils qui rendent d'autres développeurs plus efficaces est une forme de démultiplication d'impact particulièrement gratifiante.
