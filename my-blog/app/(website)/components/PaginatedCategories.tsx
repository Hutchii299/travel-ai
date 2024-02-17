"use client";

import { getCategoriesByLimit } from "@/sanity/lib/utils";
import { CategoryWithPostCount } from "@/types/Category";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

type Props = {
  categories: CategoryWithPostCount[];
  categoryCount: number;
};

const PaginatedCategories = ({ categories, categoryCount }: Props) => {
  const [currentCategories, setCurrentCategories] =
    useState<CategoryWithPostCount[]>(categories);

  const getMoreCategories = async () => {
    if (currentCategories.length === categoryCount) return;
    const lim =
      currentCategories.length + 12 > categoryCount
        ? categoryCount
        : currentCategories.length + 12;
    const moreCategories = await getCategoriesByLimit(
      lim,
      currentCategories.length
    );
    setCurrentCategories([...currentCategories, ...moreCategories]);
  };

  return (
    <>
      <div className="space-y-8 mt-12 mb-16">
        {categories.map((category) => {
          return <CategoryCard category={category} key={category._id} />;
        })}
      </div>
      {currentCategories.length < categoryCount && (
        <div className="flex items-center justify-center mt-16">
          <button
            onClick={getMoreCategories}
            className=" py-3 px-4 leading-none font-light uppercase text-lg rounded-md bg-blue-600 text-white hover:bg-blue-500 shadow-md"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default PaginatedCategories;
