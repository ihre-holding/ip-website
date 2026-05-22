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
}

export const locations: Location[] = [
  {
    slug: "zirndorf",
    name: "Ihre Pflege Zirndorf",
    city: "Zirndorf",
    address: "Jahnstraße 31, 90513 Zirndorf",
    phone: "0911 9606030",
    email: "info@ihre-pflege-zirndorf.de",
    entity: "Ihre Pflege Zirndorf GmbH",
    intro: "Unser ambulanter Pflegedienst in Zirndorf betreut seit 1997 Patienten in Zirndorf und Umgebung, verlässlich, persönlich und mit echtem Engagement.",
    serviceArea: "Zirndorf, Oberasbach, Stein, Fürth und Umgebung",
    since: "1997",
  },
];
