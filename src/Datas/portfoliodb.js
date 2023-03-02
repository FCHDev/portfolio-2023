//COVERS
import appCooking from "../Assets/Images/mockup_cooking.png";
import siteBali from "../Assets/Images/mockup_bali.png";
import appCountries from "../Assets/Images/mockup_countries.png";
import sliderPhotos from "../Assets/Images/sliderPhotos.png";
import multiLangues from "../Assets/Images/multi-languages.png";
import chrono from "../Assets/Images/mockup_chrono.jpg";
import agency from "../Assets/Images/mockup_webagency.png";
import guitarists from "../Assets/Images/mockup_guitarists.png";
import dailygreen from "../Assets/Images/mockup_dailygreen.png";
import artwork from "../Assets/Images/mockup_artwork.jpg";
import alternativo from "../Assets/Images/mockup_alternativo.png";
import alternativoLogo from "../Assets/Images/logo-alternativo.png"
import mysteries from "../Assets/Images/mockup_mysteries.png"
import mysteriesLogo from "../Assets/Images/logo-mysteries.webp"
import audioPlayer from "../Assets/Images/mockup_audioPlayer.png";


// LOGOS
import html from "../Assets/Logos/html.png";
import css from "../Assets/Logos/css.png";
// import js from "../Assets/Logos/javascript.png";
import react from "../Assets/Logos/react.png";
import typescript from "../Assets/Logos/typescript.svg";
import firebase from "../Assets/Logos/firebase-icon.svg";

export const portfoliodb = [
    {
        name: "Cooking",
        author: "François Chevalier",
        id: 10,
        type: "Site App",
        color: "bg-rose-rouge",
        textColor: "text-rose-rouge",
        year: "2022",
        url: "https://worlds-cooking.netlify.app/",
        cover: appCooking,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Application permettant d'effectuer une recherche de recettes par ingrédients (en anglais). La vue de départ reprend les 250 recettes que nous renvoie l'API. La description précise, l'origine et une vidéo tutorielle sont disponibles pour chacune des recettes listées.",
        api: "API utilisée : TheMealDB",
        apiUrl: "https://www.themealdb.com/",
    },
    {
        name: "Tourisme à Bali",
        author: "François Chevalier",
        id: 5,
        type: "Site / Landing",
        color: "bg-jaune",
        textColor: "text-jaune",
        year: "2022",
        url: "https://go-to-bali.netlify.app/",
        git: "https://github.com/FCHDev/site-bali",
        cover: siteBali,
        tools: ["HTML-CSS"],
        toolsLogo: html,
        toolsLogo2: css,
        language: "Fr",
        description:
            "Site statique type 'Tour Operator' proposant une succincte présentation de l'île de Bali. " +
            "De plus, il propose 3 différentes offres pour la réservation d'un guide personnel. Enfin, un formulaire de contact (inactif) est positionné en bas de page.",
    },
    {
        name: "Countries Flags",
        author: "François Chevalier",
        id: 6,
        type: "Site App",
        color: "bg-rose-rouge",
        textColor: "text-rose-rouge",
        year: "2022",
        url: "https://countries-watcher.netlify.app/",
        git: "https://github.com/FCHDev/countries-watcher",
        cover: appCountries,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Application permettant d'effectuer une recherche de pays par continents. Les pays sont triés par le nombre d'habitants, possibilité d'étendre l'affichage grâce au slider. Enfin, une section 'Blog' (liée à une API que j'ai réalisée) est disponible.",
        api: "API utilisée : REST Countries",
        apiUrl: "https://restcountries.com/",
    },
    {
        name: "Slider Photos",
        author: "François Chevalier",
        id: 31,
        type: "Feature",
        color: "bg-chocolat",
        textColor: "text-chocolat",
        year: "2022",
        url: "http://photoslider.fch80.com/",
        cover: sliderPhotos,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Simple fonctionnalité/composant 'slider' pouvant être exporté dans n'importe quel projet React.",
    },
    {
        name: "Multi-langues",
        author: "François Chevalier",
        id: 32,
        type: "Feature",
        color: "bg-chocolat",
        textColor: "text-chocolat",
        year: "2022",
        url: "http://multilanguages.fch80.com/",
        cover: multiLangues,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Simple fonctionnalité/composant 'multi-langues' pouvant être exporté dans n'importe quel projet React.",
    },
    {
        name: "Classic Pomodoro",
        author: "François Chevalier",
        id: 7,
        type: "Site App",
        color: "bg-rose-rouge",
        textColor: "text-rose-rouge",
        year: "2022",
        url: "https://very-simple-pomodoro-app.netlify.app/",
        cover: chrono,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Application type 'Pomodoro' permettant de gérer sa productivité en alternant des phases 'actives et des phases de 'break'.",
    },
    {
        name: "FCH Agency",
        author: "François Chevalier",
        id: 9,
        type: "Site / Landing",
        color: "bg-jaune",
        textColor: "text-jaune",
        year: "2022",
        url: "https://fch-agency.netlify.app/",
        git: "https://github.com/FCHDev/web-agency",
        cover: agency,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Site vitrine d'une agence web fictive présentant : Navigation, Portfolio, Formulaire de contact. Animations et transitions (React Framer Motion)",
    },
    {
        name: "DailyGreen",
        author: "François Chevalier",
        id: 8,
        type: "e-commerce",
        color: "bg-bleu-vert",
        textColor: "text-bleu-vert",
        year: "2022",
        url: "https://dailygreen.netlify.app/",
        git: "https://github.com/FCHDev/my-green-shop",
        cover: dailygreen,
        tools: ["React-JS"],
        toolsLogo: react,
        toolsLogo2: typescript,
        toolsLogo3: firebase,
        language: "Fr",
        description:
            "Site e-commerce mettant en vente des produits bio et respectueux de l'environnement.",
        api: "API utilisée : Google Firebase",
    },
    {
        name: "guitarists_",
        author: "François Chevalier",
        id: 1,
        type: "Site App",
        color: "bg-rose-rouge",
        textColor: "text-rose-rouge",
        year: "2022",
        url: "https://guitarists-db.netlify.app/",
        git: "https://github.com/FCHDev/guitarists-app",
        cover: guitarists,
        tools: ["React-JS"],
        toolsLogo: react,
        toolsLogo2: firebase,
        language: "Fr",
        description:
            "Base de données francophone que j'ai conçue et hébergée via Firebase. L'objectif est de donner accès à un catalogue croissant de guitaristes légendaires, et de proposer une visualisation de leur Bio en Fr. Le tout dans une interface simple et conviviale.",
        api: "API utilisée : Google Firebase",
    },
    {
        name: "My Artworks Gallery",
        author: "François Chevalier",
        id: 0,
        type: "Site App",
        color: "bg-rose-rouge",
        textColor: "text-rose-rouge",
        year: "2023",
        url: "https://my-ai-art.netlify.app/",
        git: "https://github.com/FCHDev/ai-art-browser",
        cover: artwork,
        tools: ["React-JS"],
        toolsLogo: react,
        toolsLogo2: firebase,
        language: "Fr",
        description:
            "Gallerie d'images réalisées avec MidJourney. Authentification via Firebase. Possibilité de trier les images, et/ou de les ajouter à son espace 'Favoris' privatif. Un CMS (pour Admin) est disponible pour l'ajout de nouvelles images. MISE À JOUR HEBDOMADAIRE.",
        api: "API utilisée : Google Firebase",
    },
    {
        name: "Alternativo",
        author: "François Chevalier",
        id: 2,
        type: "Site / Landing",
        color: "bg-jaune",
        textColor: "text-jaune",
        year: "2023",
        url: "https://alternativo.netlify.app/",
        git: "https://github.com/FCHDev/ai-art-browser",
        cover: alternativo,
        logo: alternativoLogo,
        tools: ["Next-JS", "Firebase", "TailwindCSS"],
        toolsLogo: react,
        toolsLogo2: firebase,
        language: "Fr",
        professional: true,
        description: "Un joli projet de landing page pour une toute jeune entreprise du Sud-Ouest spécialisée dans le conseil en gestion de patrimoine.",
        projectDescription:[
            "Jeune entreprise du Sud-Ouest spécialisée dans le conseil en gestion de patrimoine, Alternativo a fait appel à mes services pour la création de leur site vitrine. Leur objectif était de présenter leurs services, d'augmenter le volume de RDV et de mettre en avant leur expertise dans le domaine de la gestion de patrimoine.",
            "Ils souhaitaient pouvoir présenter à leurs clients, un site responsive, simple, clair et en total cohérence avec leurs valeurs et leur chartre graphique. Ils souhaitaient également pouvoir mettre à jour leur site eux-mêmes, sans avoir à faire appel à un développeur. J'ai donc opté pour la solution NextJS combinée à Firebase pour la gestion de leur base de données, et TailwindCSS pour la mise en page du site.",
            "Ils m'ont également sollicité pour la déclaration du nom de domaine, de l'hébergement et de la mise en place de la base de données Firebase.",
            "Le site est actuellement en ligne, et est régulièrement mis à jour par l'entreprise."
        ],
        testimony: [
            "François a été très réactif et à l'écoute de nos besoins. Il a su nous proposer une solution adaptée à notre budget, et nous a accompagné tout au long du projet. Nous sommes très satisfaits du résultat, et nous recommandons vivement ses services."
        ],
        clientName: "Marion, co-fondatrice d'",
        api: "API utilisée : Google Firebase",
    },
    {
        name: "Mysteries Hunt",
        author: "François Chevalier",
        id: 4,
        type: "SEO",
        color: "bg-silver-lake",
        textColor: "text-silver-lake",
        year: "2023",
        url: "https://www.mysteries-hunt.com/",
        cover: mysteries,
        logo: mysteriesLogo,
        tools: ["Google Analytics", "Google Search Console"],
        language: "Fr",
        professional: true,
        description: "Optimisation du référencement naturel pour le site Mysteries Hunt, spécialiste du Team building et des Enquêtes historiques à Versailles ou Paris.",
        projectDescription:[
            "Depuis maintenant plus de 10 ans, Mysteries Hunt organise des enquêtes spatio-temporelles, des jeux de piste, escape game ou encore Team Building à Versailles ou au coeur de Paris. Une forte concurrence dans ce domaine se fait aujourd'hui plus forte, et l'objectif principal de la mission était l'amélioration de leur référencement naturel.",
            "Le site étant hébergé depuis la création sur Wix, j'ai d'abord du définir les intentions de recherches les plus pertinentes (avec une forte volonté de s'orienter vers des prestations B2B / Team building), redéfinir tous les titres des médias en ligne, gestion des titres, des métadonnées, des adresses en page d'accueil, etc...",
            "L'audit et la mise en place de la stratégie SEO ont été réalisés en 1 mois. Le site a été optimisé pour les moteurs de recherche, et les résultats sont très satisfaisants. Le site est actuellement en première page de Google pour les mots clés les plus importants, et le trafic est en constante augmentation."
        ],
        testimony: [
            "François a été très réactif et à l'écoute de nos besoins. Il a su nous écouter, et nous a accompagné tout au long du projet. Points forts : la communication et la disponibilité de François ont été particulièrement déterminantes. Notre business est très saisonnier, c'est pourquoi, nous voulions profiter de la période hivernale pour travailler notre visibilité en ligne et nous assurer un meilleur référencement pour les mois de printemps et d'été qui arrivent. Nous recommandons vivement ses services."
        ],
        clientName: "Cyril, co-fondateur de ",
    },
    {
        name: "Audio player",
        author: "François Chevalier",
        id: 3,
        type: "Site App",
        color: "bg-rose-rouge",
        textColor: "text-rose-rouge",
        year: "2022",
        url: "https://audio-player-react.netlify.app/",
        git: "https://github.com/FCHDev/ai-art-browser",
        cover: audioPlayer,
        tools: ["React-JS"],
        toolsLogo: react,
        language: "Fr",
        professional: false,
        detailsUrl: "https://www.google.com",
        description:
            "Le lecteur audio designé pour le mobile en priorité. Contient un peu plus d'une dizaine de titres. Gestion de la lecture, de la pause, du volume, de la progression de la lecture, de la sélection de la piste.",
    },
];
