import Link from "next/link";
import React from "react";
import { CategoryWithPostCount } from "@/types/Category";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  category: CategoryWithPostCount;
};

const CategoryCard = ({ category }: Props) => {
  return (
    <div>
      <div className="flex w-full gap-x-4">
        <Link href={`/categories/${category.slug}`}>
          <Image
            src={urlForImage(category.image)
              .fit("clip")
              .width(300)
              .height(300)
              .url()}
            alt={category.image.alt}
            width={150}
            height={150}
            className=" shadow-md w-[60px] h-[60px] sm:w-full sm:h-full rounded-xl"
          />
        </Link>
        <div>
          <Link href={`/categories/${category.slug}`}>
            <h2 className="hover:underline underline-offset-4 decoration-wavy">
              {category.title}
            </h2>
          </Link>
          <p className="text-gray-500 dark:text-white/70">{`${category.postCount} posts availiable`}</p>
          <p className="text-gray-500 dark:text-white/70 hidden sm:block">
            {category.description}
          </p>
        </div>
      </div>
      <p className=" mt-4 text-gray-500 dark:text-white/70 sm:hidden">
        {category.description}
      </p>
    </div>
  );
};

export default CategoryCard;
