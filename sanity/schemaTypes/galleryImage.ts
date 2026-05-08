import { defineField, defineType } from 'sanity'

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Photo galerie',
  type: 'document',
  fields: [
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: 'alt', title: 'Texte alternatif', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: { list: ['food', 'ambiance', 'terrace', 'team', 'private-hire'] },
    }),
    defineField({ name: 'order', title: 'Ordre d\'affichage', type: 'number' }),
  ],
  orderings: [{ title: 'Ordre', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'alt', media: 'image' } },
})
