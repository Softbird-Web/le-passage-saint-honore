import { defineField, defineType } from 'sanity'

export const environnementSection = defineType({
  name: 'environnementSection',
  title: 'Section Environnement',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Titre', type: 'string' }),
    defineField({ name: 'body1', title: 'Premier paragraphe', type: 'text', rows: 4 }),
    defineField({ name: 'body2', title: 'Deuxième paragraphe', type: 'text', rows: 4 }),
    defineField({
      name: 'callouts',
      title: 'Statistiques / callouts',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', title: 'Valeur', type: 'string' }),
          defineField({ name: 'label', title: 'Label', type: 'string' }),
        ],
      }],
    }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'heading', media: 'image' } },
})
