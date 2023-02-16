import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import ButtonContactPhone from "./ButtonContactPhone";
import ButtonContactMail from "./ButtonContactMail";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    // SVG LOGOS
    const menuBurger =
        <svg version="1.1" id="Capa_1"
             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 50 50"
             fill="#D9A408"
             xmlSpace="preserve">
            <g>
                <rect y="3" width="50" height="2"/>
                <rect y="17" width="50" height="2"/>
                <rect y="31" width="50" height="2"/>
                <rect y="45" width="50" height="2"/>
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
            <g>
            </g>
        </svg>

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
        {title: 'Projets', link: '/projets'},
        {title: 'Contact', link: '/contact'}
        ]

    let activeStyle = {
        fontWeight: "bold",
        color: "#EAB309",
    };

    return (
        <div className="fixed flex justify-center items-center bg-bleu-vert top-0 w-full h-[10vh] shadow-lg z-20">
            <div onClick={() => setIsOpen(!isOpen)}
                 className="text-3xl w-8 absolute right-8 top-5 md:top-10 cursor-pointer lg:hidden z-20">
                {isOpen ? closeBurger : menuBurger}
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
                    md:bg-transparent
                    w-[320px]
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
                    transition-all duration-500 ease-in z-20 ${isOpen ? 'top-14 md:top-24 opacity-100' : 'top-[-490px]'}`}>
                {menuItems.map((item, index) => (
                    <div key={index}
                         className="py-2 md:py-0 md:mx-8 md:text-white text-gray-700 transition ease-in-out lg:hover:-translate-y-1 lg:hover:scale-105 duration-300 font-headerTitle">
                        <NavLink to={item.link}
                                 style={({isActive}) => isActive ? activeStyle : undefined}
                                 onClick={() => {
                                     setIsOpen(false)
                                 }}>
                            {item.title}
                        </NavLink>
                    </div>))}
            </div>
            <div className="w-max flex justify-center md:fixed
            2xl:top-8 2xl:right-8
            xl:top-4 xl:right-8
            2xl:top-8 2xl:right-8">
                <ButtonContactPhone/>
                <div className="w-10"></div>
                <ButtonContactMail/>
            </div>

        </div>
    );
};

export default Navbar;