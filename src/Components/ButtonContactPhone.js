import React from 'react';
import phone from '../Assets/SVG/telephone-call.svg';

const ButtonContactPhone = () => {
    return (
        <a href="tel:[+33]643655138">
            <button
                className="md:hidden flex items-center justify-center bg-jaune text-bleu-vert font-bodyText font-bold px-5 py-2 rounded-2xl hover:bg-orange-sud border border-jaune transition ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 duration-300">
                <img src={phone} alt="telephone icon"/>
                <span className="ml-2 md:block hidden">06 43 65 51 38</span>
            </button>
        </a>

    );
};

export default ButtonContactPhone;