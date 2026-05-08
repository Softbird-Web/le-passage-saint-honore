import { defineField, defineType } from 'sanity'

export const privatisationSection = defineType({
  name: 'privatisationSection',
  title: 'Section Privatisation (teaser)',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Titre', type: 'string' }),
    defineField({ name: 'body', title: 'Sous-titre', type: 'string' }),
    defineField({ name: 'ctaLabel', title: 'Bouton CTA', type: 'string' }),
  ],
  preview: { select: { title: 'heading' } },
})
