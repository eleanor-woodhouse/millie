import { defineField, defineType } from "sanity";

export const contactType = defineType({
  name: "contactDetails",
  title: "Contact Details",
  type: "document",
  fields: [
    defineField({
      name: "contactLines",
      title: "Contact Details",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],
});
