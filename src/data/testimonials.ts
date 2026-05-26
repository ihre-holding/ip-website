export interface Testimonial {
  slug: string;
  initials: string;
  role: string;
  rating: 5;
  text: string;
  source: 'google';
  sourceLabel: string;
  sourceUrl?: string;
  postedRelative: string;
  anonymous?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    slug: 'reinhold-g',
    initials: 'Reinhold G.',
    role: 'Sohn einer Patientin',
    rating: 5,
    text:
      'Als meine Mutter palliativ versorgt wurde, hat mich der Palliativarzt gefragt, welcher Pflegedienst uns unterstuetzt. Als ich "Ihre Pflege" genannt habe, war die Antwort des Arztes: "Da haben Sie ja schon die besten an der Hand." Wer Wert auf menschenwuerdige Pflege legt, ist hier an der richtigen Adresse.',
    source: 'google',
    sourceLabel: 'Bewertung auf Google',
    postedRelative: 'vor 3 Monaten',
  },
  {
    slug: 'patientin-80',
    initials: '80-jaehrige Patientin',
    role: 'Langjaehrige Kundin',
    rating: 5,
    text:
      'Mein verstorbener Mann hat ihre Dienste viele Jahre lang in Anspruch genommen, und er wurde immer mit groesstem Respekt und unendlicher Freundlichkeit behandelt. Jetzt helfen sie mir, und ich koennte mit ihrer Betreuung nicht zufriedener sein. Sie sind zuverlaessig, einfuehlsam und fuehlen sich schon fast wie Familie an.',
    source: 'google',
    sourceLabel: 'Bewertung auf Google',
    postedRelative: 'vor wenigen Tagen',
    anonymous: true,
  },
  {
    slug: 'eva-g',
    initials: 'Eva G.',
    role: 'Pflegende Angehoerige',
    rating: 5,
    text:
      'Die Mitarbeiter waren stets gut gelaunt und wir haben uns jeden Tag auf ihren Besuch gefreut. Sie haben sich sogar Zeit genommen, zur Gedenkansprache meiner Schwiegermutter zu kommen. Das zeugt von respektvollem Verhalten dem Kunden gegenueber.',
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
      'Das gesamte Pflegeteam arbeitet sehr professionell, zuverlaessig und vor allem mit viel Herz und Einfuehlungsvermoegen. Wir koennen diesen Pflegedienst uneingeschraenkt weiterempfehlen.',
    source: 'google',
    sourceLabel: 'Bewertung auf Google',
    postedRelative: 'vor 2 Monaten',
  },
];
