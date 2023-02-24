import React, {useEffect, useState} from "react";
import iconApp from "../Assets/SVG/application.svg";
import iconLanding from "../Assets/SVG/landing.svg";
import iconFeature from "../Assets/SVG/feature.svg";
import iconEcommerce from "../Assets/SVG/online-store.svg";
import ProjectCard from "../Components/ProjectCard";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

const Projets = ({mesProjets}) => {
    const iconSEO = <svg id="Layer_1" enableBackground="new 0 0 512 512"
                         fill="white"
                         className="h-[23px] w-auto md:mr-2"
                         viewBox="0 0 512 512"
                         xmlns="http://www.w3.org/2000/svg">
        <path
            d="m502.507 423.89-92.425-89.704c-5.987-5.813-13.88-8.933-22.27-8.819-2.809.042-5.552.458-8.181 1.206l-41.662-40.434c4.201-6.347 8.028-12.967 11.446-19.864.5-1.009.881-2.046 1.154-3.095h13.729c8.836 0 15.998-7.165 15.998-16.003s-7.164-16.002-16-16.002l-52.978.002v-31.078h35.737c8.837 0 15.999-7.165 15.999-16.002 0-8.838-7.163-16.002-15.999-16.002h-35.737v-29.237h52.979c8.837 0 15.999-7.165 15.999-16.002s-7.163-16.002-15.999-16.002h-12.708c-6.412-13.828-14.573-26.887-24.265-38.814-64.09-78.877-180.39-90.893-259.249-26.79-38.201 31.053-62.026 75.126-67.085 124.102-5.058 48.975 9.255 96.989 40.302 135.198 31.047 38.208 75.112 62.037 124.078 67.096 6.452.667 12.884.997 19.283.997 35.83 0 70.502-10.366 100.465-30.026l41.109 39.898c-1.762 4.042-2.662 8.452-2.595 13.003.126 8.375 3.494 16.187 9.481 21.997l92.427 89.705c6.072 5.892 13.936 8.823 21.794 8.823 8.173 0 16.339-3.174 22.466-9.489l33.37-34.396c12.019-12.387 11.721-32.244-.663-44.268zm-148.138-77.239-7.285 7.509-36.597-35.519c2.554-2.391 5.034-4.845 7.436-7.363zm-185.711-10.84c-40.464-4.181-76.879-23.872-102.534-55.447-25.657-31.575-37.485-71.252-33.304-111.724s23.868-76.892 55.436-102.553c65.168-52.973 161.275-43.042 214.236 22.137 4.793 5.898 9.12 12.133 12.967 18.628h-20.14c-8.837 0-15.999 7.165-15.999 16.002v124.325c0 4.244 1.685 8.315 4.686 11.316s7.07 4.687 11.314 4.687l19.321-.001c-9.019 14.934-20.509 28.125-34.281 39.32-31.569 25.66-71.233 37.489-111.702 33.31zm278.666 143.953-91.424-88.732 32.396-33.393 91.424 88.732zm-270.729-337.155v21.81c0 2.034 1.718 3.752 3.752 3.752h45.047c19.712 0 35.75 16.042 35.75 35.759v21.808c0 19.717-16.038 35.759-35.75 35.759h-64.8c-8.837 0-15.999-7.165-15.999-16.002 0-8.838 7.163-16.002 15.999-16.002h64.8c2.033 0 3.751-1.719 3.751-3.754v-21.808c0-2.035-1.718-3.754-3.751-3.754h-45.047c-19.713 0-35.751-16.041-35.751-35.757v-21.81c0-19.716 16.037-35.756 35.751-35.756h64.8c8.837 0 15.999 7.165 15.999 16.002s-7.163 16.002-15.999 16.002h-64.8c-2.035-.001-3.752 1.717-3.752 3.751zm265.484 119.751c31.309 0 56.782-25.478 56.782-56.793v-42.937c0-31.316-25.473-56.793-56.782-56.793s-56.782 25.478-56.782 56.793v42.937c0 31.316 25.473 56.793 56.782 56.793zm-24.783-99.73c0-13.669 11.118-24.788 24.783-24.788 13.666 0 24.783 11.12 24.783 24.788v42.937c0 13.669-11.118 24.788-24.783 24.788s-24.783-11.12-24.783-24.788z"/>
    </svg>
    // STATES
    const [selectedRadio, setSelectedRadio] = useState("");

    // TRI PAR DÉFAUT DU PORTFOLIO
    mesProjets.sort(function (a, b) {
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
            value: "SEO",
            label: "SEO",
            color: "bg-silver-lake",
            textColor: "text-silver-lake",
            icon: iconSEO,
        }
        ,
        {
            id: 6,
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
            {mesProjets
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
                         professional
                     }) => (
                        <ProjectCard
                            id={id}
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
                            professional={professional}
                            key={id}
                        />
                    )
                )}
        </div>


    useEffect(() => {
        mesProjets.sort(function (a, b) {
            return -(a.id - b.id);
        });
    }, [mesProjets])

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
                                {item.icon === iconSEO ? iconSEO : <img src={item.icon} alt={item.label} className="h-[23px] w-auto md:mr-2"/>}
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