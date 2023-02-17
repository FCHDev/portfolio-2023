import React, {useEffect, useState} from "react";
import {portfoliodb} from "../Datas/portfoliodb";
import iconEcommerce from "../Assets/SVG/online-store.svg";
import ProjectCard from "../Components/ProjectCard";

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
        },
        {
            id: 4,
            value: "site / landing",
            label: "Site / Landing",
            color: "bg-jaune",
            textColor: "text-jaune",
        },
        {
            id: 5,
            value: "feature",
            label: "Feature",
            color: "bg-chocolat",
            textColor: "text-chocolat",
        }
    ]

    // AFFICHAGE DES CARTES
    const display =
        <div className="playground">
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

    const handleCategory = (e) => {
        e.preventDefault();
        setSelectedRadio(e.target.id);
        console.log("Prout ! " + e.target.id)
    }

    const handleReset = (e) => {
        e.preventDefault();
        setSelectedRadio("");
        console.log("Reset !")
    }

    return (
        <div className="min-h-[80vh] container mx-auto bg-gray-500 mt-[10vh] pt-5 animate-appear">
            <div className="flex flex-col items-center md:flex-row justify-center">
                <div className="form-check form-check-inline flex items-center">
                    <button
                        className="form-check-label inline-block bg-black text-white px-2 py-2 rounded-xl md:mr-10 w-[160px] text-center text-lg font-bodyFont2 font-medium"
                        onClick={handleReset}>
                        Tous
                    </button>
                </div>
                {projectTypes.map((item) => (
                    <div key={item.id} className="form-check form-check-inline flex items-center">
                        <button
                            className={`form-check-label inline-block ${item.color} text-white px-2 py-2 rounded-xl mr-3 w-[140px] text-center font-bodyFont2`}
                            id={item.label}
                            onClick={handleCategory}>
                            {item.label}
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