export interface Testimonial {
  slug: string;
  initials?: string;
  role?: string;
  rating: 5;
  text: string;
  source: 'google';
  sourceLabel: string;
  sourceUrl?: string;
  /** Absolutes Datum (z.B. "Juni 2026") — altert ehrlich, wird bevorzugt vor postedRelative angezeigt. */
  posted?: string;
  /** Legacy: relative Angabe ("vor 3 Monaten"). Nur bis ein absolutes `posted` vorliegt. */
  postedRelative?: string;
  anonymous?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    slug: 'reinhold-g',
    initials: 'Reinhold G.',
    role: 'Sohn einer Patientin',
    rating: 5,
    text:
      'Als meine Mutter palliativ versorgt wurde, hat mich der Palliativarzt gefragt, welcher Pflegedienst uns unterstützt. Als ich "Ihre Pflege" genannt habe, war die Antwort des Arztes: "Da haben Sie ja schon die besten an der Hand." Wer Wert auf menschenwürdige Pflege legt, ist hier an der richtigen Adresse.',
    source: 'google',
    sourceLabel: 'Bewertung auf Google',
    postedRelative: 'vor 3 Monaten',
  },
  {
    slug: 'patientin-80',
    initials: '80-jährige Patientin',
    role: 'Langjährige Kundin',
    rating: 5,
    text:
      'Mein verstorbener Mann hat ihre Dienste viele Jahre lang in Anspruch genommen, und er wurde immer mit größtem Respekt und unendlicher Freundlichkeit behandelt. Jetzt helfen sie mir, und ich könnte mit ihrer Betreuung nicht zufriedener sein. Sie sind zuverlässig, einfühlsam und fühlen sich schon fast wie Familie an.',
    source: 'google',
    sourceLabel: 'Bewertung auf Google',
    postedRelative: 'vor wenigen Tagen',
    anonymous: true,
  },
  {
    slug: 'eva-g',
    initials: 'Eva G.',
    role: 'Pflegende Angehörige',
    rating: 5,
    text:
      'Die Mitarbeiter waren stets gut gelaunt und wir haben uns jeden Tag auf ihren Besuch gefreut. Sie haben sich sogar Zeit genommen, zur Gedenkansprache meiner Schwiegermutter zu kommen. Das zeugt von respektvollem Verhalten dem Kunden gegenüber.',
    source: 'google',
    sourceLabel: 'Bewertung auf Google',
    postedRelative: 'vor 2 Monaten',
  },
  {
    slug: 'robert-k',
    initials: 'Robert K.',
    role: 'Sohn einer Patientin',
    rating: 5,
    text:
      'Das gesamte Pflegeteam arbeitet sehr professionell, zuverlässig und vor allem mit viel Herz und Einfühlungsvermögen. Wir können diesen Pflegedienst uneingeschränkt weiterempfehlen.',
    source: 'google',
    sourceLabel: 'Bewertung auf Google',
    postedRelative: 'vor 2 Monaten',
  },
  {
    slug: 'menschliche-pflege-zirndorf',
    rating: 5,
    text:
      'Menschliche Pflege, noch nie eine Beschwerde, da kann man nur dankbar sein, dass wir so etwas in Zirndorf haben. Wir sagen: DANKE!',
    source: 'google',
    sourceLabel: 'Bewertung auf Google',
    posted: 'Juni 2026',
    anonymous: true,
  },
];
