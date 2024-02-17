import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "author",
      title: "Author",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      validation: (Rule) => Rule.required(),
      type: "image",
      description:
        "This image will be used at the top of the post and also as the card image for previews on the hpmepage and blog page. The image should be a 3:2 Aspect ratio and at least 1024px wide. Best results are images that are w1024px x h682px.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      validation: (Rule) => Rule.required(),
      description:
        "The text will be cut off at 235 characters in the front-end of the website when the article is displayed as a preview card",
      type: "text",
    }),
    defineField({
      name: "readtime",
      title: "Read Time (mins)",
      validation: (Rule) => Rule.required(),
      type: "number",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      validation: (Rule) => Rule.required(),
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      validation: (Rule) => Rule.required(),
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
