import { defineArrayMember, defineField, defineType } from 'sanity'

import { PlayIcon } from '@sanity/icons'

export default defineType({
  name: 'deal',
  title: 'Deal',
  type: 'document',
  icon: PlayIcon,
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
      name: 'outbound',
      title: 'Outbound Flight',
    },
    {
      name: 'inbound',
      title: 'Inbound Flight',
    },
    {
      name: 'pricing',
      title: 'Pricing',
    },
    {
      name: 'seo',
      title: 'SEO',
    },    
  ],
  // Uncomment below to have edits publish automatically as you type
  //liveEdit: true,
  fields: [
    defineField({      
      name: 'language',
      type: 'string',
      readOnly: true,      
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
      group: 'seo'
    }),
    defineField({
      name: 'outbound_origin',
      title: 'Outbound Origin',
      type: 'string',
      group: 'outbound'
    }),
    defineField({
      title: 'Outbound Departure Date',
      name: 'outbound_departure_date',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: 15          
        },
      group: 'outbound'
    }),    
    defineField({
      title: 'Outbound Arrival Date',
      name: 'outbound_arrival_date',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: 15          
        },
      group: 'outbound'
    }),
    defineField({
      name: 'outbound_airlines',
      title: 'Outbound Airlines',
      type: 'string',
      group: 'outbound'
    }),
    defineField({
      name: 'outbound_travel_time',
      title: 'Outbound Travel Time',
      type: 'number',
      group: 'outbound'
    }),
    defineField({
      name: 'outbound_stop_count',
      title: 'Outbound Stop Count',
      type: 'number',
      group: 'outbound'
    }),
    defineField({
      name: 'outbound_layover_time',
      title: 'Outbound Layover Time',
      type: 'number',
      group: 'outbound'
    }),
    defineField({
      name: 'outbound_destination',
      title: 'Outbound Destination',
      type: 'string',
      group: 'outbound'
    }),

    defineField({
      name: 'inbound_origin',
      title: 'Inbound Origin',
      type: 'string',
      group: 'inbound'
    }),
    defineField({
      title: 'Inbound Departure Date',
      name: 'inbound_departure_date',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: 15          
        },
      group: 'inbound'
    }),    
    defineField({
      title: 'Inbound Arrival Date',
      name: 'inbound_arrival_date',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: 15          
        },
      group: 'inbound'
    }),
    defineField({
      name: 'inbound_airlines',
      title: 'Inbound Airlines',
      type: 'string',
      group: 'inbound'
    }),
    defineField({
      name: 'inbound_travel_time',
      title: 'Inbound Travel Time',
      type: 'number',
      group: 'inbound'
    }),
    defineField({
      name: 'inbound_stop_count',
      title: 'Inbound Stop Count',
      type: 'number',
      group: 'inbound'
    }),
    defineField({
      name: 'inbound_layover_time',
      title: 'Inbound Layover Time',
      type: 'number',
      group: 'inbound'
    }),
    defineField({
      name: 'inbound_destination',
      title: 'Inbound Destination',
      type: 'string',
      group: 'inbound'
    }),
    defineField({
      name: 'priceUSD',
      title: 'Price (USD)',
      type: 'string',
      group: 'pricing'
    }),
    defineField({
      name: 'priceEUR',
      title: 'Price (EUR)',
      type: 'string',
      group: 'pricing'
    }),
    defineField({
      name: 'priceCAD',
      title: 'Price (CAD)',
      type: 'string',
      group: 'pricing'
    }),
    defineField({
      name: 'priceTrend',
      title: 'Price Trend',
      type: 'string',
      group: 'pricing'
    }),
    defineField({
      name: 'nightCount',
      title: 'Night Count',
      type: 'string',
      group: 'content'      
    }),
    //TODO Make it in Object
    defineField({
      name: 'baggage_breackdown',
      title: 'Baggage Breackdown',
      type: 'string',
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
    defineField({
      name: 'additionalNotes',      
      title: 'Additional Notes',
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
      name: 'itinerary_type',
      title: 'Itinerary Type',
      type: 'string',
      group: 'content',
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
