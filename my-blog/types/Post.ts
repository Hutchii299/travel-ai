import { PortableTextBlock } from "sanity";
import { Author } from "./Author";
import { Category } from "./Category";

export type Post = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  author: Author;
  publishedAt: string;
  categories: Category[];
  mainImage: string;
  imgAlt: string;
  excerpt: string;
  body: PortableTextBlock[];
};
