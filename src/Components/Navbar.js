import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import monLogo from "../Assets/Logos/KDLogoFull-white-small.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    // SVG LOGOS
    // const menuBurger =
    //     <svg version="1.1" id="Capa_1"
    //          xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    //          viewBox="0 0 50 50"
    //          fill="#D9A408"
    //          xmlSpace="preserve">
    //         <g>
    //             <rect y="3" width="50" height="2"/>
    //             <rect y="17" width="50" height="2"/>
    //             <rect y="31" width="50" height="2"/>
    //             <rect y="45" width="50" height="2"/>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //         <g>
    //         </g>
    //     </svg>

    const closeBurger = <svg version="1.1" id="Layer_1"
                             xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 371.23 371.23"
                             fill="#D9A408"
                             xmlSpace="preserve">
        <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23
	185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 "/>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
    </svg>

    const menuItems = [
        {title: 'Accueil', link: '/'},
        {title: 'Services', link: '/services'},
        {title: 'Tarifs', link: '/offre'},
        {title: 'Projets', link: '/projets'},
        {title: 'Contact', link: '/contact'}
    ]

    let activeStyle = {
        fontWeight: "bold",
        color: "#FFCB47",
    };

    return (
        <div className="fixed flex sm:justify-center items-center bg-bleu-vert top-0 w-full h-[10vh] shadow-lg z-20">
            <div onClick={() => setIsOpen(!isOpen)}
                 className="text-3xl w-8 absolute right-8 top-5 md:top-10 cursor-pointer lg:hidden z-20">
                {isOpen ? closeBurger :
                    <div className="w-full flex justify-end text-jaune lg:hidden font-headerTitle text-3xl">
                        <span>Menu</span>
                    </div>}
            </div>
            <div className="absolute sm:hidden">
                <NavLink to={'/'}>
                    <img className="h-[65px] w-auto ml-5" src={monLogo}
                         alt="??cran d'ordinateur en logo avec le nom Knight and Dev ??crit en-dessous"/>
                </NavLink>
            </div>
            <div className={`
                    lg:w-4/6 
                    lg:flex 
                    lg:items-center
                    lg:pb-0 
                    lg:pl-0 
                    lg:z-auto 
                    lg:text-xl
                    lg:opacity-100
                    lg:pt-0
                    lg:text-lg
                    lg:static
                    lg:text-2xl
                    2xl:text-3xl
                    md:w-full
                    md:pb-9
                    lg:bg-transparent
                    w-full
                    text-2xl 
                    justify-center
                    pt-5
                    pb-8 
                    absolute 
                    bg-white
                    bg-opacity-90
                    backdrop-blur-sm
                    rounded-2xl
                    left-0
                    pl-9 
                    transition-all duration-500 ease-in z-20 ${isOpen ? 'top-16 md:top-20 opacity-100' : 'top-[-490px]'}`}>
                {menuItems.map((item, index) => (
                    <NavLink to={item.link}
                             key={index}
                             className="flex flex-col py-2 md:py-0 md:mx-8 lg:text-white text-gray-700 transition ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 duration-300 font-headerTitle"
                             style={({isActive}) => isActive ? activeStyle : undefined}
                             onClick={() => {
                                 setIsOpen(false)
                             }}>
                        {item.title}
                    </NavLink>))}
            </div>
            {/*<div className="hidden w-max sm:ml-0 ml-5 justify-center md:fixed*/}
            {/*2xl:top-10 2xl:right-8*/}
            {/*xl:top-4 xl:right-8">*/}
            {/*    <ButtonContactPhone/>*/}
            {/*    <div className="w-10"></div>*/}
            {/*    <ButtonContactMail/>*/}
            {/*</div>*/}
            {/*<div className="w-full flex justify-end mr-24 text-jaune sm:hidden font-headerTitle text-2xl ml-40">*/}
            {/*    <span>Menu</span>*/}
            {/*</div>*/}

        </div>
    );
};

export default Navbar;