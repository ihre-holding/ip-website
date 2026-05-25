export const companyAddressLine1 = "Nürnberger Str. 29A";
export const companyAddressLine2 = "90513 Zirndorf";
export const companyAddress = `${companyAddressLine1}, ${companyAddressLine2}`;
export const companyEmail = "info@ihre-pflege.de";

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
    address: companyAddress,
    phone: "0911 9606030",
    email: companyEmail,
    entity: "Ihre Pflege Zirndorf GmbH",
    intro: "Unser ambulanter Pflegedienst in Zirndorf betreut seit 1997 Patienten in Zirndorf und Umgebung, verlässlich, persönlich und mit echtem Engagement.",
    serviceArea: "Zirndorf, Oberasbach und Umgebung",
    since: "1997",
  },
];
