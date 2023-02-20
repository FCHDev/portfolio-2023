import React from 'react';
import mesServices from "../Datas/mesServices.js";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

const Services = () => {

    return (
        <div
            className="min-h-[80vh] container flex justify-center items-center mx-auto mt-[10vh] sm:mb-[4vh] md:pt-5 animate-appear">
            <ScrollToTopOnMount/>
            <section className="bg-white rounded-xl 2xl:py-20 md:px-16">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                    <div className="max-w-screen-md mb-8">
                        <h2 className="mb-4 text-4xl tracking-tight font-bodyFont2 text-bleu-vert font-extrabold">
                            Des prestations adaptées à vos besoins
                        </h2>
                        <p className="text-gray-500 sm:text-xl font-bodyFont2">
                            Je vous aide à créer, concevoir et développer des applications web modernes et performantes.
                        </p>
                    </div>

                    <div className="hidden space-y-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0 mb-5">
                        {mesServices.map((service) => (
                                <div key={service.id}>
                                    <div
                                        className={`flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-${service?.color} lg:h-14 lg:w-14`}>
                                        {service?.icon}
                                    </div>
                                    <h3 className={`mb-2 text-xl font-bold text-${service?.color} font-bodyFont2`}>
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 font-bodyFont2">
                                        {service.body}
                                    </p>
                                </div>
                            )
                        )}

                    </div>
                    <div className="space-y-8 sm:hidden mb-5">
                        {mesServices.map((service) => (
                                <div key={service.id}>
                                    <div className="flex items-center">
                                        <div
                                            className={`flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-${service?.color} lg:h-14 lg:w-14`}>
                                            {service?.icon}
                                        </div>
                                        <h3 className={`mb-3 ml-3 text-xl font-bold text-${service?.color} font-bodyFont2`}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 font-bodyFont2">
                                        {service.body}
                                    </p>
                                </div>
                            )
                        )}

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Services;