import { defineField, defineType } from "sanity";

export const homepageImageType = defineType({
  name: "homepageImage",
  title: "Homepage Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
