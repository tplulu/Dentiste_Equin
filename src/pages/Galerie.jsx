const photos = [
    { src: `${process.env.PUBLIC_URL}/images/cheval1.jpg`, nom: "Spirit", age: 7 },
    { src: `${process.env.PUBLIC_URL}/images/cheval2.jpg`, nom: "Éclair", age: 10 },
    { src: `${process.env.PUBLIC_URL}/images/cheval3.jpg`, nom: "Belle", age: 5 },
  ];  
  
  export default function Galerie() {
    return (
      <div style={{ padding: "20px" }}>
        <section className="page-section">
        <h1>Galerie</h1>
        <p>
            Un aperçu de mon travail et des chevaux que j’accompagne au quotidien.
        </p>
        {/* Ici tu pourras intégrer un composant de galerie d’images */}

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {photos.map((cheval, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <img
                src={cheval.src}
                alt={cheval.nom}
                style={{ width: "200px", height: "150px", objectFit: "cover", borderRadius: "10px" }}
              />
              <p>{cheval.nom} - {cheval.age} ans</p>
            </div>
          ))}
        </div>
        </section>
      </div>
    );
  }
  