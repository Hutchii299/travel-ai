import { PortableTextBlock } from "sanity";

export type Author = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  imgAlt: string;
  bio: PortableTextBlock[];
};
