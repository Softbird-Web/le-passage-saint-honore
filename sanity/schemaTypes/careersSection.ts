import { defineField, defineType } from 'sanity'

export const careersSection = defineType({
  name: 'careersSection',
  title: 'Section Recrutement',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Titre', type: 'string' }),
    defineField({ name: 'intro', title: 'Introduction', type: 'text', rows: 3 }),
    defineField({ name: 'ctaLabel', title: 'Bouton candidature', type: 'string' }),
    defineField({ name: 'perksHeading', title: 'Titre liste avantages', type: 'string' }),
    defineField({
      name: 'perks',
      title: 'Avantages',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'positions',
      title: 'Postes ouverts',
      type: 'array',
      of: [
        defineField({
          name: 'position',
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Intitulé du poste', type: 'string', validation: (R) => R.required() }),
            defineField({
              name: 'type',
              title: 'Contrat',
              type: 'string',
              options: { list: ['CDI', 'CDD', 'Extra', 'Apprentissage', 'Stage'] },
            }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'type' } },
        }),
      ],
    }),
  ],
  preview: { select: { title: 'heading' } },
})
