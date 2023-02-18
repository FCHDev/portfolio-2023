import React from 'react';
import email from '../Assets/SVG/email.svg';

const ButtonContactMail = () => {
    return (
        <button
            className="flex items-center justify-center bg-jaune text-bleu-vert font-bodyFont2 font-medium px-5 py-2 rounded-2xl hover:bg-orange-sud border border-jaune transition ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 duration-300">
            <img src={email} alt="enveloppe icon"/>
            <span className="ml-2 md:block hidden text-sm">contact@fchevalier.com</span>
        </button>
    );
};

export default ButtonContactMail;