import { locations } from "./locations";

export type JobType = "Vollzeit" | "Teilzeit" | "Teilzeit / Vollzeit" | "Minijob";

// Eine Rolle = wiederverwendbares, standort-unabhängiges Stellenprofil.
export interface Role {
  key: string;
  title: string;
  type: JobType;
  department: string;
  // Kurztext für Listing / Meta-Description
  summary: string;
  intro: string;
  expected: string[];
  requirements: string[];
}

// Eine Ausschreibung = Rolle an einem Standort. active steuert die
// Veröffentlichung: active:false = schlafend (keine öffentliche Seite,
// nicht in Sitemap, kein JobPosting, nicht im Listing).
export interface Opening {
  roleKey: string;
  locationSlug: string;
  active: boolean;
  posted: string;
  applyUrl: string;
}

// Standortweit gültige Benefits.
export const benefits = [
  "Leistungsbonus",
  "35 Tage Urlaub",
  "Fort- & Weiterbildung",
  "Feste Touren",
  "Kleines Team",
  "Quereinsteiger willkommen",
];

export const roles: Role[] = [
  {
    key: "pflegehilfskraft",
    title: "Pflegehilfskraft (m/w/d)",
    type: "Teilzeit / Vollzeit",
    department: "Pflege",
    summary:
      "Mit oder ohne Vorerfahrung. Wir begleiten Dich von Anfang an und arbeiten Dich sorgfältig ein. Auch 20 oder 25 Stunden möglich.",
    intro:
      "Du möchtest in der Pflege arbeiten, hast aber noch wenig Erfahrung? Bei uns kein Problem. Wir begleiten Dich von Anfang an.",
    expected: [
      "Unterstützung bei der Grundpflege und Alltagsbegleitung",
      "Begleitung unserer Patienten auf den täglichen Touren in Zirndorf und Umgebung",
      "Dokumentation mit der Pflegesoftware (Einarbeitung inklusive)",
      "Enger Austausch im Team und mit Angehörigen",
    ],
    requirements: [
      "Führerschein Klasse B",
      "Einwandfreies Führungszeugnis",
      "Deutsch mindestens B1",
      "Zuverlässigkeit und Freude am Umgang mit Menschen - Vorerfahrung kein Muss",
    ],
  },
  {
    key: "pflegefachhelfer",
    title: "Pflegefachhelfer (m/w/d)",
    type: "Teilzeit / Vollzeit",
    department: "Pflege",
    summary:
      "Mit 1-jähriger Pflegeausbildung. Feste Touren im Raum Zirndorf, kleines Team, Leistungsbonus zusätzlich zum Tarifgehalt.",
    intro:
      "Als Pflegefachhelfer übernimmst Du echte Verantwortung auf den Touren, mit einem Team das Dich kennt und auf das Du Dich verlassen kannst.",
    expected: [
      "Durchführung der Grundpflege nach Pflegeplan",
      "Unterstützung bei der Behandlungspflege unter Anleitung",
      "Dokumentation und Qualitätssicherung",
      "Ansprechpartner für Patienten und Angehörige auf der Tour",
    ],
    requirements: [
      "Abgeschlossene 1-jährige Pflegeausbildung (Pflegefachhelfer oder Pflegeassistenz)",
      "Führerschein Klasse B",
      "Einwandfreies Führungszeugnis",
      "Deutsch mindestens B1",
    ],
  },
  {
    key: "pflegefachkraft",
    title: "Exam. Pflegefachkraft (m/w/d)",
    type: "Teilzeit / Vollzeit",
    department: "Pflege",
    summary:
      "Examinierte Pflegefachkraft (Altenpflege oder Krankenpflege). Grund- und Behandlungspflege im häuslichen Umfeld, enge Zusammenarbeit mit Ärzten und Angehörigen.",
    intro:
      "Du bist examiniert und suchst eine Stelle mit geregelten Touren, echtem Teamzusammenhalt und fairer Bezahlung ohne Springer-Einteilung?",
    expected: [
      "Selbstständige Durchführung der Grund- und Behandlungspflege",
      "Beratungseinsätze nach § 37 SGB XI",
      "Ansprechpartner für Patienten, Angehörige und Ärzte",
      "Dokumentation und Qualitätssicherung mit Pflegesoftware",
    ],
    requirements: [
      "Abgeschlossene 3-jährige Ausbildung als Pflegefachkraft, Altenpfleger oder Gesundheits- und Krankenpfleger",
      "Führerschein Klasse B",
      "Einwandfreies Führungszeugnis",
      "Deutsch mindestens B1",
    ],
  },
];

export const openings: Opening[] = [
  { roleKey: "pflegehilfskraft", locationSlug: "zirndorf", active: true, posted: "2026-06-05", applyUrl: "https://mfws.alphadesk.de:13153/connect/stellen/3" },
  { roleKey: "pflegefachhelfer", locationSlug: "zirndorf", active: true, posted: "2026-06-05", applyUrl: "https://mfws.alphadesk.de:13153/connect/stellen/2" },
  { roleKey: "pflegefachkraft", locationSlug: "zirndorf", active: true, posted: "2026-06-05", applyUrl: "https://mfws.alphadesk.de:13153/connect/stellen/1" },
];

// Gerenderte Stellen = Rolle x Standort, aber nur AKTIVE Ausschreibungen.
// Schlafende (active:false) erzeugen bewusst keinen öffentlichen Fußabdruck.
export interface Job {
  slug: string;
  roleKey: string;
  title: string;
  locationSlug: string;
  entity: string;
  type: JobType;
  department: string;
  posted: string;
  summary: string;
  intro: string;
  expected: string[];
  requirements: string[];
  contact: string;
  applyUrl: string;
}

export const jobs: Job[] = openings
  .filter((opening) => opening.active)
  .map((opening) => {
    const role = roles.find((entry) => entry.key === opening.roleKey);
    const location = locations.find((entry) => entry.slug === opening.locationSlug);
    if (!role || !location) {
      throw new Error(
        `Ausschreibung verweist auf unbekannte Rolle/Standort: ${opening.roleKey} / ${opening.locationSlug}`,
      );
    }
    return {
      slug: `${role.key}-${location.slug}`,
      roleKey: role.key,
      title: role.title,
      locationSlug: location.slug,
      entity: location.entity,
      type: role.type,
      department: role.department,
      posted: opening.posted,
      summary: role.summary,
      intro: role.intro,
      expected: role.expected,
      requirements: role.requirements,
      contact: location.email,
      applyUrl: opening.applyUrl,
    };
  });
