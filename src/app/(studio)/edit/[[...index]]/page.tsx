// ./src/app/studio/[[...index]]/page.tsx
import { Studio } from "./Studio";
import type { Metadata, Viewport } from "next";
import {
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

export const dynamic = "force-static";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Loading Studio…",
};

export const viewport: Viewport = {
  ...studioViewport,
  interactiveWidget: "resizes-content",
};

export default function StudioPage() {
  return <Studio />;
}
