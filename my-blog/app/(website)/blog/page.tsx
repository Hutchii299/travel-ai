import {
  getRecentPostsByLimit,
  getTotalNumberOfPosts,
} from "@/sanity/lib/utils";
import EmptyState from "../components/EmptyState";
import PaginatedPosts from "../components/PaginatedPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `The Blog`,
  description: `Write description here`,
  openGraph: {
    title: `The Blog | ${process.env.NEXT_PUBLIC_SITENAME}`,
    description: `Write description here`,
    url: `${process.env.NEXT_PUBLIC_URL}/blog`,
    siteName: `${process.env.NEXT_PUBLIC_SITENAME}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `The Blog | ${process.env.NEXT_PUBLIC_SITENAME}`,
    description: `Write description here`,
  },
};

const BlogPage = async () => {
  const postsData = getRecentPostsByLimit(11);
  const totalPostsData = getTotalNumberOfPosts();

  const [posts, totalPosts] = await Promise.all([postsData, totalPostsData]);

  return (
    <>
      <h1 className="mt-8">The Blog:</h1>
      {posts.length === 0 ? (
        <EmptyState />
      ) : (
        <PaginatedPosts posts={posts} postCount={totalPosts} type="all-posts" />
      )}
    </>
  );
};

export default BlogPage;
