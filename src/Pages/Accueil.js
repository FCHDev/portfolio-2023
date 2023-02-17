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
import arrowDown from "../Assets/SVG/down-arrow.svg";
import Accordion from "../Components/Accordion";

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
        <div
            className="min-h-[80vh] lg:container flex flex-col items-center mx-auto mt-[11vh] pt-5 md:animate-appear px-4 md:px-0">
            <div className="h-screen sm:h-max flex flex-col justify-center items-center">
                {/*Photo de profil*/}
                <ProfilPic/>
                <h1 className="text-2xl md:text-4xl md:py-1 font-headerTitle font-semibold">François Chevalier</h1>
                <h2 className="text-base md:text-xl"><em>Développeur Front End ReactJS</em></h2>

                {/*Réseaux sociaux*/}
                <SocialLogos/>
                <div className="pt-10 animate-pulse">
                    <a href="#tech">
                        <img src={arrowDown} alt="flèche qui indique qu'il faut scroller vers le bas"
                             className="sm:hidden h-[60px]"/>
                    </a>
                </div>
            </div>

            <div id="tech" className="sm:hidden pt-5"></div>

            {/*Technos*/}
            <div
                className="w-full flex flex-col items-center px-2 py-3 mt-20 mb-10 border border-bleu-vert border-opacity-50 rounded-2xl bg-white">
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
            <div className="w-full flex flex-col items-center sm:items-start md:px-2 md:px-10 my-5">
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

            {/*Lire la suite...*/}
            <div className="w-full flex flex-col items-center sm:items-start md:px-2 md:px-10 my-5">
                <h2 className="md:text-3xl text-2xl font-bold text-bleu-vert font-headerTitle pb-5">
                    Plus en détails...
                </h2>
                <Accordion/>
            </div>

        </div>
    )
        ;
};

export default Accueil;