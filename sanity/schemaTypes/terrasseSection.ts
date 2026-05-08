import { defineField, defineType } from 'sanity'

export const terrasseSection = defineType({
  name: 'terrasseSection',
  title: 'Section Terrasse',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Titre', type: 'string' }),
    defineField({ name: 'body', title: 'Texte', type: 'text', rows: 3 }),
    defineField({ name: 'ctaLabel', title: 'Bouton', type: 'string' }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'heading', media: 'image' } },
})
