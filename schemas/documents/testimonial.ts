import { HeartFilledIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: HeartFilledIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: [  {
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
  }],      
  fields: [
    defineField({      
      name: 'language',
      type: 'string',
      readOnly: true,
      group: 'seo',     
    }),
    defineField({
      name: 'name',
      description: 'This field is the name of the user.',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content', 
    }),
    defineField({
      name: 'subtitle',
      description: 'This field is the subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content', 
    }),
    defineField({
      name: 'testimonialText',
      description: 'This field is the testimonial text',
      title: 'Testimonial text',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content', 
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
      group: 'seo', 
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      description:
        'This image will be used as the user profile picture',
       type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      group: 'media', 
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
      group: 'seo', 
    }),    
  ],
})
