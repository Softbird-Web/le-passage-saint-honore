import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

// Singleton document types — these have only one document each
const SINGLETON_TYPES = new Set([
  'siteSettings',
  'heroSection',
  'brunchSection',
  'terrasseSection',
  'histoireSection',
  'environnementSection',
  'privatisationSection',
  'playlistSection',
  'instagramSection',
  'careersSection',
  'finalCTASection',
])

const SINGLETON_ACTIONS = new Set(['update', 'discardChanges', 'restore'])

export default defineConfig({
  name: 'le-passage-saint-honore',
  title: 'Le Passage Saint-Honoré',

  projectId: '4hz3qx1b',
  dataset: 'production',

  plugins: [
    structureTool({

      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('Paramètres du site')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem()
              .title('Section Hero')
              .id('heroSection')
              .child(S.document().schemaType('heroSection').documentId('heroSection')),
            S.listItem()
              .title('Section Brunch')
              .id('brunchSection')
              .child(S.document().schemaType('brunchSection').documentId('brunchSection')),
            S.listItem()
              .title('Section Terrasse')
              .id('terrasseSection')
              .child(S.document().schemaType('terrasseSection').documentId('terrasseSection')),
            S.listItem()
              .title('Section Notre Histoire')
              .id('histoireSection')
              .child(S.document().schemaType('histoireSection').documentId('histoireSection')),
            S.listItem()
              .title('Section Environnement')
              .id('environnementSection')
              .child(S.document().schemaType('environnementSection').documentId('environnementSection')),
            S.listItem()
              .title('Section Privatisation')
              .id('privatisationSection')
              .child(S.document().schemaType('privatisationSection').documentId('privatisationSection')),
            S.listItem()
              .title('Section Playlist')
              .id('playlistSection')
              .child(S.document().schemaType('playlistSection').documentId('playlistSection')),
            S.listItem()
              .title('Section Instagram')
              .id('instagramSection')
              .child(S.document().schemaType('instagramSection').documentId('instagramSection')),
            S.listItem()
              .title('Section Recrutement')
              .id('careersSection')
              .child(S.document().schemaType('careersSection').documentId('careersSection')),
            S.listItem()
              .title('Section Final CTA')
              .id('finalCTASection')
              .child(S.document().schemaType('finalCTASection').documentId('finalCTASection')),
            S.divider(),
            S.documentTypeListItem('testimonial').title('Avis clients'),
            S.documentTypeListItem('galleryImage').title('Galerie photos'),
            S.documentTypeListItem('privateRoom').title('Salles privatisables'),
          ]),
    }),
  ],

  schema: { types: schemaTypes },

  document: {
    // Prevent new document creation for singletons + restrict actions
    newDocumentOptions: (prev) =>
      prev.filter((opt) => !SINGLETON_TYPES.has(opt.templateId)),
    actions: (prev, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? prev.filter(({ action }) => action && SINGLETON_ACTIONS.has(action))
        : prev,
  },
})
