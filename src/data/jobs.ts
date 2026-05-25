import { companyEmail } from "./locations";

export interface Job {
  slug: string;
  title: string;
  locationSlug: string;
  entity: string;
  type: "Vollzeit" | "Teilzeit" | "Minijob";
  department: string;
  posted: string;
  description: string;
  contact: string;
}

export const jobs: Job[] = [
  {
    slug: "pflegefachkraft-zirndorf",
    title: "Pflegefachkraft (m/w/d)",
    locationSlug: "zirndorf",
    entity: "Ihre Pflege Zirndorf GmbH",
    type: "Vollzeit",
    department: "Pflege",
    posted: "2025-01-01",
    description: "Wir suchen eine erfahrene Pflegefachkraft für unser Team in Zirndorf. Sie übernehmen die Grund- und Behandlungspflege unserer Patienten im häuslichen Umfeld und arbeiten eng mit Ärzten und Angehörigen zusammen.",
    contact: companyEmail,
  },
  {
    slug: "pflegehilfskraft-zirndorf",
    title: "Pflegehilfskraft (m/w/d)",
    locationSlug: "zirndorf",
    entity: "Ihre Pflege Zirndorf GmbH",
    type: "Teilzeit",
    department: "Pflege",
    posted: "2025-01-01",
    description: "Zur Verstärkung unseres Teams suchen wir eine Pflegehilfskraft in Teilzeit. Vorkenntnisse sind willkommen, aber nicht zwingend erforderlich. Wir begleiten Sie von Anfang an.",
    contact: companyEmail,
  },
];
