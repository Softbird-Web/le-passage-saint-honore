import { defineField, defineType } from 'sanity'

export const finalCTASection = defineType({
  name: 'finalCTASection',
  title: 'Section Final CTA',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Titre', type: 'string' }),
    defineField({ name: 'body', title: 'Sous-titre', type: 'string' }),
    defineField({ name: 'ctaLabel', title: 'Bouton CTA', type: 'string' }),
    defineField({ name: 'image', title: 'Image de fond', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'heading', media: 'image' } },
})
