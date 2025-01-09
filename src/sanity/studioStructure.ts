import type { StructureResolver } from "sanity/structure";
import * as icons from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .id("root")
    .title("Edit")
    .items([
      S.documentTypeListItem("writtenText")
        .title("Writing")
        .icon(icons.DocumentTextIcon),
      orderableDocumentListDeskItem({
        type: "textCategory",
        title: "Writing Categories",
        icon: icons.HeartIcon,
        S,
        context,
      }),
      S.listItem()
        .title("Homepage Image")
        .child(
          S.document()
            .schemaType("homepageImage")
            .documentId("homepageImage")
            .title("Homepage Image"),
        )
        .icon(icons.ImageIcon),
      S.listItem()
        .title("Contact Details")
        .child(
          S.document()
            .schemaType("contactDetails")
            .documentId("contactDetails")
            .title("Contact Details"),
        )
        .icon(icons.UserIcon),
      S.listItem()
        .title("About")
        .child(
          S.document()
            .schemaType("aboutText")
            .documentId("aboutText")
            .title("About"),
        )
        .icon(icons.InfoFilledIcon),
    ]);
