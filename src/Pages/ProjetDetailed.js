import React from 'react';
import alternativoMockup from "../Assets/Images/mockup_alternativo.png"
import alternativoLogo from "../Assets/Images/logo-alternativo.png"
import ScrollToTopOnMount from "../Components/ScrollToTopOnMount";

const ProjetDetailed = () => {
    return (
        <div
            className="min-h-[80vh] container flex flex-col items-center mx-auto mt-[10vh] sm:mb-[4vh] 2xl:mb-0 2xl:pt-0 animate-appear">
            <ScrollToTopOnMount />
            <div className="h-[10vh] w-full flex py-2">
                <div className="bg-white w-1/5 flex justify-center items-center px-2 rounded-xl">
                    <img src={alternativoLogo} alt="logo"/>
                </div>
                <div className="w-4/5 flex items-center justify-center text-3xl font-headerTitle">
                    ALTERNATIVO
                </div>
            </div>
            <div className="w-full flex justify-evenly items-center font-bodyFont2 py-5">
                <div className="h-full w-1/4 px-3">
                    <h2 className="text-xl font-semibold">TYPE DE PRESTATION</h2>
                    <p>Site / Landing page</p>
                    <h2 className="text-xl font-semibold pt-3">TECHNOS</h2>
                    <p>Next JS</p>
                    <p>Tailwind CSS</p>
                    <h2 className="text-xl font-semibold pt-3">URL PROJET</h2>
                    <a href="https://www.alternativo.fr" rel="noopener">
                        https://www.alternativo.fr
                    </a>
                </div>
                <div className="h-full w-3/4">
                    <img src={alternativoMockup} alt="mockup"/>
                </div>
            </div>
            <div className="min-h-[30vh] font-bodyFont2 w-full flex flex-col justify-center px-3 py-5">
                <h1 className="text-2xl font-bold">
                    Détails du projet
                </h1>
                <p className="my-3 textbasel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum dolor hic, illum impedit laborum maiores officiis optio quaerat quidem soluta voluptatem? A accusantium ad aliquid amet debitis delectus ea eos facere, illum impedit ipsum itaque iure laudantium natus odit, omnis perferendis porro ratione repudiandae sed unde veniam vero, voluptas.</p>
                <p className="my-3 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi architecto aut commodi cupiditate delectus dicta dolor dolores ducimus eaque earum est exercitationem facere hic ipsam itaque magnam magni minima odio, optio quas quisquam quos reiciendis sequi similique tempore, tenetur ullam vel veritatis voluptatem. Accusantium, blanditiis consectetur eos exercitationem explicabo hic illum ipsa molestiae nemo, provident quasi rem sequi voluptatibus! Accusamus consectetur ducimus in tempore voluptate. Aliquam consequuntur delectus deserunt enim est eveniet impedit iste iure magni minima modi officia provident quo quod reprehenderit sunt, voluptatibus. Asperiores cumque, deserunt, dolor dolorem doloribus earum facilis harum iste, iure nulla repellendus similique!</p>
                <p className="my-3 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis culpa dicta distinctio dolorum ex facilis harum inventore magni maiores, molestias numquam possimus quidem quis rerum tenetur voluptas voluptatem. Ad consectetur et exercitationem fugit laborum, omnis perferendis sint ullam velit voluptatem? At cupiditate inventore perspiciatis quasi sequi? Aliquid commodi deserunt doloremque error inventore itaque labore minus molestias natus nesciunt nihil, officiis perspiciatis possimus recusandae rerum similique suscipit ullam velit veritatis?</p>
            </div>
            <div className="min-h-[20vh] font-bodyFont2 w-full flex flex-col justify-center px-3 py-5">
                <h1 className="text-2xl font-bold">
                    Témoignage
                </h1>
                <p className="my-3 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi architecto aut commodi cupiditate delectus dicta dolor dolores ducimus eaque earum est exercitationem facere hic ipsam itaque magnam magni minima odio, optio quas quisquam quos reiciendis sequi similique tempore, tenetur ullam vel veritatis voluptatem. Accusantium, blanditiis consectetur eos exercitationem explicabo hic illum ipsa molestiae nemo, provident quasi rem sequi voluptatibus! Accusamus consectetur ducimus in tempore voluptate. Aliquam consequuntur delectus deserunt enim est eveniet impedit iste iure magni minima modi officia provident quo quod reprehenderit sunt, voluptatibus. Asperiores cumque, deserunt, dolor dolorem doloribus earum facilis harum iste, iure nulla repellendus similique!</p>
            </div>
        </div>
    );
};

export default ProjetDetailed;