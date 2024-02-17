import { MetadataRoute } from "next";
import { getSiteMapURLSlugs } from "@/sanity/lib/utils";

const URL_NAME = process.env.NEXT_PUBLIC_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { categories, posts, authors } = await getSiteMapURLSlugs();
  const categoryRoutes = categories.map((slug) => {
    return { url: `${URL_NAME}/categories/${slug}`, lastModified: new Date() };
  });
  const postRoutes = posts.map((slug) => {
    return { url: `${URL_NAME}/blog/${slug}`, lastModified: new Date() };
  });
  const authorRoutes = authors.map((slug) => {
    return { url: `${URL_NAME}/author/${slug}`, lastModified: new Date() };
  });
  return [
    {
      url: `${URL_NAME}/`,
      lastModified: new Date(),
    },
    {
      url: `${URL_NAME}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${URL_NAME}/categories`,
      lastModified: new Date(),
    },
    {
      url: `${URL_NAME}/contact`,
      lastModified: new Date(),
    },
    ...categoryRoutes,
    ...postRoutes,
    ...authorRoutes,
  ];
}
