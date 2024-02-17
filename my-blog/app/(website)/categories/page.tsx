import {
  getCategoriesByLimit,
  getTotalNumberOfCategories,
} from "@/sanity/lib/utils";
import RecentPosts from "../components/RecentPosts";
import PaginatedCategories from "../components/PaginatedCategories";
import EmptyState from "../components/EmptyState";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Categories`,
  description: `Write description here`,
  openGraph: {
    title: `categories | ${process.env.NEXT_PUBLIC_SITENAME}`,
    description: `Write description here`,
    url: `${process.env.NEXT_PUBLIC_URL}/categories`,
    siteName: `${process.env.NEXT_PUBLIC_SITENAME}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `categories | ${process.env.NEXT_PUBLIC_SITENAME}`,
    description: `Write description here`,
  },
};

const CategoriesPage = async () => {
  const categoriesData = getCategoriesByLimit(12);
  const categoryCountData = getTotalNumberOfCategories();

  const [categories, categoryCount] = await Promise.all([
    categoriesData,
    categoryCountData,
  ]);
  return (
    <>
      <h1 className="mt-8">Categories:</h1>
      {categories.length === 0 ? (
        <EmptyState />
      ) : (
        <PaginatedCategories
          categories={categories}
          categoryCount={categoryCount}
        />
      )}
      <RecentPosts limit={1} />
    </>
  );
};

export default CategoriesPage;
