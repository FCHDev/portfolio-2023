import React, {useEffect, useState} from "react";
import {portfoliodb} from "../Datas/portfoliodb";
import iconApp from "../Assets/SVG/application.svg";
import iconLanding from "../Assets/SVG/landing.svg";
import iconFeature from "../Assets/SVG/feature.svg";
import iconEcommerce from "../Assets/SVG/online-store.svg";
import ProjectCard from "../Components/ProjectCard";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

const Projets = () => {
    // STATES
    const [selectedRadio, setSelectedRadio] = useState("");

    // TRI PAR DÉFAUT DU PORTFOLIO
    portfoliodb.sort(function (a, b) {
        return -(b.id - a.id)
    });

    // DEFINITION DES TYPES DE PROJETS
    const projectTypes = [
        {
            id: 2,
            value: "e-commerce",
            label: "e-commerce",
            color: "bg-bleu-vert",
            textColor: "text-bleu-vert",
            icon: iconEcommerce,
        },
        {
            id: 3,
            value: "site app",
            label: "Site App",
            color: "bg-rose-rouge",
            textColor: "text-rose-rouge",
            icon: iconApp,
        },
        {
            id: 4,
            value: "site / landing",
            label: "Site / Landing",
            color: "bg-jaune",
            textColor: "text-jaune",
            icon: iconLanding,
        },
        {
            id: 5,
            value: "feature",
            label: "Feature",
            color: "bg-chocolat",
            textColor: "text-chocolat",
            icon: iconFeature,
        }
    ]

    // AFFICHAGE DES CARTES
    const display =
        <div className="playground xl:mt-10 2xl:mt-20">
            {portfoliodb
                .filter((item) => item.type.includes(selectedRadio))
                .map(
                    ({
                         name,
                         id,
                         type,
                         color,
                         textColor,
                         url,
                         git,
                         cover,
                         description,
                         api,
                         apiUrl,
                         toolsLogo,
                         toolsLogo2,
                         toolsLogo3,
                         toolsLogo4,
                     }) => (
                        <ProjectCard
                            key={id}
                            cover={cover}
                            type={type}
                            color={color}
                            textColor={textColor}
                            name={name}
                            url={url}
                            git={git}
                            description={description}
                            api={api}
                            apiUrl={apiUrl}
                            toolsLogo={toolsLogo}
                            toolsLogo2={toolsLogo2}
                            toolsLogo3={toolsLogo3}
                            toolsLogo4={toolsLogo4}
                        />
                    )
                )}
        </div>


    useEffect(() => {
        portfoliodb.sort(function (a, b) {
            return -(a.id - b.id);
        });
    }, [])

    const handleReset = (e) => {
        e.preventDefault();
        setSelectedRadio("");
        console.log("Reset !")
    }

    return (
        <div className="min-h-[80vh] container mx-auto mt-[10vh] sm:mb-[4vh] pt-5 animate-appear">
            <ScrollToTopOnMount />
            <div className="flex justify-center">
                <div className="form-check form-check-inline flex items-center">
                    <button
                        className="form-check-label inline-block bg-black text-white px-2 py-2 rounded-xl md:mr-10 mr-5 md:w-[160px] w-[80px] text-center text-lg font-bodyFont2 font-medium"
                        onClick={handleReset}>
                        Tous
                    </button>
                </div>
                {projectTypes.map((item) => (
                    <div key={item.id} className="form-check form-check-inline flex items-center">
                        <button
                            className={`form-check-label flex items-center justify-center ${item.color} text-white md:px-2 px-4 py-2 rounded-xl mr-3 md:w-[155px] text-center font-bodyFont2`}
                            value={item.label}
                            onClick={() => setSelectedRadio(item.label)}>
                            <div className="flex">
                                <img src={item.icon} alt={item.label} className="h-[23px] w-auto md:mr-2"/>
                                <span className="hidden md:block">{item.label}</span>
                            </div>
                        </button>
                    </div>
                ))
                }
            </div>

            {display}
        </div>

    );
};

export default Projets;