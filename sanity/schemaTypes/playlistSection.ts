import { defineField, defineType } from 'sanity'

export const playlistSection = defineType({
  name: 'playlistSection',
  title: 'Section Playlist',
  type: 'document',
  // @ts-expect-error -- runtime field not typed in Sanity v3
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'heading', title: 'Titre', type: 'string' }),
    defineField({ name: 'body', title: 'Texte', type: 'text', rows: 2 }),
    defineField({ name: 'spotifyUrl', title: 'URL Spotify (playlist)', type: 'url', description: 'Ex: https://open.spotify.com/playlist/...' }),
  ],
  preview: { select: { title: 'heading' } },
})
