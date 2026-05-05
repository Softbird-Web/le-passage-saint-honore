// Restaurant config for Le Passage Saint-Honoré
// All components read from here — never hardcode restaurant data elsewhere.

export const brand = {
  identity: {
    name: "Le Passage Saint-Honoré",
    tagline: "Bistrot parisien · Brunch · Terrasse · Privatisation",
    description: "Bistrot parisien au cœur de la Place du Marché Saint-Honoré. Cuisine généreuse, brunch le week-end, terrasse emblématique et espaces privatisables.",
  },

  contact: {
    phone: "+33 1 42 96 31 34",
    email: "lepassage01@gmail.com",
    address: "33 Pl. du Marché Saint-Honoré, 75001 Paris, France",
    city: "Paris 1er",
    googleMapsUrl: "https://maps.google.com/?q=33+Place+du+Marché+Saint-Honoré+75001+Paris",
    googleMapsEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9982988359!2d2.330167!3d48.865472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2e4e3e3e3e%3A0x0!2s33+Place+du+March%C3%A9+Saint-Honor%C3%A9!5e0!3m2!1sfr!2sfr!4v1000000000000",
  },

  hours: {
    lunch: "6h30 – 14h30",
    dinner: "18h30 – 2h00",
    brunch: "Week-end 10h – 15h",
    closedOn: "",
    full: "Tous les jours 6h30 – 2h00",
  },

  booking: {
    system: "url" as "thefork" | "resy" | "opentable" | "phone" | "url",
    widgetId: "",   // TheFork widget ID — not found on current site, pending from client
    url: "https://lepassagesainthonore.fr/fr/booking",
    ctaLabel: "Réserver une table",
  },

  social: {
    instagram: "lepassagesthonore",
    instagramUrl: "https://www.instagram.com/lepassagesthonore",
    facebook: "",
    tripadvisor: "",
  },

  pages: {
    brunch: true,
    terrasse: true,
    privateHire: true,
    careers: true,
    menu: false,
    events: false,
  },

  privateHire: {
    rooms: [
      {
        name: "Salle 1",
        description: "Un espace élégant et chaleureux, idéal pour vos dîners privés et célébrations.",
        capacity: 0,  // pending from client
        photo: "salle-1.jpg",
      },
      {
        name: "Salle 2",
        description: "Un cadre intimiste et raffiné pour vos événements professionnels ou personnels.",
        capacity: 0,  // pending from client
        photo: "salle-2.jpg",
      },
    ] as Array<{ name: string; description: string; capacity: number; photo: string }>,
    contactEmail: "lepassage01@gmail.com",
    minGuests: 0,
  },

  careers: {
    contactEmail: "lepassage01@gmail.com",
    positions: [] as string[],  // candidature spontanée framing
    intro: "Rejoignez une équipe passionnée au cœur de Paris. Le Passage Saint-Honoré est un lieu de vie où l'ambiance compte autant que l'assiette.",
  },

  menu: {
    type: "pdf" as "pdf" | "photo" | "url",
    src: "",  // pending from client — button hidden until provided
  },

  instagram: {
    handle: "lepassagesthonore",
    embedId: "",  // Curator.io widget ID — set up free account during build
  },

  meta: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lepassagesainthonore.fr",
    gaId: "",
    metaPixelId: "",
  },
} as const
