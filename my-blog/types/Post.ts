import { PortableTextBlock } from "sanity";
import { Author } from "./Author";
import { Category } from "./Category";
import type { Image } from "sanity";

export type Post = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  author: Author;
  publishedAt: string;
  readtime: number;
  categories: Category[];
  featuredImg: Image;
  imgAlt: string;
  excerpt: string;
  body: PortableTextBlock[];
};
