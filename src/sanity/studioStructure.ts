import type { StructureResolver } from "sanity/structure";
import * as icons from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Edit")
    .items([
      S.documentTypeListItem("writtenText")
        .title("Writing")
        .icon(icons.DocumentTextIcon),
      S.documentTypeListItem("textCategory")
        .title("Writing Categories")
        .icon(icons.HeartIcon),
      S.listItem()
        .title("Homepage Image")
        .child(
          S.document()
            .schemaType("homepageImage")
            .documentId("homepageImage")
            .title("Homepage Image"),
        )
        .icon(icons.ImageIcon),
    ]);
