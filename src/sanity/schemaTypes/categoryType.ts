import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "textCategory",
  title: "Text Category",
  type: "document",
  fields: [
    defineField({
      name: "categoryTitle",
      title: "Category Title",
      type: "string",
    }),
    defineField({
      name: "includedTexts",
      title: "Included Texts",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "writtenText" }],
          options: { disableNew: true },
        },
      ],
    }),
    orderRankField({ type: "textCategory" }),
  ],
});
