import { defineField, defineType } from 'sanity'

export const histoireSection = defineType({
  name: 'histoireSection',
  title: 'Section Notre Histoire',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Titre', type: 'string' }),
    defineField({
      name: 'body',
      title: 'Texte (rich text)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Supporte le gras, l\'italique, les liens',
    }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
  ],
  preview: { select: { title: 'heading', media: 'image' } },
})
