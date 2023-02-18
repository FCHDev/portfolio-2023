import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-[80vh] container mx-auto bg-gray-500 mt-[10vh] mb-[4vh] pt-5 animate-appear">
            <section className="bg-white rounded-xl">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-bleu-vert font-bodyFont2">
                        Contactons-nous
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 font-bodyFont2 sm:text-xl">
                        N'hésitez pas à me laisser vos coordonnées via le formulaire ci-dessous, je vous répondrai dans les plus brefs délais. Vous pouvez également directement m'appeler en cliquant sur le bouton ci-dessous.
                    </p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-bold font-bodyFont2 text-gray-900">
                                Email
                            </label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 font-bodyFont2 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 font-bodyFont2"
                                   placeholder="elon.musk@tesla.com" required/>
                        </div>
                        <div>
                            <label htmlFor="subject"
                                   className="block mb-2 text-sm font-bold font-bodyFont2 text-gray-900">
                                Projet
                            </label>
                            <input type="text" id="subject"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-bodyFont2"
                                   placeholder="Let us know how we can help you" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-bold font-bodyFont2 text-gray-900">
                                Détaillez votre projet
                            </label>
                            <textarea id="message" rows="6"
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 font-bodyFont2"
                                      placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-bleu-vert sm:w-fit hover:bg-clair focus:ring-4 focus:outline-none focus:ring-primary-300 font-bodyFont2">
                            Envoyer
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;