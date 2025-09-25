export default function Deroulement() {
    return (
      <div>
        <section className="page-section">
            <h1>Déroulement d’un soin</h1>
            <p>
                Découvrez en vidéo comment se déroule un soin dentaire équin, et
                comprenez chaque étape ainsi que son importance pour le bien-être de
                votre cheval.
            </p>
            {/* Tu pourras insérer ici ta vidéo <iframe> ou un composant player */}
            </section>
        <div style={{ maxWidth: "800px", margin: "20px auto" }}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/XXXXXX"
            title="Présentation"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  