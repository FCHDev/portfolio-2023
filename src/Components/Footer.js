import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-col text-sm font-bodyFont2 justify-center items-center w-full
        2xl:h-[90px]
        xl:h-[70px]
        h-[60px]
        bg-jaune">
            {/*<span>François Chevalier</span>*/}
            {/*<span>Développeur front end React</span>*/}
            <span>23, avenue Le Nôtre</span>
            <span>92420 VAUCRESSON</span>
            <span className="text-bleu-vert font-semibold">© 2023 François Chevalier</span>
        </div>
    );
};

export default Footer;