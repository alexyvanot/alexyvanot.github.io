---
title: "Développement mobile avec Flutter : Retour sur mes premiers projets"
slug: developpement-mobile-flutter
published: true
excerpt: "De la découverte de Flutter à la mise en production d'applications fonctionnelles. Les défis, les bonnes pratiques et les erreurs à éviter en développement mobile cross-platform."
author: Alexy VANOT
publishedAt: 2025-04-25
tags:
  - projet-technique
  - flutter
  - mobile
  - dart
  - application
logo: Flutter
readingTime: 16
color: "#02569B"
---

# Développement mobile avec Flutter : Retour sur mes premiers projets

Flutter m'a été présenté comme le framework miracle qui permet de développer pour iOS et Android avec une seule base de code, sans compromis sur les performances ni sur l'expérience utilisateur. Sceptique face à ces promesses marketing, j'ai voulu vérifier par moi-même en développant deux applications complètes : une to-do list et une application de découverte de films.

## Contexte et motivations

### Le projet académique

Pour un module de développement mobile en troisième année, nous devions créer une application fonctionnelle en équipe de deux. Le choix du framework était libre, ce qui a déclenché un débat intéressant avec mon binôme : React Native ou Flutter ?

### Le choix de Flutter

Après recherche, plusieurs facteurs ont fait pencher la balance vers Flutter :

**Performance native**
Flutter ne passe pas par un bridge JavaScript comme React Native. Le code Dart est compilé directement en code ARM natif, offrant des performances comparables aux applications natives pures.

**Consistency visuelle**
Flutter dessine ses propres widgets plutôt que d'utiliser les composants natifs de chaque plateforme. Résultat : une interface identique au pixel près sur iOS et Android.

**Hot reload**
La possibilité de voir instantanément les modifications de code sans recompilation accélère drastiquement le développement et l'expérimentation.

**Documentation et communauté**
La documentation officielle de Flutter est exceptionnelle : claire, exhaustive, avec des exemples concrets. La communauté est active et les ressources abondantes.

### Premier contact avec Dart

Dart était un langage nouveau pour moi. Venant de Java et Python, j'ai trouvé la syntaxe familière et intuitive. Quelques particularités notables :

**Null safety**
Depuis Dart 2.12, la distinction entre types nullables et non-nullables est explicite et vérifiée à la compilation.

```dart
String name = "Alexy";        // Ne peut pas être null
String? nickname;             // Peut être null

// Le compilateur force à gérer le cas null
print(nickname?.toUpperCase() ?? "No nickname");
```

**Programmation asynchrone**
Les mots-clés `async`/`await` rendent le code asynchrone aussi lisible que du code synchrone.

```dart
Future<User> fetchUser(int id) async {
  final response = await http.get(Uri.parse('$baseUrl/users/$id'));
  return User.fromJson(jsonDecode(response.body));
}
```

**Classes et mixins**
Le système de classes est classique mais les mixins permettent une forme de réutilisation de code élégante.

## Projet 1 : Application To-Do List

### Objectifs pédagogiques

Cette première application visait à maîtriser les fondamentaux de Flutter :
- Création et composition de widgets
- Gestion de l'état local et global
- Navigation entre écrans
- Persistance des données localement
- Design responsive

### Architecture adoptée

J'ai structuré le projet en couches distinctes, inspiré de la Clean Architecture :

```
lib/
├── main.dart
├── models/
│   └── task.dart
├── providers/
│   └── task_provider.dart
├── repositories/
│   └── task_repository.dart
├── screens/
│   ├── home_screen.dart
│   └── task_detail_screen.dart
├── widgets/
│   ├── task_card.dart
│   ├── task_form.dart
│   └── priority_selector.dart
└── utils/
    └── date_formatter.dart
```

Cette séparation facilite les tests, la maintenance et l'évolution du code.

### Gestion de l'état : de setState à Provider

**Première approche naïve avec setState**

Au début, j'utilisais `setState` pour chaque modification d'état :

```dart
class _HomeScreenState extends State<HomeScreen> {
  List<Task> _tasks = [];
  
  void _addTask(Task task) {
    setState(() {
      _tasks.add(task);
    });
  }
  
  void _deleteTask(int index) {
    setState(() {
      _tasks.removeAt(index);
    });
  }
}
```

Cette approche fonctionne pour des cas simples mais devient vite problématique :
- L'état est lié à un widget spécifique
- Partager l'état entre widgets nécessite du "prop drilling"
- Les rebuilds sont difficiles à optimiser

**Migration vers Provider**

Provider est la solution recommandée par l'équipe Flutter pour la gestion d'état. Le principe : séparer l'état de l'UI et le rendre accessible partout dans l'arbre de widgets.

```dart
class TaskProvider extends ChangeNotifier {
  final TaskRepository _repository;
  List<Task> _tasks = [];
  
  List<Task> get tasks => List.unmodifiable(_tasks);
  List<Task> get completedTasks => _tasks.where((t) => t.isCompleted).toList();
  List<Task> get pendingTasks => _tasks.where((t) => !t.isCompleted).toList();
  
  Future<void> loadTasks() async {
    _tasks = await _repository.getAllTasks();
    notifyListeners();
  }
  
  Future<void> addTask(Task task) async {
    await _repository.insertTask(task);
    _tasks.add(task);
    notifyListeners();
  }
  
  Future<void> toggleTask(String id) async {
    final index = _tasks.indexWhere((t) => t.id == id);
    if (index != -1) {
      _tasks[index] = _tasks[index].copyWith(
        isCompleted: !_tasks[index].isCompleted
      );
      await _repository.updateTask(_tasks[index]);
      notifyListeners();
    }
  }
}
```

L'utilisation dans les widgets devient élégante :

```dart
// Écouter et reconstruire automatiquement
Consumer<TaskProvider>(
  builder: (context, provider, child) {
    return ListView.builder(
      itemCount: provider.pendingTasks.length,
      itemBuilder: (context, index) => TaskCard(task: provider.pendingTasks[index]),
    );
  },
)

// Déclencher une action sans reconstruire
context.read<TaskProvider>().addTask(newTask);
```

### Persistance avec Hive

Pour la persistance locale, j'ai choisi Hive plutôt que SQLite. Hive est une base NoSQL légère, rapide et facile à utiliser avec Flutter.

```dart
@HiveType(typeId: 0)
class Task extends HiveObject {
  @HiveField(0)
  final String id;
  
  @HiveField(1)
  final String title;
  
  @HiveField(2)
  final String? description;
  
  @HiveField(3)
  final DateTime createdAt;
  
  @HiveField(4)
  final bool isCompleted;
  
  @HiveField(5)
  final Priority priority;
}

class TaskRepository {
  final Box<Task> _box;
  
  TaskRepository(this._box);
  
  Future<List<Task>> getAllTasks() async {
    return _box.values.toList();
  }
  
  Future<void> insertTask(Task task) async {
    await _box.put(task.id, task);
  }
}
```

### Fonctionnalités implémentées

L'application finale incluait :
- Liste des tâches avec filtres (toutes, en cours, terminées)
- Création/édition de tâches avec titre, description, priorité, date limite
- Swipe pour supprimer ou marquer comme terminée
- Notifications de rappel (via flutter_local_notifications)
- Thème clair/sombre avec persistance de la préférence
- Animations de transition entre écrans

## Projet 2 : Application de films

### Montée en complexité

Fort de l'expérience de la to-do list, j'ai abordé un projet plus ambitieux intégrant :
- Appels API REST externes (TMDb API)
- Gestion des images avec cache et placeholders
- Recherche avec debounce
- Pagination infinie
- Liste de favoris synchronisée localement
- Gestion des états d'erreur et de chargement

### Intégration de l'API TMDb

The Movie Database (TMDb) offre une API REST gratuite et bien documentée pour accéder à un catalogue de films.

```dart
class MovieService {
  final Dio _dio;
  final String _apiKey;
  
  MovieService({required String apiKey}) 
    : _apiKey = apiKey,
      _dio = Dio(BaseOptions(
        baseUrl: 'https://api.themoviedb.org/3',
        connectTimeout: Duration(seconds: 10),
        receiveTimeout: Duration(seconds: 10),
      ));
  
  Future<List<Movie>> getPopularMovies({int page = 1}) async {
    try {
      final response = await _dio.get(
        '/movie/popular',
        queryParameters: {
          'api_key': _apiKey,
          'language': 'fr-FR',
          'page': page,
        },
      );
      
      return (response.data['results'] as List)
          .map((json) => Movie.fromJson(json))
          .toList();
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }
  
  Future<List<Movie>> searchMovies(String query, {int page = 1}) async {
    if (query.isEmpty) return [];
    
    try {
      final response = await _dio.get(
        '/search/movie',
        queryParameters: {
          'api_key': _apiKey,
          'language': 'fr-FR',
          'query': query,
          'page': page,
        },
      );
      
      return (response.data['results'] as List)
          .map((json) => Movie.fromJson(json))
          .toList();
    } on DioException catch (e) {
      throw _handleError(e);
    }
  }
  
  AppException _handleError(DioException e) {
    switch (e.type) {
      case DioExceptionType.connectionTimeout:
      case DioExceptionType.receiveTimeout:
        return NetworkException('Connexion trop lente');
      case DioExceptionType.connectionError:
        return NetworkException('Pas de connexion internet');
      default:
        return ApiException('Erreur serveur: ${e.response?.statusCode}');
    }
  }
}
```

### Recherche avec debounce

La recherche en temps réel ne doit pas déclencher une requête API à chaque caractère tapé. Le debounce permet d'attendre que l'utilisateur ait fini de taper.

```dart
class SearchProvider extends ChangeNotifier {
  Timer? _debounceTimer;
  final MovieService _service;
  
  String _query = '';
  List<Movie> _results = [];
  bool _isLoading = false;
  String? _error;
  
  void search(String query) {
    _query = query;
    _error = null;
    
    _debounceTimer?.cancel();
    
    if (query.isEmpty) {
      _results = [];
      notifyListeners();
      return;
    }
    
    _debounceTimer = Timer(Duration(milliseconds: 500), () async {
      _isLoading = true;
      notifyListeners();
      
      try {
        _results = await _service.searchMovies(query);
        _error = null;
      } catch (e) {
        _error = e.toString();
        _results = [];
      } finally {
        _isLoading = false;
        notifyListeners();
      }
    });
  }
}
```

### Gestion des images

Les affiches de films peuvent être lourdes. Une stratégie de cache est essentielle pour les performances et l'économie de données.

```dart
CachedNetworkImage(
  imageUrl: movie.posterUrl,
  placeholder: (context, url) => Container(
    color: Colors.grey[300],
    child: Center(child: CircularProgressIndicator()),
  ),
  errorWidget: (context, url, error) => Container(
    color: Colors.grey[300],
    child: Icon(Icons.movie, size: 50),
  ),
  fadeInDuration: Duration(milliseconds: 200),
)
```

Le package `cached_network_image` gère automatiquement :
- Le cache disque des images téléchargées
- L'affichage de placeholders pendant le chargement
- Les widgets d'erreur en cas d'échec
- Les transitions animées

### Pagination infinie

Pour les listes longues, charger tous les résultats d'un coup n'est pas viable. La pagination infinie charge les pages suivantes au fur et à mesure du scroll.

```dart
class MovieListScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return NotificationListener<ScrollNotification>(
      onNotification: (notification) {
        if (notification is ScrollEndNotification) {
          final metrics = notification.metrics;
          if (metrics.pixels >= metrics.maxScrollExtent - 200) {
            // Proche du bas, charger la page suivante
            context.read<MovieProvider>().loadNextPage();
          }
        }
        return false;
      },
      child: ListView.builder(
        itemCount: provider.movies.length + (provider.hasMore ? 1 : 0),
        itemBuilder: (context, index) {
          if (index == provider.movies.length) {
            return Center(child: CircularProgressIndicator());
          }
          return MovieCard(movie: provider.movies[index]);
        },
      ),
    );
  }
}
```

## Ce que j'ai appris

### Le widget tree et les rebuilds

Comprendre comment Flutter construit et reconstruit son arbre de widgets est fondamental pour les performances.

**Règle d'or** : un rebuild de widget parent reconstruit tous ses enfants. Il faut donc :
- Utiliser `const` constructors quand possible pour éviter les rebuilds inutiles
- Placer les Consumers/Selectors au plus près des widgets qui en ont besoin
- Extraire les widgets statiques hors des builders

```dart
// Mauvais : tout se reconstruit à chaque changement
Consumer<Provider>(
  builder: (context, provider, _) {
    return Column(
      children: [
        Text('Static title'),  // Se reconstruit inutilement
        Text(provider.dynamicValue),
      ],
    );
  },
)

// Bon : seul le widget dynamique se reconstruit
Column(
  children: [
    const Text('Static title'),  // Ne se reconstruit pas
    Consumer<Provider>(
      builder: (context, provider, _) => Text(provider.dynamicValue),
    ),
  ],
)
```

### La qualité des packages

La communauté Flutter publie des milliers de packages sur pub.dev. Tous ne sont pas de qualité égale.

**Critères de sélection :**
- Score pub.dev (maintenance, popularité, santé)
- Date de dernière mise à jour
- Nombre et nature des issues ouvertes
- Compatibilité null safety
- Présence de tests et documentation

Un package abandonné peut devenir une dette technique significative.

### Le design system

Flutter encourage la création d'un design system cohérent via les `ThemeData`. Définir les couleurs, typographies et espacements en un seul endroit facilite la maintenance et assure la cohérence visuelle.

```dart
final appTheme = ThemeData(
  useMaterial3: true,
  colorScheme: ColorScheme.fromSeed(
    seedColor: Colors.indigo,
    brightness: Brightness.light,
  ),
  textTheme: TextTheme(
    headlineLarge: GoogleFonts.poppins(fontWeight: FontWeight.bold),
    bodyMedium: GoogleFonts.roboto(),
  ),
  cardTheme: CardTheme(
    elevation: 2,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
  ),
);
```

## Comparaison avec d'autres approches

| Aspect | Flutter | React Native | Natif (Swift/Kotlin) |
|--------|---------|--------------|----------------------|
| Performance | Excellente | Bonne | Optimale |
| UI consistency | Parfaite cross-platform | Variable | Par plateforme |
| Courbe d'apprentissage | Moyenne | Moyenne (si JS connu) | Longue |
| Taille de l'app | ~5-10 MB de base | ~3-5 MB | Minimale |
| Hot reload | Excellent | Bon | Limité |
| Accès APIs natives | Via plugins | Via modules | Direct |

**Verdict** : Flutter est un excellent compromis pour le développement mobile cross-platform, particulièrement quand la cohérence visuelle entre plateformes est importante.

## Conclusion

Ces deux projets m'ont convaincu de la maturité de Flutter. Le framework est production-ready et permet de créer des applications de qualité professionnelle avec une productivité remarquable.

Les concepts appris (gestion d'état, architecture en couches, appels API, persistance locale) sont fondamentaux et transférables à d'autres frameworks ou plateformes.

Je continue à utiliser Flutter pour mes projets personnels. La productivité offerte par le hot reload, la qualité du rendu visuel et la richesse de l'écosystème en font mon choix par défaut pour le développement mobile. C'est un outil que je recommande à tout développeur souhaitant se lancer dans le mobile sans investir dans l'apprentissage de deux plateformes distinctes.
