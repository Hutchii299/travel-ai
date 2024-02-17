import {
  getRecentPostsByLimit,
  getRecentFeaturedPostsByLimit,
  getSiteMapURLSlugs,
} from "@/sanity/lib/utils";
import LatestPosts from "./components/LatestPosts";
import FeaturedPosts from "./components/FeaturedPosts";
import Link from "next/link";

export default async function Home() {
  const latestPostsData = getRecentPostsByLimit(3);
  const featuredPostsData = getRecentFeaturedPostsByLimit(5);

  const [latestPosts, featuredPosts] = await Promise.all([
    latestPostsData,
    featuredPostsData,
  ]);

  return (
    <>
      <section id="latest-posts" className="border-b pb-16">
        <LatestPosts latestPosts={latestPosts} />
      </section>

      <section id="trending-topics" className="mt-16">
        <FeaturedPosts featuredPosts={featuredPosts} />
      </section>

      <div className=" flex items-center justify-center w-full pt-16">
        <Link
          className=" py-3 px-4 leading-none font-light uppercase text-lg rounded-md bg-blue-600 text-white hover:bg-blue-500"
          href="/blog"
        >
          Show More
        </Link>
      </div>
    </>
  );
}
