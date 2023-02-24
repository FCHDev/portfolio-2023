import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Accueil from "./Pages/Accueil";
import Services from "./Pages/Services";
import Projets from "./Pages/Projets";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Offre from "./Pages/Offre";
import ProjetDetailed from "./Pages/ProjetDetailed";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="mx-auto">
                <Routes>
                    <Route exact path="/" element={<Accueil/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/offre" element={<Offre/>}/>
                    <Route path="/projets" element={<Projets/>}/>
                    <Route path="/projet-detail" element={<ProjetDetailed/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </div>

        </BrowserRouter>
    );
}

export default App;
