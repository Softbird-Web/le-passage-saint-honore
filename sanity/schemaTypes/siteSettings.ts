import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'restaurantName', title: 'Nom du restaurant', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description (SEO)', type: 'text', rows: 3 }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({ name: 'phone', title: 'Téléphone', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'address', title: 'Adresse', type: 'string' }),
        defineField({ name: 'googleMapsUrl', title: 'Lien Google Maps', type: 'url' }),
        defineField({ name: 'googleMapsEmbedSrc', title: 'Iframe Google Maps (src)', type: 'string' }),
      ],
    }),
    defineField({
      name: 'hours',
      title: 'Horaires',
      type: 'object',
      fields: [
        defineField({ name: 'full', title: 'Horaires complets', type: 'string', description: 'Ex: Tous les jours 6h30 – 2h00' }),
        defineField({ name: 'brunch', title: 'Brunch', type: 'string', description: 'Ex: Week-end 10h – 15h' }),
        defineField({ name: 'closedOn', title: 'Fermeture', type: 'string' }),
      ],
    }),
    defineField({
      name: 'booking',
      title: 'Réservation',
      type: 'object',
      fields: [
        defineField({ name: 'url', title: 'URL de réservation', type: 'url' }),
        defineField({ name: 'ctaLabel', title: 'Texte du bouton', type: 'string' }),
      ],
    }),
    defineField({
      name: 'social',
      title: 'Réseaux sociaux',
      type: 'object',
      fields: [
        defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
        defineField({ name: 'instagram', title: 'Instagram handle (sans @)', type: 'string' }),
        defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
        defineField({ name: 'tripadvisor', title: 'TripAdvisor URL', type: 'url' }),
      ],
    }),
  ],
  preview: { select: { title: 'restaurantName' } },
})
