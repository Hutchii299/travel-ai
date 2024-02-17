import BackButton from "../../components/BackButton";
import { notFound } from "next/navigation";
import {
  getPostsByCategorySlugAndLimit,
  getTotalNumberOfPostsInCategoryBySlug,
  getCategoryDataBySlug,
  getAllCategoriesSlugs,
} from "@/sanity/lib/utils";

import RecentPosts from "../../components/RecentPosts";
import PaginatedPosts from "../../components/PaginatedPosts";
import { Metadata } from "next";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = await getAllCategoriesSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const category = await getCategoryDataBySlug(slug);
  if (!category) return { title: "Not Found" };

  return {
    title: `${category.title} Posts`,
    description: category.description,
    openGraph: {
      title: `${category.title} Posts | ${process.env.NEXT_PUBLIC_SITENAME}`,
      description: category.description,
      url: `${process.env.NEXT_PUBLIC_URL}/categories/${slug}`,
      siteName: `${process.env.NEXT_PUBLIC_SITENAME}`,
      images: [
        {
          url:
            urlForImage(category.image)
              .fit("clip")
              .width(1000)
              .height(750)
              .url() || "",
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} Posts | ${process.env.NEXT_PUBLIC_SITENAME}`,
      description: category.description,
      images: [
        {
          url:
            urlForImage(category.image)
              .fit("clip")
              .width(1000)
              .height(750)
              .url() || "",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

const CategoryPage = async ({ params }: Props) => {
  const { slug } = params;
  const postsData = getPostsByCategorySlugAndLimit(slug, 12);
  const totalPostsData = getTotalNumberOfPostsInCategoryBySlug(slug);

  const [posts, totalPosts] = await Promise.all([postsData, totalPostsData]);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      <BackButton />
      <h1 className="mt-8">Category: {slug}</h1>
      <PaginatedPosts
        posts={posts}
        postCount={totalPosts}
        type="category-posts"
        className="mb-16"
      />
      <RecentPosts limit={1} withoutSlug={slug} />
    </>
  );
};

export default CategoryPage;
