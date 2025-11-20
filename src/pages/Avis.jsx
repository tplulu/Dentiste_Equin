export default function Avis() {
  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Avis</h1>

      <p style={{ textAlign: "center", marginBottom: "20px" }}>
      </p>

      {/* --- Avis 1 : Océane.M --- */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          background: "white",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/comment_1.jpg`}
          alt="Cheval Océane.M"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />

        <div>
          <h3 style={{ margin: "0 0 5px 0" }}>Océane.M</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Ayant un cheval hypersensible et qui peut être dangereux, je me suis
            imaginé les pires scénarios ! Finalement pour sa première fois ça
            s'est très bien passé car Luna a été très douce et très patiente.
            Elle s'est très bien adaptée à lui et a pris le temps de faire
            plusieurs pauses en fonction de ses besoins.
            <br />
            <br />
            <strong>Je vous recommande sans hésitation !</strong>
          </p>
        </div>
      </div>

      {/* --- Avis 2 : Célia.B --- */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "30px",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          background: "white",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/comment_2.jpg`}
          alt="Cheval Célia.B"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />

        <div>
          <h3 style={{ margin: "0 0 5px 0" }}>Célia.B</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Luna est une dentiste très compétente et patiente. Elle permet au
            propriétaire de comprendre les soins faits sur son cheval. Elle
            prend aussi le temps avec chaque cheval et adapte les soins si
            nécessaire pour que cela soit une bonne expérience !
            <br />
            <br />
            <strong>Je la recommande vivement !</strong>
          </p>
        </div>
      </div>

      {/* --- Bouton vers Google --- */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <a
          href="https://www.google.com/maps/place/Luna+Novoa+-+Dentisterie+Equine"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 24px",
            backgroundColor: "#4285F4",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Voir les autres avis
        </a>
      </div>
    </div>
  );
}
