import { defineArrayMember, defineField, defineType } from 'sanity'

import { EarthAmericasIcon } from '@sanity/icons'

export default defineType({
  name: 'country',
  title: 'Country',
  type: 'document',
  icon: EarthAmericasIcon,
  //liveEdit: true,
  groups: [    
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'generalInformations',
      title: 'Practical',
    },    
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'seo',
      title: 'SEO',
    },      
  ],  
  fields: [
    defineField({      
      name: 'language',
      type: 'string',
      readOnly: true,      
      group: 'seo'
    }),
    defineField({
      name: 'name',      
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
      group: 'seo'
    }),
    defineField({
      name: 'overview',      
      title: 'Overview',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'keyHighlights',      
      title: 'Key Highlights',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'content',      
      title: 'Content',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
      group: 'content',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',      
      type: 'image',      
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      group: 'media'
    }),
    defineField({
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }], 
      group: 'media'
     }),
    defineField({
      name: 'flagImage',
      title: 'Flag Image',      
      type: 'image',      
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      group: 'media'
    }),

    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      group: 'generalInformations'
    }),
    defineField({
      name: 'officialLanguages',
      title: 'Official Languages',
      type: 'string',
      group: 'generalInformations'
    }),
    defineField({
      name: 'climate',
      title: 'Climate',
      type: 'string',
      group: 'generalInformations'
    }),
    defineField({
      name: 'localTransportation',
      title: 'Local Transportation',
      type: 'string',
      group: 'generalInformations'
    }),
    defineField({
      name: 'timezone',
      title: 'Time Zone',
      type: 'string',
      group: 'generalInformations'
    }),   
    defineField({
      name: 'bestTimeToVisit',
      title: 'Best Time to Visit',
      type: 'string',
    }),    
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      group: 'seo'
    }),    
  ],
})
