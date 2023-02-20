import React, {useState} from "react";
import faireIcon from "../Assets/SVG/internet.svg";
import etreIcon from "../Assets/SVG/thinking.svg";
import chercherIcon from "../Assets/SVG/loupe.svg";

const Accordion = () => {
    const [sections, setSections] = useState([
        {
            id: "faire",
            title: "Ce que je fais",
            isOpen: false,
            icon: faireIcon,
            content: (
                <div className="p-5 font-light">
                    <p className="font-bodyFont2 md:text-lg">
                        J’ai choisi{" "}
                        <span className="text-jaune bg-bleu-vert font-bold">
                    ReactJS
                    </span>{" "}
                        pour sa souplesse, sa robustesse et pour sa très vaste communauté de
                        développeuses et développeurs.
                    </p><br/>

                    <p className="font-bodyFont2 md:text-lg">
                        Autodidacte dans l’âme, je maîtrise une stack technique
                        moderne (cf ci-dessus) me permettant de pouvoir réaliser en toute
                        autonomie, les projets de sites ou d’applications web que vous
                        souhaitez réaliser.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        Par ailleurs, j’accorde une attention toute particulière à
                        l’interface graphique (UI) et à l’expérience utilisateur (UX). <br/> <br/>
                        <span className="font-bold text-silver-lake">Ce que j’aime le plus</span> :
                        les choses claires, précises, intuitives et dans le respect des
                        délais.
                    </p>
                </div>
            ),
        },
        {
            id: "etre",
            title: "Qui je suis",
            isOpen: false,
            icon: etreIcon,
            content: (
                <div className="p-5">
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-silver-lake font-bold">"Solutionniste"</strong>{" "}
                        <span className="font-light italic text-sm">
                    (subst. et adj. (Celui, celle) qui cherche systématiquement une,
                    des solution(s) Source: CNRS).
                    </span>{" "}<br/>
                        J’aime appréhender des problèmes et découvrir/rechercher leurs
                        solutions, c’est ma plus grande source de motivation.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-silver-lake font-bold">
                            Excellent communiquant
                        </strong>{" "}<br/>
                        Je me mets aisément à la place de mon interlocuteur, ce qui me
                        permet de m’adapter à beaucoup de situations. Mon expérience en
                        tant que chef de projet m'a fait rencontrer de nombreux types de
                        métiers (ventes, marketing, IT, logistique, ...) et d'organisation
                        projet.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-silver-lake font-bold">Curieux</strong><br/>
                        J’aime
                        comprendre les sujets en profondeur pour me les approprier, les
                        partager, et les utiliser à bon escient.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-silver-lake font-bold">Enjoué</strong><br/>
                        Je vois la
                        vie de manière très positive et toujours avec le sourire.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-silver-lake font-bold">Vie personnelle</strong><br/>
                        Passionné par les technologies quelqu’elles soient et "gamer" invétéré, je suis également très sensible aux sujets liés à
                        l’environnement et au changement climatique. <br/>
                        J'aime pratiquer régulièrement le tennis, la guitare ou le piano.
                        Enfin, quand je ne suis pas devant un écran d'ordinateur, j’aime
                        profiter de la vie avec mon épouse, mes 2 enfants et mes amis.
                    </p>
                </div>
            ),
        },
        {
            id: "chercher",
            title: "Ce que je recherche",
            isOpen: false,
            icon: chercherIcon,
            content: (
                <div className="p-5 font-light">
                    <p className="font-bodyFont2 md:text-lg">
                        Je recherche, en priorité, des projets de développement de sites ou
                        d'applications web, intégrant la partie technique, UX, optimisation
                        du SEO.</p> <br/>
                    <p className="font-bodyFont2 md:text-lg">
                        Je travaille sur toutes les tailles de projets : landing page,
                        application blog, site e-commerce personnalisé, console de
                        gestion, maintenance, ou application spécifique.
                    </p>
                </div>
            ),
        }
    ]);

    const toggleSection = (id) => {
        setSections(
            sections.map((section) =>
                section.id === id ? {...section, isOpen: !section.isOpen} : section
            )
        );
    };

    return (
        <div className="w-full mx-2">
            {sections.map((section) => (
                <div key={section.id} className="mb-3">
                    <h2 id={`accordion-collapse-heading-${section.id}`}>
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left text-jaune border bg-bleu-vert border-bleu-vert rounded-2xl focus:ring-4 focus:ring-jaune`}
                            data-accordion-target={`#accordion-collapse-body-${section.id}`}
                            aria-expanded={section.isOpen}
                            onClick={() => toggleSection(section.id)}
                            aria-controls={`accordion-collapse-body-${section.id}`}
                        >
                            <div className="flex items-center">
                                <img src={section.icon} alt="icône qui représente la section concernée" className="h-[50px] w-auto mr-5"/>
                                <span className="text-xl font-bodyFont2 font-bold">{section.title}</span>
                            </div>

                            <svg
                                className={`w-6 h-6 ${section.isOpen ? "rotate-180" : ""} shrink-0`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.29289C6.65338 7.93241 7.22061 7.90468 7.6129 8.2097L7.70711 8.29289L10 10.585L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L13.6129 9.7903L10.7071 12.6962C10.3166 13.0867 9.68342 13.0867 9.29289 12.6962L6.38709 9.7903C5.9948 9.39532 5.92662 8.76803 6.29289 8.29289Z"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id={`accordion-collapse-body-${section.id}`}
                        data-accordion-content
                        className={`${
                            section.isOpen ? "block" : "hidden"
                        } p-3 font-light bg-white border border-bleu-vert border-opacity-50 border-t-0 rounded-b-xl`}
                        aria-labelledby={`accordion-collapse-heading-${section.id}`}
                    >
                        {section.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;