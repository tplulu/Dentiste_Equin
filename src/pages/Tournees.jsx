export default function Tournees() {
    return (
      <div>
        <section className="page-section">
            <h1>Prochaines tournées</h1>
            <p>
                Consultez mes prochaines tournées et planifiez votre consultation&nbsp;:
                déplacement offert à partir de 6 chevaux !
            </p>
            <iframe
            src="https://calendar.google.com/calendar/embed?src=luna.novoa.tde%40gmail.com&ctz=Europe%2FParis"
            style={{ border: 0 }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Calendrier tournées"
            ></iframe>
        </section>
      </div>
    );
  }
  