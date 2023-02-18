import React from 'react';
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

const Offre = () => {
    return (
        <div
            className="min-h-[80vh] container flex justify-center items-center mx-auto mt-[10vh] mb-[4vh] pt-5 animate-appear">
            <ScrollToTopOnMount />
            <section className="bg-white rounded-xl px-16">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-bleu-vert">
                            Une offre claire pour vos projets personnalisés
                        </h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl">Je propose mes services pour la création de sites web 'sur mesure', l'optimisation de sites existants, la maintenance technique et la résolution de problèmes. Découvrez mes offres et trouvez la solution qui convient le mieux à votre entreprise.</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        {/*Pricing Card*/}
                        <div
                            className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 shadow">
                            <h3 className="mb-2 text-2xl font-bold text-bleu-vert ">
                                Site web 'sur mesure'
                            </h3>
                            <span className="font-semibold font-bodyFont2 text-silver-lake">Niveau 1</span>
                            <p className="font-light text-gray-500 sm:text-lg">
                                Landing page, site vitrine, site institutionnel...
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$29</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            {/*List*/}
                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Team size: <span className="font-semibold">1 developer</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Premium support: <span className="font-semibold">6 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Free updates: <span className="font-semibold">6 months</span></span>
                                </li>
                            </ul>
                            <a href="https://www.google.com"
                               className="text-white bg-bleu-vert hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">C'est parti !</a>
                        </div>
                        {/*Pricing Card*/}
                        <div
                            className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                            <h3 className="mb-2 text-2xl font-bold text-bleu-vert">
                                Site web 'sur mesure'
                            </h3>
                            <span className="font-semibold font-bodyFont2 text-silver-lake">Niveau 2</span>
                            <p className="font-light text-gray-500 sm:text-lg">
                                Site e-commerce, CMS, blog, web app...
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$99</span>
                                <span className="text-gray-500">/month</span>
                            </div>
                            {/*List*/}
                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Team size: <span className="font-semibold">10 developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Premium support: <span className="font-semibold">24 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Free updates: <span className="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <a href="https://www.google.com"
                               className="text-white bg-bleu-vert hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">C'est parti !</a>
                        </div>
                        {/*Pricing Card*/}
                        <div
                            className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                            <h3 className="mb-2 text-2xl font-bold text-bleu-vert">
                                Site web 'sur mesure'
                            </h3>
                            <span className="font-semibold font-bodyFont2 text-silver-lake">Niveau 3</span>
                            <p className="font-light text-gray-500 sm:text-lg">
                                Landing page, site vitrine, site institutionnel...
                            </p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$499</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            {/*List*/}
                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Team size: <span className="font-semibold">100+ developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Premium support: <span className="font-semibold">36 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    {/*Icon*/}
                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <span>Free updates: <span className="font-semibold">36 months</span></span>
                                </li>
                            </ul>
                            <a href="https://www.google.com"
                               className="text-white bg-bleu-vert hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">C'est parti !</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Offre;