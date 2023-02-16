import React, {useState} from 'react';

const AccordeonPresentation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="w-full sm:w-3/4 mx-2" id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
                <button type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-collapse-body-1" aria-expanded={isOpen}
                        onClick={toggleOpen}
                        aria-controls="accordion-collapse-body-1">
                    <span className="text-lg font-bodyFont2 font-bold">Ce que je fais</span>
                    <svg className={`w-6 h-6 ${isOpen ? "rotate-180" : ""} shrink-0`} fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" className={`${isOpen ? "block" : "hidden"}`} aria-labelledby="accordion-collapse-heading-1">
                <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="font-bodyFont2 md:text-lg">
                        J’ai choisi{" "}
                        <span className="text-jaune">
                    ReactJS
                    </span>{" "}
                        pour sa souplesse, sa robustesse et pour sa très vaste communauté de
                        développeuses et développeurs.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        Je mets à profit ces <strong>compétences techniques</strong>,{" "}
                        <strong>projet</strong> et <strong>métier</strong> en conseillant et en
                        accompagnant au mieux mes clients.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        Autodidacte dans l’âme, je maîtrise aujourd’hui une stack technique
                        moderne (cf ci-dessus) me permettant de pouvoir réaliser en toute
                        autonomie, les projets de sites ou d’applications web que vous
                        souhaitez réaliser.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        Par ailleurs, j’accorde une attention toute particulière à
                        l’interface graphique (UI) et à l’expérience utilisateur (UX) y
                        étant associée. <br/> <br/>
                        <span style={{fontWeight: "bold"}}>Ce que j’aime le plus</span> :
                        les choses claires, précises, intuitives et dans le respect des
                        délais.
                    </p>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
                <button type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-collapse-body-2" aria-expanded={isOpen}
                        onClick={toggleOpen}
                        aria-controls="accordion-collapse-body-2">
                    <span className="text-lg font-bodyFont2 font-bold">Qui je suis</span>
                    <svg className={`w-6 h-6 ${isOpen ? "rotate-180" : ""} shrink-0`} fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" className={`${isOpen ? "block" : "hidden"}`} aria-labelledby="accordion-collapse-heading-2">
                <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-jaune font-semibold">"Solutionniste"</strong>{" "}
                        <span style={{fontStyle: "italic"}}>
                    (subst. et adj. (Celui, celle) qui cherche systématiquement une,
                    des solution(s) Source: CNRS).
                    </span>{" "}
                        : j’aime appréhender des problèmes et découvrir/rechercher leurs
                        solutions, c’est ma plus grande source de motivation.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-jaune font-semibold">
                            Excellent communiquant
                        </strong>{" "}
                        : je me mets aisément à la place de mon interlocuteur, ce qui me
                        permet de m’adapter à beaucoup de situations. Mon expérience en
                        tant que chef de projet m'a fait rencontrer de nombreux types de
                        métiers (ventes, marketing, IT, logistique, ...) et d'organisation
                        projet.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-jaune font-semibold">Curieux</strong> : j’aime
                        comprendre les sujets en profondeur pour me les approprier, les
                        partager, et les utiliser à bon escient.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-jaune font-semibold">Enjoué</strong> : je vois la
                        vie de manière très positive et toujours avec le sourire.
                    </p><br/>
                    <p className="font-bodyFont2 md:text-lg">
                        <strong className="text-jaune font-semibold">Vie personnelle</strong> :
                        Passionné par les technologies quelqu’elles soient et "gamer" dans
                        l'âme, je suis également très sensible aux sujets liés à
                        l’environnement et au changement climatique. <br/>
                        J'aime pratiquer régulièrement le tennis, la guitare ou le piano.
                        Enfin, quand je ne suis pas devant un écran d'ordinateur, j’aime
                        profiter de la vie avec mon épouse, mes 2 enfants et mes amis.
                    </p>
                </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
                <button type="button"
                        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-collapse-body-3" aria-expanded={isOpen}
                        onClick={toggleOpen}
                        aria-controls="accordion-collapse-body-3">
                    <span className="text-lg font-bodyFont2 font-bold">Ce que je recherche</span>
                    <svg className={`w-6 h-6 ${isOpen ? "rotate-180" : ""} shrink-0`} fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-3" className={`${isOpen ? "block" : "hidden"}`} aria-labelledby="accordion-collapse-heading-3">
                <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
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
            </div>
        </div>
    );
};

export default AccordeonPresentation;