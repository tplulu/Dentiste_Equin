export default function PrestationCard({ titre, description }) {
    return (
      <div className="prestation-card">
        <h3>{titre}</h3>
        <p>{description}</p>
      </div>
    );
  }
  