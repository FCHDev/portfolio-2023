import React from "react";
import githublogo from "../Assets/Logos/github.png";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";

const ProjectCard = ({
                         name,
                         id,
                         url,
                         cover,
                         description,
                         api,
                         apiUrl,
                         type,
                         color,
                         textColor,
                         git,
                         toolsLogo,
                         toolsLogo2,
                         toolsLogo3,
                         toolsLogo4,
                         professional
                     }) => {
    //  Mise en place des animations d'apparition de cartes
    const variants = {
        initial: {
            opacity: 0,
            transition: {duration: 2},
        },
        visible: {
            opacity: 1,
        },
        exit: {
            opacity: 0.5,
            transition: {duration: 2},
        },
    };

    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6,
    };

    //  les const logo3 et logo4 permettent d'afficher OU NON le 2ème, 3ème et 4ème logo (s'ils existent) d'un projet
    const logo2 = toolsLogo2 ? (
        <img src={toolsLogo2} alt="logo technologie utilisée"/>
    ) : (
        <p></p>
    );
    const logo3 = toolsLogo3 ? (
        <img src={toolsLogo3} alt="logo technologie utilisée"/>
    ) : (
        <p></p>
    );
    const logo4 = toolsLogo4 ? (
        <img src={toolsLogo4} alt="logo technologie utilisée"/>
    ) : (
        <p></p>
    );

    return (
        <motion.li
            className={`${professional ? "bg-gray-500" : "bg-white"} card-project relative`}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={transition}
            variants={variants}
        >
            {/*  Recto de la carte projet*/}
            <h1 className={`${professional ? "text-white" : textColor} font-headerTitle`}>{name}</h1>
            <a href={url} rel="noopener">
                <img className="picture" src={cover} alt={name}/>
            </a>
            <div className={`category ${color}`}>
                {type}
            </div>
            <div className={`${toolsLogo ? "tools-logo" : "hidden" }`}>
                <img src={toolsLogo} alt="logo technologie utilisée"/>
                {logo2}
                {logo3}
                {logo4}
            </div>

            {/*  Verso de la carte projet*/}
            <div className="infos">
                <h2 className="pb-[5px] font-headerTitle">{name}</h2>
                <p className="font-bodyFont2">{description}</p>
                <br/>
                {professional
                    ? <NavLink to={`/projet-detail/${id}`}>
                    <span className={`${textColor} text-2xl`}>
                        Voir fiche projet
                    </span><br/>
                    </NavLink>
                    : null}
                {professional
                    ? null
                    : <p className="font-bodyFont2" style={{paddingBottom: "1em"}}>
                        {api}
                        <br/>
                        <a href={apiUrl} rel="noopener noreferrer" target="_blank">
                            {apiUrl}
                        </a>
                    </p>}
                {professional
                    ? null
                    : <>
                        <h3 className="font-bodyFont2 underline">
                            <a href={url} rel="noopener noreferrer" target="_blank">
                                Accès au projet
                            </a>
                        </h3>
                        {git ? (
                            <h3 className="flex font-bodyFont2 underline">
                                <a className="pr-1" href={git} rel="noopener noreferrer" target="_blank">
                                    Accès au repo
                                </a>
                                <img
                                    src={githublogo}
                                    alt="logo github"
                                    style={{width: "30px", height: "auto"}}
                                />
                            </h3>
                        ) : (
                            ""
                        )}
                    </>}

            </div>
        </motion.li>
    );
};

export default ProjectCard;
