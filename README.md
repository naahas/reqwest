

# Reqwest - Client de Test d'API

Application desktop légère et rapide pour tester des APIs REST, construite avec Electron et Vue.js. Alternative simple à Postman.

<img width="1719" height="995" alt="Capture d'écran 2025-09-20 165337" src="https://github.com/user-attachments/assets/32a09178-8e6a-4218-b216-713ccec291e7" />


## Fonctionnalités

- **Méthodes HTTP** : GET, POST, PUT, PATCH, DELETE
- **Authentification** : Bearer Token, API Key, Basic Auth
- **Historique** : Sauvegarde automatique des 20 dernières requêtes
- **Collections** : Sauvegarde et organisation des requêtes
- **Formatage JSON** : Coloration syntaxique des réponses
- **Réponse temps réel** : Status, temps de réponse et taille
- **Support CORS** : Test d'APIs sans restrictions navigateur
- **Multi-plateforme** : Windows, macOS et Linux

## Prérequis

- [Node.js](https://nodejs.org/) version 16 ou supérieure
- npm ou yarn

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/naahas/reqwest.git
cd reqwest
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer l'application

```bash
# Mode développement
npm start

# Ou avec Electron directement
npx electron .
```

## Structure du projet

```
reqwest/
├── main.js          # Processus principal Electron
├── index.html       # Interface Vue.js
├── package.json     # Dépendances et scripts
├── assets/          # Images et icônes
└── README.md        # Ce fichier
```

## Utilisation

1. **Lancer l'application** avec `npx electron main.js`
2. **Entrer l'URL** de votre API dans la barre d'adresse
3. **Sélectionner la méthode** HTTP (GET, POST, etc.)
4. **Configurer les headers** dans l'onglet Headers
5. **Ajouter le body** si nécessaire (pour POST/PUT)
6. **Cliquer sur Send** pour envoyer la requête
7. **Voir la réponse** formatée en bas de l'écran

### Exemple de requête

```json
URL: https://jsonplaceholder.typicode.com/posts
Method: POST
Headers: Content-Type: application/json
Body: {
  "title": "Test",
  "body": "Contenu test",
  "userId": 1
}
```

## Build de production

### Windows
```bash
npm run build-win
```

### macOS
```bash
npm run build-mac
```

### Linux
```bash
npm run build-linux
```

Les executables seront dans le dossier `dist/`

## APIs publiques pour tester

- `https://jsonplaceholder.typicode.com/posts` - API de test
- `https://api.github.com/users/[username]` - API GitHub
- `https://pokeapi.co/api/v2/pokemon/pikachu` - Pokemon API

## Développement

### Technologies

- **Electron** : Framework desktop
- **Vue.js 3** : Interface utilisateur
- **Tailwind CSS** : Styles
- **Node.js** : Backend
- **fs-extra** : Gestion des fichiers

### Contribuer

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## Problèmes connus

- Sur Windows avec OneDrive, déplacer le projet hors du dossier OneDrive si erreurs d'installation
- Certaines APIs nécessitent des headers spécifiques (User-Agent, etc.)

## Support

Pour signaler un bug ou demander une fonctionnalité, ouvrir une [issue](https://github.com/naahas/reqwest/issues)

## Licence

MIT - Voir le fichier [LICENSE](LICENSE) pour plus de détails

## Auteur

**Adam Jami**
- Portfolio : [adamjami.com](https://adamjami.com)
- GitHub : [@naahas](https://github.com/naahas)
