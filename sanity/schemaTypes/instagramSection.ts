import { defineField, defineType } from 'sanity'

export const instagramSection = defineType({
  name: 'instagramSection',
  title: 'Section Instagram',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Titre', type: 'string' }),
    defineField({ name: 'curatorId', title: 'Curator.io Widget ID', type: 'string', description: 'ID du widget Curator.io (laisser vide = grille statique)' }),
    defineField({ name: 'ctaLabel', title: 'Lien Instagram texte', type: 'string' }),
  ],
  preview: { select: { title: 'heading' } },
})
