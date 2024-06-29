import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { structure } from "./src/sanity/studioStructure";

import schemaTypes from "./src/sanity/schemaTypes";

const projectId = "ezk59a6n";
const dataset = "production";

export default defineConfig({
  basePath: "/edit",

  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
