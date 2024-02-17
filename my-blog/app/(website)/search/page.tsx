import RecentPosts from "../components/RecentPosts";
import { searchString } from "@/sanity/lib/utils";
import PaginatedPosts from "../components/PaginatedPosts";
import EmptyState from "../components/EmptyState";
import { Post } from "@/types/Post";
import { Metadata } from "next";

type Props = {
  searchParams: { [key: string]: string };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { s: query } = searchParams;
  let posts: Post[] = [];
  if (query) {
    posts = await searchString(query, 12);
  }

  return {
    title: `Search: ${query}`,
    description: `Search results for ${query} - ${process.env.NEXT_PUBLIC_SITENAME}`,
    openGraph: {
      title: `Search: ${query} | ${process.env.NEXT_PUBLIC_SITENAME}`,
      description: `Search results for ${query} - ${process.env.NEXT_PUBLIC_SITENAME}`,
      url: `${process.env.NEXT_PUBLIC_URL}/search?s=${query}`,
      siteName: `${process.env.NEXT_PUBLIC_SITENAME}`,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Search: ${query}`,
      description: `Search results for ${query} - ${process.env.NEXT_PUBLIC_SITENAME}`,
    },
  };
}

const SearchPage = async ({ searchParams }: Props) => {
  const { s: query } = searchParams;
  let posts: Post[] = [];
  if (query) {
    posts = await searchString(query, 12);
  }

  return (
    <>
      <h1>Search Results for: {query}</h1>
      {posts.length === 0 ? (
        <EmptyState />
      ) : (
        <PaginatedPosts
          posts={posts}
          postCount={posts.length}
          type="search-posts"
          slug={query}
          className="mb-16"
        />
      )}

      <RecentPosts limit={1} />
    </>
  );
};

export default SearchPage;
