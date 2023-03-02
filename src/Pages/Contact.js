import React, {useRef, useState} from 'react';
import emailjs from "@emailjs/browser";
import phone from "../Assets/SVG/telephone-call.svg";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

const Contact = () => {
// CONST ET STATES
    const formRef = useRef();
    const [toSend, setToSend] = useState({
        from_name: '',
        surname: '',
        message: '',
        reply_to: '',
        project_type: '',
    });
    const [modal, setModal] = useState(false);


    // COMPORTEMENT
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_c0c7gpk', 'template_klxompj', formRef.current, '-vwAE-R5zUAJMrCjR')
            .then((result) => {
                console.log(result.text);
                console.log("mail envoyé !")
                alert("Votre message a bien été envoyé ")
            }, (error) => {
                console.log(error.text);
                console.log("mail PAS envoyé !")
                alert("🙈 Oups !Il y a eu un problème d'envoi, veuillez réessayer")
            });
        setToSend({
            from_name: '',
            surname: '',
            message: '',
            reply_to: '',
            project_type: ''
        })
        setModal(true)
    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    return (
        <div
            className="min-h-[80vh] container flex justify-center items-center mx-auto mt-[10vh] sm:mb-[4vh] md:pt-5 animate-appear">
            <ScrollToTopOnMount/>
            <section className="bg-white rounded-xl md:px-16">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-bleu-vert font-bodyFont2">
                        Contactons-nous
                    </h2>
                    <p className="font-light text-center text-gray-500 font-bodyFont2 sm:text-xl">
                        N'hésitez pas à me laisser vos coordonnées et à me présenter votre projet via le formulaire
                        ci-dessous, je vous répondrai dans les plus brefs délais. Vous pouvez également directement
                        m'appeler en cliquant sur le bouton ci-dessous.
                    </p>
                    <button
                        className="flex items-center justify-center mx-auto bg-[#FFCB47] text-bleu-vert font-bodyText font-bold px-5 py-2 rounded-2xl transition ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 duration-300 mt-5 mb-8 lg:mb-16 ">
                        <img src={phone} alt="telephone icon"/>
                        <a href="tel:+33643655138" className="ml-2 md:block hidden">06 43 65 51 38</a>
                    </button>
                    <form action="#" ref={formRef} className="space-y-8">
                        {/*NOM*/}
                        <div>
                            <label htmlFor="name"
                                   className="block mb-2 text-base font-bold font-bodyFont2 text-gray-900">
                                Nom
                            </label>
                            <input type="text" id="name"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-bodyFont2"
                                   placeholder="Ex. : Jean-Marc Jancovici"
                                   name='from_name'
                                   onChange={handleChange}
                                   value={toSend.from_name}/>
                        </div>

                        {/*EMAIL*/}
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-base font-bold font-bodyFont2 text-gray-900">
                                Email*
                            </label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 font-bodyFont2 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 font-bodyFont2"
                                   placeholder="jean.dupond@lafresqueduclimat.com" required
                                   name="reply_to"
                                   onChange={handleChange}
                                   value={toSend.reply_to}/>
                        </div>

                        {/*SOCIÉTÉ*/}
                        <div>
                            <label htmlFor="company"
                                   className="block mb-2 text-base font-bold font-bodyFont2 text-gray-900">
                                Société
                            </label>
                            <input type="text" id="company"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 font-bodyFont2"
                                   placeholder="Ex. : The Shift Project"/>
                        </div>

                        {/*DÉTAILS DU PROJET*/}
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-base font-bold font-bodyFont2 text-gray-900">
                                Détaillez votre projet*
                            </label>
                            <textarea id="message" rows="6"
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 font-bodyFont2"
                                      placeholder="Expliquez-moi ce que vous souhaitez réaliser..."
                                      name="message"
                                      required
                                      onChange={handleChange}
                                      value={toSend.message}></textarea>
                        </div>
                        <button type="submit"
                                className="py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-bleu-vert sm:w-fit hover:bg-clair focus:ring-4 focus:outline-none focus:ring-primary-300 font-bodyFont2"
                                onClick={(e) => sendEmail(e)}>
                            Envoyer
                        </button>
                        {/*<button type="submit"*/}
                        {/*        className="py-3 px-5 text-base font-medium text-center text-bleu-vert font-semibold rounded-lg bg-jaune sm:w-fit hover:bg-clair focus:ring-4 focus:outline-none focus:ring-primary-300 font-bodyFont2 ml-5"*/}
                        {/*        onClick={() => setModal(true)}>*/}
                        {/*    TEST*/}
                        {/*</button>*/}
                        <div className="text-xs font-bodyFont2">
                            * Champs obligatoires
                        </div>
                    </form>
                </div>
            </section>

            {/*Modal*/}
            <div className={`${modal ? "absolute" : "hidden"} w-full h-screen bg-white bg-opacity-90 flex flex-col justify-center items-center`}>
                <div
                    className="w-[300px] h-[150px] bg-bleu-vert rounded-2xl shadow-lg flex flex-col justify-center items-center relative">
                    <span className="text-jaune font-semibold pb-1">Message envoyé</span>
                    <span className="text-white mb-5">Je reviens très rapidement vers vous !</span>
                    <span className="absolute top-1 right-3 text-white text-2xl cursor-pointer" onClick={() => setModal(false)}>X</span>
                    <button className="w-1/3 bg-jaune rounded-2xl py-1" onClick={() => setModal(false)}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;