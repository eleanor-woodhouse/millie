import "server-only";
import { createClient, type QueryParams } from "next-sanity";

const projectId = process.env.PROJECT_ID!;
const dataset = process.env.DATASET!;
const apiVersion = process.env.API_VERSION!;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === "development" ? 30 : 3600,
      tags,
    },
  });
}
