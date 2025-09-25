import PrestationCard from "../components/PrestationCard";

const prestations = [
  { titre: "Consultation Désensibilisation", description: "Tous équidés" },
  { titre: "Réduction bec/rampe stade 3 et +", description: "Tous équidés" },
  { titre: "Intervention Urgence", description: "Tous équidés" },
  { titre: "Extraction Dent lactéale", description: "Tous équidés" },
  { titre: "Entretien Nivellement", description: "Shetland" },
  { titre: "Entretien Nivellement", description: "Tous équidés" },
  { titre: "Entretien Incisives", description: "Tous équidés" },
  { titre: "1ère visite poulain", description: "Tous équidés" },
  { titre: "Avulsion Dent de cochon", description: "Tous équidés" },
  { titre: "Avulsion Dent de loup", description: "Tous équidés" },
];

export default function Prestations() {
  return (
    <div className="prestations-container">
      <h1 className="title">Mes Prestations</h1>
      <p className="intro">
        J’assure l’ensemble de ces prestations dans un rayon d’environ 80 km autour 
        de l’Île-de-France. Au-delà, un déplacement reste possible sur demande.
      </p>
      <div className="grid">
        {prestations.map((p, i) => (
          <PrestationCard key={i} titre={p.titre} description={p.description} />
        ))}
      </div>
    </div>
  );
}
