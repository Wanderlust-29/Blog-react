const blogPosts = [
  {
    title:
      "Démarrer avec Réactivité : Créer votre première application React avec Vite",
    expert: "Jean Dupont, Développeur React expérimenté",
    excerpt:
      "React a révolutionné le développement web. Pour vous lancer, plongeons dans la création d'une application React avec Vite. Vite, un outil de construction rapide, offre une combinaison puissante avec React. Suivez ces étapes détaillées pour commencer votre voyage avec Réact et Vite...",
    content: `
    <p>React a révolutionné le développement web. Pour vous lancer, plongeons dans la création d'une application React avec Vite. Vite, un outil de construction rapide, offre une combinaison puissante avec React. Suivez ces étapes détaillées pour commencer votre voyage avec Réact et Vite.</p>

    <h2>Étape 1 : Installation de Vite</h2>
    <p>Commencez par installer Vite via npm (Node Package Manager). Utilisez la commande suivante dans votre terminal :</p>

    <pre><code>npm create vite my-react-app
cd my-react-app
npm install</code></pre>

    <h2>Étape 2 : Développement interactif</h2>
    <p>Expérimentez l'environnement de développement interactif de Vite. Lancez le serveur de développement avec la commande :</p>

    <pre><code>npm run dev</code></pre>

    <p>Vite surveille automatiquement les modifications, offrant une expérience de développement fluide.</p>

    <h2>Étape 3 : Composants React</h2>
    <p>Explorez la création de composants React dans le répertoire "src". Vite prend en charge JSX, rendant le processus familier.</p>

    <h2>Étape 4 : Construction pour la production</h2>
    <p>Finalisez votre application avec la commande :</p>

    <pre><code>npm run build</code></pre>

    <p>Votre application est désormais prête à être déployée !</p>

    <p>En suivant ces étapes approfondies, vous avez établi une base solide pour développer des applications React modernes avec Vite. Explorez davantage pour maîtriser toutes les fonctionnalités.</p>
    `,
    wordCount: 317,
    profileImageURL: "https://i.pravatar.cc/150?img=69",
    image: "https://picsum.photos/1200/600/?random",
    thumbnail: "https://picsum.photos/400/200/?random",
  },
  {
    title:
      "Productivité Maximale : Configurer un Espace de Travail React avec Visual Studio Code",
    expert: "Marie Martin, Développeuse Front-End",
    excerpt:
      "En tant que développeur React, l'optimisation de votre espace de travail est essentielle. Visual Studio Code (VS Code) offre des fonctionnalités exceptionnelles pour faciliter le développement React. Suivez ces étapes approfondies pour configurer votre espace de travail React avec VS Code...",
    content: `
    <p>En tant que développeur React, l'optimisation de votre espace de travail est essentielle. Visual Studio Code (VS Code) offre des fonctionnalités exceptionnelles pour faciliter le développement React. Suivez ces étapes approfondies pour configurer votre espace de travail React avec VS Code.</p>

    <h2>Étape 1 : Installation de VS Code</h2>
    <p>Téléchargez et installez Visual Studio Code depuis le site officiel.</p>

    <h2>Étape 2 : Extensions React</h2>
    <p>Explorez le marché d'extensions de VS Code et installez celles spécifiquement dédiées à React, comme "ESLint", "Prettier", et "React Snippets".</p>

    <h2>Étape 3 : Configurations utilisateur</h2>
    <p>Personnalisez les paramètres utilisateur de VS Code selon vos préférences. Accédez à "File" &gt; "Preferences" &gt; "Settings" pour des options adaptées.</p>

    <h2>Étape 4 : Intégration avec Git</h2>
    <p>Si vous utilisez Git, activez son intégration dans VS Code. Facilitez la gestion des branches et des commits.</p>

    <p>Avec ces étapes approfondies, vous avez créé un environnement de travail React optimisé avec Visual Studio Code. Profitez de ses fonctionnalités puissantes pour développer des applications React efficacement.</p>
    `,
    wordCount: 351,
    profileImageURL: "https://i.pravatar.cc/150?img=49",
    image: "https://picsum.photos/1200/600/?random",
    thumbnail: "https://picsum.photos/400/200/?random",
  },
  {
    title:
      "Navigation sans Connexion : Créer un Site Web Hors Ligne avec JavaScript Vanilla",
    expert: "Nicolas Leclerc, Développeur Web Indépendant",
    excerpt:
      "Offrez une expérience utilisateur hors ligne transparente avec un site web simple en JavaScript Vanilla. Suivez ces étapes approfondies pour rendre votre site accessible même sans connexion Internet...",
    content: `
    <p>Offrez une expérience utilisateur hors ligne transparente avec un site web simple en JavaScript Vanilla. Suivez ces étapes approfondies pour rendre votre site accessible même sans connexion Internet.</p>

    <h2>Étape 1 : Gestion du Cache</h2>
    <p>Utilisez le service Worker pour mettre en cache les ressources nécessaires, comme les fichiers HTML, CSS, et JavaScript, dès la première visite du site.</p>

    <h2>Étape 2 : Détection de la Connexion</h2>
    <p>Ajoutez une fonction de détection de connexion. Si la connexion Internet est disponible, le site fonctionne normalement. Sinon, il bascule en mode hors ligne avec les ressources mises en cache.</p>

    <h2>Étape 3 : Mise à Jour Automatique du Cache</h2>
    <p>Configurez le service Worker pour mettre automatiquement à jour le cache lorsque le site est en ligne.</p>

    <p>Grâce à ces étapes détaillées, votre site web fonctionnera sans accroc, offrant une expérience utilisateur ininterrompue, indépendamment de la connexion Internet.</p>
    `,
    wordCount: 312,
    profileImageURL: "https://i.pravatar.cc/150?img=3",
    image: "https://picsum.photos/1200/600/?random",
    thumbnail: "https://picsum.photos/400/200/?random",
  },
  {
    title:
      "Style sans Effort : Les Meilleures Méthodes pour Maîtriser Tailwind CSS",
    expert: "Camille Dufour, Designer d'Interface",
    excerpt:
      "Tailwind CSS simplifie le stylisme des sites web avec des classes utilitaires prêtes à l'emploi. Voici quelques conseils approfondis pour maîtriser rapidement cet outil et optimiser votre flux de travail de design...",
    content: `
    <p>Tailwind CSS simplifie le stylisme des sites web avec des classes utilitaires prêtes à l'emploi. Voici quelques conseils approfondis pour maîtriser rapidement cet outil et optimiser votre flux de travail de design.</p>

    <h2>Documentation Officielle</h2>
    <p>Explorez en profondeur la documentation officielle de Tailwind CSS, offrant des explications détaillées sur chaque classe et son utilisation.</p>

    <h2>Projets Pratiques</h2>
    <p>La pratique régulière est essentielle. Appliquez Tailwind CSS dans des projets concrets pour une compréhension approfondie.</p>

    <h2>Tutoriels Vidéo</h2>
    <p>Utilisez des tutoriels vidéo pour un apprentissage visuel. Recherchez des tutoriels sur YouTube ou des plateformes en ligne pour voir Tailwind CSS en action.</p>

    <h2>Communauté en Ligne</h2>
    <p>Participez à des forums et groupes en ligne dédiés à Tailwind CSS. Interagissez avec d'autres membres pour rester informé des dernières astuces.</p>

    <p>Avec ces conseils approfondis, maîtriser Tailwind CSS devient une réalité, accélérant votre processus de stylisation.</p>
    `,
    wordCount: 325,
    profileImageURL: "https://i.pravatar.cc/150?img=1",
    image: "https://picsum.photos/1200/600/?random",
    thumbnail: "https://picsum.photos/400/200/?random",
  },
  {
    title:
      "Structure Significative : Utiliser la Sémantique HTML pour un Portfolio Impeccable",
    expert: "Olivier Lambert, Développeur Front-End et UX Designer",
    excerpt:
      "La sémantique HTML joue un rôle crucial dans la création d'un portfolio web clair et accessible. Suivez ces conseils approfondis d'Olivier Lambert pour utiliser la sémantique HTML de manière efficace dans la construction de votre portfolio en ligne...",
    content: `
    <p>La sémantique HTML joue un rôle crucial dans la création d'un portfolio web clair et accessible. Suivez ces conseils approfondis d'Olivier Lambert pour utiliser la sémantique HTML de manière efficace dans la construction de votre portfolio en ligne.</p>

    <h2>Balises Structurelles</h2>
    <p>Utilisez des balises HTML structurelles comme &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, et &lt;footer&gt; pour organiser votre contenu logiquement.</p>

    <h2>Balises Sémantiques</h2>
    <p>Intégrez des balises sémantiques telles que &lt;article&gt;, &lt;figure&gt;, &lt;figcaption&gt;, et &lt;time&gt; pour donner du sens à votre contenu.</p>

    <h2>Accessibilité</h2>
    <p>Assurez-vous que votre portfolio est accessible à tous. Utilisez des attributs tels que alt pour les images et garantissez la compatibilité avec les lecteurs d'écran.</p>

    <h2>Optimisation SEO</h2>
    <p>La sémantique HTML correcte contribue à l'optimisation pour les moteurs de recherche. Utilisez des balises appropriées pour faciliter la compréhension du contenu par les moteurs de recherche.</p>

    <p>En suivant ces conseils approfondis, vous créerez un portfolio web bien structuré, accessible et optimisé pour les moteurs de recherche.</p>
    `,
    wordCount: 331,
    profileImageURL: "https://i.pravatar.cc/150?img=11",
    image: "https://picsum.photos/1200/600/?random",
    thumbnail: "https://picsum.photos/400/200/?random",
  },
];

export default blogPosts;
