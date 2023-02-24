import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Accueil from "./Pages/Accueil";
import Services from "./Pages/Services";
import Projets from "./Pages/Projets";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Offre from "./Pages/Offre";
import {useEffect, useState} from "react";
import {portfoliodb} from "./Datas/portfoliodb";
import ProjetPage from "./Pages/ProjetPage";

function App() {
    const [mesProjets, setMesProjets] = useState([]);

    useEffect(() => {
        setMesProjets(portfoliodb)
    }, []);

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="mx-auto">
                <Routes>
                    <Route exact path="/" element={<Accueil/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/offre" element={<Offre/>}/>
                    <Route path="/projets" element={<Projets mesProjets={mesProjets}/>}/>
                    <Route path="/projet-detail/:id" element={<ProjetPage mesProjets={mesProjets}/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </div>

        </BrowserRouter>
    );
}

export default App;
