import { defineField, defineType } from 'sanity'

export const brunchSection = defineType({
  name: 'brunchSection',
  title: 'Section Brunch',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Titre', type: 'string' }),
    defineField({ name: 'body', title: 'Texte', type: 'text', rows: 4 }),
    defineField({ name: 'hoursCallout', title: 'Mention horaires', type: 'string', description: 'Ex: Samedi & Dimanche · 10h – 15h' }),
    defineField({
      name: 'signatureItems',
      title: 'Plats signature',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste des plats vedettes à afficher',
    }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ctaLabel', title: 'Bouton réservation', type: 'string' }),
    defineField({ name: 'menuCtaLabel', title: 'Bouton carte (si PDF actif)', type: 'string' }),
    defineField({
      name: 'menuCards',
      title: 'Cartes du menu',
      description: 'Les 4 plats mis en avant (entrée, signature, marché, dessert)',
      type: 'array',
      of: [
        defineField({
          name: 'menuCard',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Catégorie', type: 'string', description: "ex: l'entrée, la signature…" }),
            defineField({ name: 'name', title: 'Nom du plat', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'price', title: 'Prix', type: 'string', description: 'ex: 14 €' }),
            defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'name', subtitle: 'label', media: 'image' } },
        }),
      ],
    }),
  ],
  preview: { select: { title: 'heading', media: 'image' } },
})
