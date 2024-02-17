import { Category } from "@/types/Category";
import React, { HTMLAttributes } from "react";
import PillLink from "./PillLink";

interface Props extends HTMLAttributes<HTMLDivElement> {
  categories: Category[];
}

const Categories = ({ categories, ...props }: Props) => {
  props.className = "flex flex-wrap gap-2 " + props.className;
  return (
    <div {...props}>
      {categories.map((category) => {
        return (
          <PillLink
            key={category._id}
            label={category.title}
            href={`/categories/${category.slug}`}
          />
        );
      })}
    </div>
  );
};

export default Categories;
