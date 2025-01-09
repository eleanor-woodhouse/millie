import { defineField, defineType } from "sanity";

export const textType = defineType({
  name: "writtenText",
  title: "Texts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "publishedBy",
      title: "Published by",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
    defineField({
      name: "pdf",
      title: "PDF",
      type: "file",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "altText",
      title: "Alt Text",
      type: "string",
    }),
  ],
});
