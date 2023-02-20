import React from 'react';
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";
import {NavLink} from "react-router-dom";

const Offre = () => {

    const tarifsItems = [
        {
            title: 'Site web',
            level: 'Niveau 1',
            ssTitle: 'Landing page, site vitrine, site institutionnel...',
            price: 1200,
            features: ['Meeting/Call de cadrage', '4 pages (max)', '1x formulaire de contact', 'Optimisation référencement', 'Hosting/SSL/Domaine', '1 mois de support technique']
        },
        {
            title: 'App web',
            level: 'Niveau 2',
            ssTitle: 'e-commerce, site de services, site web complexe, Dataviz',
            price: 2500,
            features: ['Meeting/Call de cadrage', 'Gestion Backend avec CMS sur-mesure', 'Optimisation référencement', 'Hosting/SSL/Domaine', '3 mois de support technique', 'Remise des livrables']
        },
        {
            title: 'Optimisation SEO',
            level: 'Selon nombre de pages',
            ssTitle: 'Objectif : apparaitre en 1ère page des résultats Google',
            price: 900,
            features: ['Recherche et définition des intentions de recherche', 'Optimisations on-page', 'Création de contenu de qualité', 'Création de backlinks', 'Suivi et analyse des résultats / Livrables']
        },
        // {title: 'Régie', level: 'Prestation au TJM', ssTitle: 'Remote ou "sur site"', price: 450, features: ['Communication avec le client', "Développement et gestion du code", "Collaboration avec l'équipe en place", 'Respect des délais et du budget', 'Suivi et reporting / Livrables']},
    ]

    const options = {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
        currencySpacing: {
            currency: true,
            separator: ' '
        }
    };

    return (
        <div
            className="min-h-[80vh] container flex justify-center items-center mx-auto mt-[10vh] sm:mb-[4vh] 2xl:mb-0 md:pt-5 2xl:pt-0 animate-appear">
            <ScrollToTopOnMount/>
            <section className="bg-white md:px-16">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-bleu-vert">
                            Une offre de services claire pour vos
                            projets personnalisés
                        </h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl">Découvrez mes offres <span className="text-jaune bg-bleu-vert font-bold text-xl sm:text-2xl">au forfait</span> ou <span className="bg-jaune text-bleu-vert font-bold text-xl sm:text-2xl">en régie</span> et trouvez la solution qui convient le mieux à
                            votre entreprise et à votre budget.</p>
                    </div>

                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/*Pricing Card*/}
                        {tarifsItems.map((tarif, index) => (
                                <div
                                    className="flex flex-col p-6 mx-auto max-w-lg justify-between text-center bg-bleu-vert rounded-lg border border-gray-100 shadow-lg"
                                    key={index}>
                                    <div>
                                        <h3 className="mb-2 text-2xl font-bold text-jaune">
                                            {tarif.title}
                                        </h3>
                                        <span className="font-semibold font-bodyFont2 text-silver-lake">{tarif.level}</span>
                                        <p className="font-light text-gray-200 sm:text-lg">
                                            {tarif.ssTitle}
                                        </p>
                                        <div className="flex flex-col justify-center items-center my-8">
                                            <span className={`text-xs font-bodyFont2 text-gray-400`}>à partir de</span>
                                            <span className="text-5xl font-extrabold text-jaune font-headerTitle">
                                                {(tarif.price).toLocaleString('fr-FR', options)}
                                            </span>
                                            {/*<span className="text-gray-500">/month</span>*/}
                                        </div>
                                        {/*List*/}
                                        <ul className="mb-8 space-y-4 text-left">
                                            {tarif.features.map((feature, index) => (
                                                <li className="flex items-center space-x-3 font-bodyFont2 text-white" key={index}>
                                                    {/*Icon*/}
                                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                                         fill="currentColor" viewBox="0 0 20 20"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd"
                                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                              clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <NavLink to="/contact"
                                             className="bg-jaune text-bleu-vert font-bodyFont2 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-lg sm:text-base px-5 py-4 sm:py-2.5 text-center">
                                        C'est parti !
                                    </NavLink>
                                </div>
                            )
                        )}
                    </div>


                    <div
                        className="flex flex-col p-6 mx-auto max-w-lg mt-20 justify-between text-center bg-jaune rounded-lg border border-gray-100 shadow-lg">
                        <div>
                            <h3 className="mb-2 text-2xl font-bold text-bleu-vert font-bodyFont2">
                                Taux journalier
                            </h3>
                            <p className="font-light text-gray-500 sm:text-lg font-bodyFont2">
                                Remote ou sur site
                            </p>
                            <div className="flex flex-col justify-center items-center my-8">
                                <span className="text-5xl font-extrabold text-bleu-vert font-headerTitle">
                                                {(400).toLocaleString('fr-FR', options)}
                                            </span>
                                {/*<span className="text-gray-500">/month</span>*/}
                            </div>
                        </div>

                        <NavLink to="/contact"
                                 className="text-jaune bg-bleu-vert font-bodyFont2 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-semibold rounded-lg text-lg sm:text-base px-5 py-4 sm:py-2.5 text-center w-full sm:w-2/3 mx-auto">
                            C'est parti !
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Offre;