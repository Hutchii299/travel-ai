import { client } from "./client";
import { groq } from "next-sanity";
import { Post } from "@/types/Post";
import { Category, CategoryWithPostCount } from "@/types/Category";
import { AuthorAndPosts } from "@/types/Author";

const SMALL_POST_QUERY = `_id,
_createdAt,
title,
"slug": slug.current,
publishedAt,
excerpt,
"author": author->{name, "slug": slug.current, image},
readtime,
"featuredImg": mainImage,
"imgAlt": mainImage.alt,
"categories": categories[]->{title, "slug": slug.current, _id, _createdAt }`;

export async function getPostWithSlug(slug: string): Promise<Post> {
  const results = await client.fetch(
    /*
        the 'select' inside the property matches any block of type 'image' and adds the url, height and width properties to the block
    */
    groq`*[_type == "post" && slug.current == $slug][0]{ 
      ${SMALL_POST_QUERY},
    body
       }`,
    { slug }
  );
  return results;
}

export async function getRecentPostsByLimit(
  limit: number,
  start: number = 0
): Promise<Post[]> {
  //dont require content to be pulled
  const results = await client.fetch(
    groq`*[_type == "post"] | order(_createdAt desc) [$start..$limit]{ 
      ${SMALL_POST_QUERY},
         }`,
    { limit, start }
  );
  return results;
}

export async function getRecentPostsByLimitAndNotSlug(
  limit: number,
  avoidPostSlug: string
): Promise<Post[]> {
  //dont require content to be pulled
  const results = await client.fetch(
    groq`*[_type == "post" && slug.current != $avoidPostSlug] | order(_createdAt desc) [0..$limit]{ 
      ${SMALL_POST_QUERY},
       }`,
    { limit, avoidPostSlug }
  );
  return results;
}

export async function getRecentFeaturedPostsByLimit(
  limit: number
): Promise<Post[]> {
  //dont require content to be pulled
  const results = await client.fetch(
    groq`*[_type == "post" && "featured" in categories[]->slug.current] | order(_createdAt desc) [0..$limit]{ 
      ${SMALL_POST_QUERY},
       }`,
    { limit }
  );
  return results;
}

export async function getTotalNumberOfPosts(): Promise<number> {
  const count = await client.fetch(groq`count(*[_type == "post"])`);
  return count;
}

export async function getTotalNumberOfCategories(): Promise<number> {
  const count = await client.fetch(groq`count(*[_type == "category"])`);
  return count;
}

export async function getTotalNumberOfPostsInCategoryBySlug(
  categorySlug: string
): Promise<number> {
  const count = await client.fetch(
    groq`count(*[_type == "post" && $categorySlug in categories[]->slug.current])`,
    { categorySlug }
  );
  return count;
}

export async function getTotalNumberOfPostsInSearchQuery(
  searchString: string
): Promise<number> {
  const count = await client.fetch(
    groq`count(*[_type == "post" && (
      title match "*" + $searchString + "*" ||
      body match "*" + $searchString + "*" ||
      author->name match "*" + $searchString + "*" ||
      categories[]->title match "*" + $searchString + "*"
    )])`,
    { searchString }
  );
  return count;
}

export async function getCategoriesByLimit(
  limit: number,
  start: number = 0
): Promise<CategoryWithPostCount[]> {
  const results = await client.fetch(
    groq`*[_type == "category"] | order(_createdAt desc) [$start..$limit]{ 
      _id,
      _createdAt,
      title,
      description,
      "slug": slug.current,
      image,
      "postCount": count(*[_type == "post" && ^.slug.current in categories[]->slug.current])
      }`,
    { limit, start }
  );
  return results;
}

export async function getPostsByCategorySlugAndLimit(
  slug: string,
  limit: number,
  start: number = 0
): Promise<Post[]> {
  const results = await client.fetch(
    groq`*[_type == "post" && $slug in categories[]->slug.current ] | order(_createdAt desc) [$start..$limit]{ 
      ${SMALL_POST_QUERY},
       }`,
    { slug, limit, start }
  );
  return results;
}

export async function getAllPostsSlugs(): Promise<string[]> {
  const results = await client.fetch(groq`*[_type == "post"].slug.current`);
  return results;
}

export async function getAllAuthorsSlugs(): Promise<string[]> {
  const results = await client.fetch(groq`*[_type == "author"].slug.current`);
  return results;
}

export async function getAllCategoriesSlugs(): Promise<string[]> {
  const results = await client.fetch(groq`*[_type == "category"].slug.current`);
  return results;
}

export async function getCategoryDataBySlug(slug: string): Promise<Category> {
  const results = await client.fetch(
    groq`*[_type == "category" && slug.current == $slug][0]{
      title,
        _id,
        _updatedAt,
        image,
        description,
        "slug": slug.current
    }`,
    { slug }
  );
  return results;
}

export async function searchString(
  searchString: string,
  limit: number,
  start: number = 0
): Promise<Post[]> {
  const results = await client.fetch(
    groq`*[_type == "post" && (
      title match "*" + $searchString + "*" ||
      body match "*" + $searchString + "*" ||
      author->name match "*" + $searchString + "*" ||
      categories[]->title match "*" + $searchString + "*"
    )] | order(_createdAt desc) [$start..$limit]{ 
      ${SMALL_POST_QUERY},
       }`,
    { searchString, limit, start }
  );
  return results;
}

export async function getAuthorInformationAndPostsWithLimit(
  authorSlug: string,
  limit: number,
  start: number = 0
): Promise<AuthorAndPosts> {
  const results = await client.fetch(
    groq`*[_type == "author" && slug.current == $authorSlug ][0] {
      _id,
      _createdAt,
      name,
      bio,
      image,
      description,
      "slug": slug.current,
      "postCount": count(*[_type == "post" && author->slug.current == $authorSlug]),
      "posts": *[_type == "post" && author->slug.current == $authorSlug] | order(_createdAt desc) [$start..$limit] {
        ${SMALL_POST_QUERY}
      }
    }`,
    { authorSlug, limit, start }
  );
  return results;
}

export async function getAuthorPostsWithLimit(
  authorSlug: string,
  limit: number,
  start: number = 0
): Promise<Post[]> {
  const results = await client.fetch(
    groq`*[_type == "post" && author->slug.current == $authorSlug] | order(_createdAt desc) [$start..$limit] {
      ${SMALL_POST_QUERY}
    }`,
    { authorSlug, limit, start }
  );
  return results;
}

export async function getSiteMapURLSlugs(): Promise<{
  categories: string[];
  posts: string[];
  authors: string[];
}> {
  const categoriesData = client.fetch(
    groq`*[_type == "category"].slug.current`
  );
  const postsData = client.fetch(groq`*[_type == "post"].slug.current`);
  const authorsData = client.fetch(groq`*[_type == "author"].slug.current`);
  const [categories, posts, authors] = await Promise.all([
    categoriesData,
    postsData,
    authorsData,
  ]);
  return { categories, posts, authors };
}
