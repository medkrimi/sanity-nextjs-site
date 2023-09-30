import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, previewSecretId, projectId } from './sanity/sanity.api'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import {
  defineUrlResolver,
  Iframe,
  IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'

import page from './schemas/documents/page'
import testimonial from './schemas/documents/testimonial'
import home from './schemas/singletons/home'
import country from './schemas/documents/country'
import destination from './schemas/documents/destination'
import deal from './schemas/documents/deal'
import settings from './schemas/singletons/settings'

import {documentInternationalization} from '@sanity/document-internationalization'
import {media} from 'sanity-plugin-media'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  deal.name,
  country.name,
  destination.name,
  testimonial.name,  
  page.name 
]
const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS = [  
  deal.name,
  country.name,
  destination.name,
  testimonial.name,  
  page.name      
] satisfies typeof PREVIEWABLE_DOCUMENT_TYPES
// Used to generate URLs for drafts and live previews
export const PREVIEW_BASE_URL = '/api/draft'
export const iframeOptions = {
  url: defineUrlResolver({
    base: PREVIEW_BASE_URL,
    requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
  }),
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions


export default defineConfig({
  name: process.env.NEXT_PUBLIC_SANITY_PROJECT_NAME,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "" ,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  basePath: "/studio",  
  schema: { types: schemaTypes },
  plugins: [    
    deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        if ((PREVIEWABLE_DOCUMENT_TYPES as string[]).includes(schemaType)) {
          return S.document().views([
            // Default form view
            S.view.form(),
            // Preview
            S.view.component(Iframe).options(iframeOptions).title('Preview'),
          ])
        }

        return null
      },
    }),
    
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    
    // Add the "Open preview" action
    previewUrl({
      base: PREVIEW_BASE_URL,
      requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
      urlSecretId: previewSecretId,
      matchTypes: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    
    //Sanity Media Library
    media(),
    
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    
    //Internationalization
    documentInternationalization({      
      supportedLanguages: [        
        {id: 'en', title: 'English'},
        {id: 'fr', title: 'French'},
        {id: 'ar', title: 'Arabic'}
      ],
      schemaTypes: ['home', 'deal', 'country', 'destination', 'testimonial', 'page'],
      
      // Optional
      // Customizes the name of the language field
      languageField: `language`, // defauts to "language"

      // Optional
      // Keep translation.metadata references weak
      weakReferences: true, // defaults to false

      // Optional
      // Adds UI for publishing all translations at once. Requires access to the Scheduling API
      // https://www.sanity.io/docs/scheduling-api
      bulkPublish: true, // defaults to false

      // Optional
      // Adds additional fields to the metadata document
      // metadataFields: [
      //   defineField({ name: 'slug', type: 'slug' })
      // ],

      // Optional
      // Define API Version for all queries
      // https://www.sanity.io/docs/api-versioning
      // apiVersion: '2023-05-22'

    })
    
  ],
});
