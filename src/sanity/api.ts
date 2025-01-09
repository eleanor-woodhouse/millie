// import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import { groq } from "next-sanity";
import { AboutText, Category, ContactDetails, HomepageImage } from "./types";

export async function getHomepageImage(): Promise<HomepageImage[]> {
  const query = groq`*[_type == "homepageImage"][0]{
    image{
        "id": asset->_id,
        "url": asset->url,
        "dimensions": asset->metadata.dimensions,
    },
    altText
  }`;
  const res = await sanityFetch<HomepageImage>({ query });
  return [res];
}

export async function getAboutText(): Promise<AboutText> {
  const query = groq`*[_type == "aboutText"][0]{
    "text": theText
  }`;
  const res = await sanityFetch<AboutText>({ query });
  return res;
}

export async function getContactDetails(): Promise<ContactDetails> {
  const query = groq`*[_type == "contactDetails"][0]{
    contactLines | order(_createdAt asc)
  } `;
  const res = await sanityFetch<ContactDetails>({ query });
  return res;
}

export async function getCategories(): Promise<Category[]> {
  const query = groq`*[_type == "textCategory"]{
          _id,
          _createdAt,
          categoryTitle,
          "writtenTexts": includedTexts[]->{
            _id,
            _createdAt,
            title,
            date,
            publishedBy,
            link,
            pdf{
              "url": asset->url
            },
            description,
            altText
          },
          orderRank
  } | order(orderRank)`;
  const res = await sanityFetch<Category[]>({ query });
  return res;
}
