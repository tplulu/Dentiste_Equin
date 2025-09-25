import SliderCarousel from "../components/SliderCarousel";
import "../styles/App.css";

export default function Home() {
  const photos = [
    "/images/dentiste_1.jpg",
    "/images/dentiste_2.jpg",
    "/images/dentiste_3.jpg",
    "/images/dentiste_4.jpg",
    "/images/dentiste_5.jpg",
    "/images/dentiste_6.jpg",
    "/images/dentiste_7.jpg",
    "/images/dentiste_8.jpg",
    "/images/dentiste_9.jpg",
    "/images/dentiste_8.jpg",
    "/images/dentiste_10.jpg",
  ];

  return (
    <div className="home-container">
        <section className="hero">
            <h1>Bienvenue chez votre Technicienne Dentaire Équin 🐴</h1>
            <p>
                Spécialisée en dentisterie équine, j’allie savoir-faire et bienveillance pour offrir à vos chevaux des
                soins adaptés, garants de leur confort, leur santé et surtout leur
                bien-être. 
            </p>
        </section>
      <SliderCarousel images={photos} />

      <section className="services">
        <div className="card">
          <h3>Bilan Dentaire</h3>
          <p>Analyse complète de la dentition pour prévenir douleurs et troubles.</p>
        </div>
        <div className="card">
          <h3>Soins Curatifs</h3>
          <p>Corrections des surdents, malocclusions et pathologies dentaires.</p>
        </div>
        <div className="card">
          <h3>Suivi Régulier</h3>
          <p>Contrôles périodiques pour maintenir la santé buccale du cheval.</p>
        </div>
      </section>
    </div>
  );
}
