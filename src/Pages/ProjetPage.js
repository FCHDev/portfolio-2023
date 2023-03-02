import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

const ProjetPage = ({mesProjets}) => {
    const { id } = useParams();
    const [monProjet, setMonProjet] = useState();

    // console.log(monProjet)

    useEffect(() => {
        setMonProjet(mesProjets.find((item) => item.id === parseInt(id)))
    }, [id, mesProjets]);

    return (
        <div
            className="min-h-[80vh] container flex flex-col items-center mx-auto mt-[10vh] sm:mb-[4vh] 2xl:mb-0 2xl:pt-0 animate-appear bg-white">
            <ScrollToTopOnMount/>

            <div className="h-[10vh] w-full flex py-2">
                <div className="bg-white md:w-1/5 w-1/3 flex justify-center items-center px-2 rounded-xl">
                    <img src={monProjet?.logo} alt="logo"/>
                </div>
                <div className="md:w-4/5 w-2/3 flex items-center justify-center text-3xl font-headerTitle">
                    {monProjet?.name}
                </div>
            </div>
            <div className="w-full flex justify-evenly items-center font-bodyFont2 py-5">
                <div className="h-full w-1/4 px-3">
                    <h2 className="text-xl font-semibold">TYPE DE PRESTATION</h2>
                    <p>{monProjet?.type}</p>
                    <h2 className="text-xl font-semibold pt-3">TECHNOS</h2>
                    {monProjet?.tools.map((tool, index) => (<p key={index}>{tool}</p>))}
                    <h2 className="text-xl font-semibold pt-3">URL PROJET</h2>
                    <a href={monProjet?.url} rel="noopener">
                        {monProjet?.url}
                    </a>
                </div>
                <div className="h-full w-3/4">
                    <img src={monProjet?.cover} alt={"mockup " + monProjet?.name}/>
                </div>
            </div>
            <div className="min-h-[30vh] font-bodyFont2 w-full flex flex-col justify-center px-3 py-5">
                <h1 className="text-2xl font-bold text-bleu-vert">
                    Détails du projet
                </h1>
                {monProjet?.projectDescription?.map((desc, index) => (
                    <p className="my-3 text-base" key={index}>{desc}</p>
                ))}
            </div>
            <div className="min-h-[20vh] font-bodyFont2 w-full flex flex-col justify-center px-3 py-5">
                <h1 className="text-2xl font-bold text-bleu-vert">
                    Témoignage
                </h1>
                {monProjet?.testimony?.map((test, index) =>
                    (<p className="my-3 text-base italic" key={index}>{test}</p>))
                }
                <span className="font-semibold text-silver-lake">{monProjet?.clientName}<span className="text-rose-rouge">{monProjet?.name}</span></span>
            </div>
        </div>
    );
};

export default ProjetPage;