import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'textComponent',
  title: 'Text Component',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
  ],
});