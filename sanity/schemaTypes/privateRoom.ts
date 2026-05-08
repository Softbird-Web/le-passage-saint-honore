import { defineField, defineType } from 'sanity'

export const privateRoom = defineType({
  name: 'privateRoom',
  title: 'Salle privatisable',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom de la salle', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'capacitySeated', title: 'Capacité assise', type: 'number' }),
    defineField({ name: 'capacityStanding', title: 'Capacité cocktail', type: 'number' }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number', initialValue: 1 }),
  ],
  orderings: [{ title: 'Ordre', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', media: 'image' } },
})
