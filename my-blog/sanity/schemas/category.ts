import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      validation: (Rule) => Rule.required(),
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "This image will be resized to 1:1",
      validation: (Rule) => Rule.required(),
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          validation: (Rule) => Rule.required(),
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "description",
      validation: (Rule) => Rule.required(),
      title: "Description",
      type: "text",
    }),
  ],
});
