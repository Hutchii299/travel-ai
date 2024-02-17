import { SanityImage } from "./SanityImage";
export type Category = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  description: string;
  image: SanityImage;
};

export interface CategoryWithPostCount extends Category {
  postCount: number;
}
