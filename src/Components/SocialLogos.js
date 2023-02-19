import {NavLink} from "react-router-dom";
import linkedIn from "../Assets/SVG/linkedin-icon.svg";
import malt from "../Assets/SVG/malt.svg";

const SocialLogos = () => {
    return (
        <div className="flex justify-evenly items-center w-[170px]">
            <NavLink
                to="https://www.linkedin.com/in/frachevalier/"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={linkedIn}
                    alt="linkedin françois chevalier développeur React"
                    className="h-[45px] md:h-[50px] w-auto"
                />
            </NavLink>

            <NavLink
                to="https://www.malt.fr/profile/francoischevalier?overview=true"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    src={malt}
                    alt="malt françois chevalier développeur React"
                    className="h-[55px] md:h-[50px] w-auto"/>
            </NavLink>

        </div>
    );
};

export default SocialLogos;