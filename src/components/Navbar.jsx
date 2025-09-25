import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Fermer si clic en dehors
  useEffect(() => {
    function handleOutsideClick(e) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/images/logo2.png" alt="Logo dentiste équin" />
        </Link>
      </div>

      {/* Bouton burger */}
      <button
        ref={buttonRef}
        className="navbar-toggle"
        aria-label="Ouvrir/fermer le menu"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Liens */}
      <ul
        ref={menuRef}
        className={`navbar-list ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}  // ferme si on clique un lien
      >
        <li><Link className="navbar-link" to="/">Accueil</Link></li>
        <li><Link className="navbar-link" to="/prestations">Mes Prestations</Link></li>
        <li><Link className="navbar-link" to="/deroulement">Déroulement d’un soin</Link></li>
        <li><Link className="navbar-link" to="/quisuisje">Qui suis-je</Link></li>
        <li><Link className="navbar-link" to="/contact">Contact</Link></li>
        <li><Link className="navbar-link" to="/avis">Avis</Link></li>
        <li><Link className="navbar-link" to="/galerie">Galerie</Link></li>
        <li><Link className="navbar-link" to="/tournees">Prochaines tournées</Link></li>
      </ul>
    </nav>
  );
}
