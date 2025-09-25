import "../styles/Contact.css";
import { Mail, Phone, Instagram } from "lucide-react"; // Icônes modernes

export default function Contact() {
  return (
    <div className="contact-container">
        <h1 className="contact-title">Contact</h1>
            <p className="contact-intro">
            Une question, un renseignement ou un rendez-vous&nbsp;?  
            Parlons ensemble des besoins de vos chevaux&nbsp;!
            </p>

        <div className="contact-cards">
            <a href="mailto:luna.dentiste.equin@example.com" className="contact-card">
                <Mail className="contact-icon" />
                <div>
                    <h2>Email</h2>
                    <p>luna.novoa.tde@gmail.com</p>
                </div>
            </a>

        <a href="tel:+33612345678" className="contact-card">
            <Phone className="contact-icon" />
            <div>
                <h2>Téléphone</h2>
                <p>06 07 59 45 56</p>
            </div>
        </a>

        <a
            href="https://www.instagram.com/luna.novoa.tde"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
        >
            <Instagram className="contact-icon" />
            <div>
                <h2>Instagram</h2>
                <p>@luna.novoa.tde</p>
            </div>
        </a>
      </div>
    </div>
  );
}
