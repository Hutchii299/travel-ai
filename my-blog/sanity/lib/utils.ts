import { client } from "./client";
import { groq } from "next-sanity";
import { Post } from "@/types/Post";

export async function getPostWithSlug(slug: string): Promise<Post> {
  const results = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{ 
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            publishedAt,
            "mainImage": mainImage.asset->url,
            "imgAlt": mainImage.alt,
            "categories": categories[]->{title, "slug": slug.current },
            "body": body[]{
                ...,
                "url": asset->url,
            }
         }`,
    { slug }
  );
  return results;
}
