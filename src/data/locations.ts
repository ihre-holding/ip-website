export const companyAddressLine1 = "Nürnberger Str. 29A";
export const companyAddressLine2 = "90513 Zirndorf";
export const companyAddress = `${companyAddressLine1}, ${companyAddressLine2}`;
export const companyEmail = "info@ihre-pflege.de";

// Ergebnis der Qualitätsprüfung durch den Medizinischen Dienst (§115 SGB XI).
// Pro Standort, damit künftige Filialen ihr eigenes Ergebnis mitbringen.
// Nach einer neuen Prüfung hier aktualisieren (Ergebnis, Monat, Datum, PDF).
export interface LocationQuality {
  mdResult: string; // z. B. "1,0 (sehr gut)"
  mdMonth: string; // z. B. "Januar 2026" (Fließtext)
  mdDate: string; // z. B. "29.01.2026" (Quellenangabe)
  reportUrl: string; // Pfad zum gespiegelten Transparenzbericht
}

export interface Location {
  slug: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  entity: string;
  intro: string;
  serviceArea: string;
  since: string;
  quality?: LocationQuality;
}

export const locations: Location[] = [
  {
    slug: "zirndorf",
    name: "Ihre Pflege Zirndorf",
    city: "Zirndorf",
    address: companyAddress,
    phone: "0911 9606030",
    email: companyEmail,
    entity: "Ihre Pflege Zirndorf GmbH",
    intro: "Unser ambulanter Pflegedienst in Zirndorf betreut seit 1997 Patienten in Zirndorf und Umgebung, verlässlich, persönlich und mit echtem Engagement.",
    serviceArea: "Zirndorf, Oberasbach und Umgebung",
    since: "1997",
    quality: {
      mdResult: "1,0 (sehr gut)",
      mdMonth: "Januar 2026",
      mdDate: "29.01.2026",
      reportUrl: "/dokumente/md-pruefbericht-2026-01.pdf",
    },
  },
];
