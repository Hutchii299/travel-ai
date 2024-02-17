import { PortableTextBlock } from "sanity";
import { Image } from "sanity";
import { Post } from "./Post";

export type Author = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: Image;
  bio: PortableTextBlock[];
};

export interface AuthorAndPosts extends Author {
  posts: Post[];
  postCount: number;
  description: string;
}
