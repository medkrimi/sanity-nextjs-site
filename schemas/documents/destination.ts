import { defineArrayMember, defineField, defineType } from 'sanity'

import { PinIcon } from '@sanity/icons'

export default defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  icon: PinIcon,
  groups: [    
    {
      name: 'content',
      title: 'Content',
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
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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
      group: 'content'
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
      group : 'seo'
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
      group: 'content'
    }),
    defineField({
      name: 'description',      
      title: 'Description',
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
      group: 'content'
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
    
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
      group: 'content'

    },    
    defineField({
      name: 'Website',
      title: 'website',
      type: 'url',
      group: 'content'
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
