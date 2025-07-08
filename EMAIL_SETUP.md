# Configuration de l'envoi d'emails avec EmailJS

Pour permettre à votre formulaire de contact d'envoyer réellement des emails, vous devez configurer EmailJS. Voici les étapes à suivre :

## 1. Créer un compte EmailJS

1. Rendez-vous sur [emailjs.com](https://www.emailjs.com/) et créez un compte gratuit.
2. Connectez-vous à votre compte.

## 2. Ajouter un service email

1. Dans le dashboard, cliquez sur "Email Services" dans le menu de gauche.
2. Cliquez sur "Add New Service".
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.) et suivez les instructions pour vous connecter.
4. Une fois connecté, notez le "Service ID" qui sera utilisé dans votre code.

## 3. Créer un modèle d'email

1. Dans le dashboard, cliquez sur "Email Templates" dans le menu de gauche.
2. Cliquez sur "Create New Template".
3. Donnez un nom à votre modèle et créez le contenu de l'email.
4. Utilisez les variables suivantes dans votre modèle :
   - `{{from_name}}` : Nom de l'expéditeur
   - `{{from_email}}` : Email de l'expéditeur
   - `{{message}}` : Le message envoyé
   - `{{to_name}}` : Votre nom (récepteur)
5. Enregistrez le modèle et notez le "Template ID".

## 4. Obtenir votre clé publique

1. Dans le dashboard, cliquez sur "Account" dans le menu de gauche.
2. Trouvez votre "Public Key" dans la section "API Keys".

## 5. Configurer les variables d'environnement

1. Dupliquez le fichier `.env.example` et renommez-le en `.env`
2. Remplacez les valeurs par vos informations :

```
PUBLIC_SERVICE_ID=votre_service_id
PUBLIC_TEMPLATE_ID=votre_template_id
PUBLIC_EMAILJS_KEY=votre_cle_publique
```

## 6. Tester le formulaire

Une fois ces étapes terminées, votre formulaire de contact devrait être capable d'envoyer de vrais emails.

**Note** : Le plan gratuit d'EmailJS permet d'envoyer jusqu'à 200 emails par mois, ce qui devrait être suffisant pour un site personnel.

## Sécurité et déploiement

- Le fichier `.env` est automatiquement ignoré par Git (voir `.gitignore`), donc vos identifiants ne seront pas publiés sur GitHub.
- Lors du déploiement, vous devrez configurer ces variables d'environnement sur votre plateforme d'hébergement (Vercel, Netlify, etc.)
