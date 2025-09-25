import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingButton from "./components/FloatingButton";
import "./styles/App.css";
import Home from "./pages/Home";
import Prestations from "./pages/Prestations";
import Deroulement from "./pages/Deroulement";
import QuiSuisJe from "./pages/QuiSuisJe";
import Contact from "./pages/Contact";
import Avis from "./pages/Avis";
import Galerie from "./pages/Galerie";
import Tournees from "./pages/Tournees";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/deroulement" element={<Deroulement />} />
        <Route path="/quisuisje" element={<QuiSuisJe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/tournees" element={<Tournees />} />
      </Routes>
      <FloatingButton />
    </Router>
  );
}
