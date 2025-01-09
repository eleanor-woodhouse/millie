import { defineField, defineType } from "sanity";

export const aboutTextType = defineType({
  name: "aboutText",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "theText",
      title: "About",
      type: "text",
    }),
  ],
});
