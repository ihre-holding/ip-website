import { companyEmail } from "./locations";

export interface Job {
  slug: string;
  title: string;
  locationSlug: string;
  entity: string;
  type: "Vollzeit" | "Teilzeit" | "Teilzeit / Vollzeit" | "Minijob";
  department: string;
  posted: string;
  description: string;
  contact: string;
  applyUrl: string;
}

export const jobs: Job[] = [
  {
    slug: "pflegehilfskraft-zirndorf",
    title: "Pflegehilfskraft (m/w/d)",
    locationSlug: "zirndorf",
    entity: "Ihre Pflege Zirndorf GmbH",
    type: "Teilzeit / Vollzeit",
    department: "Pflege",
    posted: "2026-06-05",
    description: "Mit oder ohne Vorerfahrung. Wir begleiten Dich von Anfang an und arbeiten Dich sorgfältig ein. Auch 20 oder 25 Stunden möglich.",
    contact: companyEmail,
    applyUrl: "https://mfws.alphadesk.de:13153/connect/stellen/3",
  },
  {
    slug: "pflegefachhelfer-zirndorf",
    title: "Pflegefachhelfer (m/w/d)",
    locationSlug: "zirndorf",
    entity: "Ihre Pflege Zirndorf GmbH",
    type: "Teilzeit / Vollzeit",
    department: "Pflege",
    posted: "2026-06-05",
    description: "Mit 1-jähriger Pflegeausbildung. Feste Touren im Raum Zirndorf, kleines Team, Leistungsbonus zusätzlich zum Tarifgehalt.",
    contact: companyEmail,
    applyUrl: "https://mfws.alphadesk.de:13153/connect/stellen/2",
  },
  {
    slug: "pflegefachkraft-zirndorf",
    title: "Exam. Pflegefachkraft (m/w/d)",
    locationSlug: "zirndorf",
    entity: "Ihre Pflege Zirndorf GmbH",
    type: "Teilzeit / Vollzeit",
    department: "Pflege",
    posted: "2026-06-05",
    description: "Examinierte Pflegefachkraft (Altenpflege oder Krankenpflege). Grund- und Behandlungspflege im häuslichen Umfeld, enge Zusammenarbeit mit Ärzten und Angehörigen.",
    contact: companyEmail,
    applyUrl: "https://mfws.alphadesk.de:13153/connect/stellen/1",
  },
];
