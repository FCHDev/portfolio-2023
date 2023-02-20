import React from 'react';
import logoKD from "../Assets/Logos/KDLogoFull-white-small.png";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="p-2 bg-bleu-vert font-bodyFont2 text-white">
            <div className="mx-auto max-w-screen-xl text-center">
                <NavLink to="/"
                   className="flex justify-center items-center text-2xl font-semibold">
                    <img src={logoKD} alt="logo de François Chevalier" className="h-24 mr-2"/>
                </NavLink>
                <p className="mb-2">
                    François Chevalier <br/>
                    23, avenue Le Nôtre <br/>
                    92420 VAUCRESSON<br/>
                </p>

                <span className="text-sm text-jaune sm:text-center">
                    © 2023 François Chevalier | Tous droits réservés.
                </span>
            </div>
        </footer>
        // <div className="flex flex-col text-sm font-bodyFont2 justify-center items-center w-full
        // 2xl:h-[95px]
        // xl:h-[70px]
        // h-[60px]
        // bg-jaune">
        //     {/*<span>François Chevalier</span>*/}
        //     {/*<span>Développeur front end React</span>*/}
        //     <span>23, avenue Le Nôtre</span>
        //     <span>92420 VAUCRESSON</span>
        //     <span className="text-bleu-vert font-semibold">© 2023 François Chevalier</span>
        // </div>
    );
};

export default Footer;