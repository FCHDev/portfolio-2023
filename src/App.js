import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Accueil from "./Pages/Accueil";
import Services from "./Pages/Services";
import Projets from "./Pages/Projets";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="mx-auto">
                <Routes>
                    <Route exact path="/" element={<Accueil/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/projets" element={<Projets/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </div>

        </BrowserRouter>
    );
}

export default App;
