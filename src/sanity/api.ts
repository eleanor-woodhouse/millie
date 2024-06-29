// import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { Category, HomepageImage } from "./types";

export async function getHomepageImage(): Promise<HomepageImage[]> {
  const query = groq`*[_type == "homepageImage"][0]{
    image{
        "id": asset->_id,
        "url": asset->url,
        "dimensions": asset->metadata.dimensions
    }
  }`;
  const res = await sanityFetch<HomepageImage>({ query });
  return [res];
}

export async function getCategories(): Promise<Category[]> {
  const query = groq`*[_type == "textCategory"]{
          _id,
          _createdAt,
          textTitle,
          "writtenTexts": includedTexts[]->{
            _id,
            _createdAt,
            title,
            date,
            publishedBy,
            link,
            description
          }
  }`;
  const res = await sanityFetch<Category[]>({ query });
  return res;
}
