export default function Impressum() {
  return (
    <div className="container mx-auto pt-[7vw] md:pt-[11vw] px-4">
      <h2 className="text-2xl font-bold mb-4">
        Name und Kontaktdaten des Verantwortlichen
      </h2>
      <p className="mb-4">
        Erdmann Kunze
        <br />
        Zweiradmechaniker im Reisegewerbe
        <br />
        Calviusstraße 27
        <br />
        04177 Leipzig
        <br />
        Tel.: 015734766303
        <br />
        E-Mail:{" "}
        <a
          href="mailto:info@journeymancycles.de"
          className="text-blue-600 hover:underline"
        >
          info@journeymancycles.de
        </a>
      </p>
    </div>
  );
}
