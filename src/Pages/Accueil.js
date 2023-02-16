import React from 'react';
import ProfilPic from "../Components/ProfilPic";
import SocialLogos from "../Components/SocialLogos";
import html from "../Assets/Logos/html.png";
import css from "../Assets/Logos/css.png";
import js from "../Assets/Logos/javascript.png";
import react from "../Assets/Logos/react.png";
import next from "../Assets/Logos/next-js.svg";
import firebase from "../Assets/Logos/firebase-icon.svg";
import tailwind from "../Assets/Logos/tailwind.png";
import bootstrap from "../Assets/Logos/bootstrap.png";
import mui from "../Assets/Logos/mui.png";
import affiPhoto from "../Assets/Logos/affinityphoto.png";
import affiDesigner from "../Assets/Logos/affinitydesigner.png";
import AccordeonPresentation from "../Components/AccordeonPresentation";

const Accueil = () => {
    const stackTechnique = [
        {name: "HTML", img: html},
        {name: "CSS", img: css},
        {name: "JavaScript", img: js},
        {name: "React", img: react},
        {name: "Next", img: next},
        {name: "Google Firebase", img: firebase},
    ]

    const stackCreative = [
        {name: "Tailwind", img: tailwind},
        {name: "Bootstrap", img: bootstrap},
        {name: "Material UI", img: mui},
        {name: "Affinity Photo", img: affiPhoto},
        {name: "Affinity Designer", img: affiDesigner},
    ]

    return (
        <div className="min-h-[80vh] lg:container flex flex-col items-center mx-auto my-[10vh] pt-5 md:animate-appear px-4">
            {/*Photo de profil*/}
            <ProfilPic/>
            <h1 className="text-2xl md:text-4xl md:py-1 font-headerTitle font-semibold">François Chevalier</h1>
            <h2 className="text-base md:text-xl"><em>Développeur Front End ReactJS</em></h2>

            {/*Réseaux sociaux*/}
            <SocialLogos/>

            {/*Technos*/}
            <div className="w-full flex flex-col items-center px-2 lg:px-10 my-10">
                <h2 className="md:text-3xl text-2xl font-bold text-bleu-vert font-headerTitle">
                    Stack
                    <span className="text-jaune ml-2">
                         technique
                    </span>
                </h2>
                <div
                    className="flex justify-evenly items-center w-full lg:w-1/2 rounded-2xl bg-gray-300 py-3 md:px-2 mt-3 mb-5">
                    {stackTechnique.map((techno, index) =>
                        <img className="h-[50px] md:h-[70px] w-auto object-cover" src={techno.img} alt={techno.name}
                             key={index}/>)}
                </div>
                <h2 className="md:text-3xl text-2xl font-bold text-bleu-vert font-headerTitle">
                    Stack
                    <span className="text-jaune ml-2">
                         créative
                    </span>
                </h2>
                <div
                    className="flex justify-evenly items-center w-full lg:w-1/2 rounded-2xl bg-gray-300 py-3 md:px-2 mt-3">
                    {stackCreative.map((techno, index) =>
                        <img className="h-[50px] md:h-[70px] w-auto object-cover" src={techno.img} alt={techno.name}
                             key={index}/>)}
                </div>
            </div>

            {/*Parcours*/}
            <div className="w-full flex flex-col items-start md:px-2 md:px-10 my-5">
                <h2 className="md:text-3xl text-2xl font-bold text-bleu-vert font-headerTitle pb-2">
                    Parcours
                </h2>
                <p className="font-bodyFont2 md:text-lg">
                    Après plus d’une dizaine d’années à évoluer dans des fonctions de{" "}
                    <strong>Sales Executive</strong>, de <strong>Chef de projet</strong> et
                    de <strong>Manager</strong> au sein de grands groupes, je suis
                    aujourd’hui développeur front end indépendant.
                    <br/>
                    <br/>
                    Durant cette carrière, j'ai conseillé mes clients sur leurs{" "}
                    <span style={{fontWeight: "bold"}}>
                    stratégies digitales et commerciales
                    </span>{" "}
                    afin de les aider à développer leur CA et améliorer leurs expériences
                    utilisateurs.
                </p>
                <p className="font-bodyFont2 md:text-lg">
                    Je mets à profit ces <strong>compétences techniques</strong>,{" "}
                    <strong>projet</strong> et <strong>métier</strong> en conseillant et en
                    accompagnant au mieux mes clients.
                </p>
            </div>

            {/*En savoir plus sur moi*/}
        {/*    <div className="w-full flex flex-col items-start px-4 md:px-2 md:px-10 my-5">*/}
        {/*        <h2 className="md:text-3xl text-2xl font-bold text-bleu-vert font-headerTitle pb-2">*/}
        {/*            Lire la suite...*/}
        {/*        </h2>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            J’ai choisi{" "}*/}
        {/*            <span className="text-jaune">*/}
        {/*            ReactJS*/}
        {/*            </span>{" "}*/}
        {/*            pour sa souplesse, sa robustesse et pour sa très vaste communauté de*/}
        {/*            développeuses et développeurs.*/}
        {/*        </p>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            Je mets à profit ces <strong>compétences techniques</strong>,{" "}*/}
        {/*            <strong>projet</strong> et <strong>métier</strong> en conseillant et en*/}
        {/*            accompagnant au mieux mes clients.*/}
        {/*        </p>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            Autodidacte dans l’âme, je maîtrise aujourd’hui une stack technique*/}
        {/*            moderne (cf ci-dessus) me permettant de pouvoir réaliser en toute*/}
        {/*            autonomie, les projets de sites ou d’applications web que vous*/}
        {/*            souhaitez réaliser.*/}
        {/*        </p>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            Par ailleurs, j’accorde une attention toute particulière à*/}
        {/*            l’interface graphique (UI) et à l’expérience utilisateur (UX) y*/}
        {/*            étant associée. <br/> <br/>*/}
        {/*            <span style={{fontWeight: "bold"}}>Ce que j’aime le plus</span> :*/}
        {/*            les choses claires, précises, intuitives et dans le respect des*/}
        {/*            délais.<br/> <br/>*/}
        {/*        </p>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            <strong className="text-jaune font-semibold">"Solutionniste"</strong>{" "}*/}
        {/*            <span style={{fontStyle: "italic"}}>*/}
        {/*            (subst. et adj. (Celui, celle) qui cherche systématiquement une,*/}
        {/*            des solution(s) Source: CNRS).*/}
        {/*            </span>{" "}*/}
        {/*            : j’aime appréhender des problèmes et découvrir/rechercher leurs*/}
        {/*            solutions, c’est ma plus grande source de motivation.*/}
        {/*        </p>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            <strong className="text-jaune font-semibold">*/}
        {/*                Excellent communiquant*/}
        {/*            </strong>{" "}*/}
        {/*            : je me mets aisément à la place de mon interlocuteur, ce qui me*/}
        {/*            permet de m’adapter à beaucoup de situations. Mon expérience en*/}
        {/*            tant que chef de projet m'a fait rencontrer de nombreux types de*/}
        {/*            métiers (ventes, marketing, IT, logistique, ...) et d'organisation*/}
        {/*            projet.*/}
        {/*        </p>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            <strong className="text-jaune font-semibold">Curieux</strong> : j’aime*/}
        {/*            comprendre les sujets en profondeur pour me les approprier, les*/}
        {/*            partager, et les utiliser à bon escient.*/}
        {/*        </p>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            <strong className="text-jaune font-semibold">Enjoué</strong> : je vois la*/}
        {/*            vie de manière très positive et toujours avec le sourire.*/}
        {/*        </p>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            <strong className="text-jaune font-semibold">Vie personnelle</strong> :*/}
        {/*            Passionné par les technologies quelqu’elles soient et "gamer" dans*/}
        {/*            l'âme, je suis également très sensible aux sujets liés à*/}
        {/*            l’environnement et au changement climatique. <br/>*/}
        {/*            J'aime pratiquer régulièrement le tennis, la guitare ou le piano.*/}
        {/*            Enfin, quand je ne suis pas devant un écran d'ordinateur, j’aime*/}
        {/*            profiter de la vie avec mon épouse, mes 2 enfants et mes amis.*/}
        {/*        </p>*/}
        {/*        <br/><br/>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            Je recherche, en priorité, des projets de développement de sites ou*/}
        {/*            d'applications web, intégrant la partie technique, UX, optimisation*/}
        {/*            du SEO.</p> <br/>*/}
        {/*        <p className="font-bodyFont2 md:text-lg">*/}
        {/*            Je travaille sur toutes les tailles de projets : landing page,*/}
        {/*            application blog, site e-commerce personnalisé, console de*/}
        {/*            gestion, maintenance, ou application spécifique.*/}
        {/*        </p>*/}

        {/*</div>*/}
                    <h2 className="md:text-3xl text-2xl font-bold text-bleu-vert font-headerTitle pb-2">
                        Lire la suite...
                    </h2>
            <AccordeonPresentation/>
</div>
)
    ;
};

export default Accueil;