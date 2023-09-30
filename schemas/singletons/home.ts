import { defineArrayMember, defineField, defineType } from 'sanity'

import { HomeIcon } from '@sanity/icons'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  groups: [    
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'media',
      title: 'MEDIA',
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
      name: 'title',      
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content' 
    }),
    defineField({
      name: 'components',
      title: 'Components',
      type: 'array',
      of: [
        { type: 'textComponent' },
        { type: 'richTextComponent' },
        { type: 'imageComponent' },
        { type: 'linkComponent' },
      ],
    }),
    defineField({
      name: 'showcaseTestimonials',
      title: 'Showcase testimonials',      
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'testimonial' }],
        }),
      ],
      group: 'content'
    }),
    defineField({
      name: 'showcaseDeals',
      title: 'Showcase Deals',      
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'deal' }],
        }),
      ],
      group: 'content'
    }),
    defineField({
      name: 'showcaseDestinations',
      title: 'Showcase Destinations',      
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'destination' }],
        }),
      ],
      group: 'content'
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
