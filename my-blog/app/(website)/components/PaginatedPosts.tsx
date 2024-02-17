"use client";
import { Post } from "@/types/Post";
import { HTMLAttributes, useState } from "react";
import SmallPost from "./SmallPost";

import {
  getRecentPostsByLimit,
  getPostsByCategorySlugAndLimit,
  searchString,
  getAuthorPostsWithLimit,
} from "@/sanity/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  posts: Post[];
  postCount: number;
  type: "all-posts" | "category-posts" | "search-posts" | "author-posts";
  slug?: string; //slug for categories or search string for the search function
}

const PaginatedPosts = ({ posts, postCount, type, slug, ...props }: Props) => {
  const [currentPosts, setCurrentPosts] = useState<Post[]>(posts);
  props.className =
    "mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 " + props.className;

  const getMorePosts = async () => {
    if (currentPosts.length === postCount) return;
    const lim =
      currentPosts.length + 12 > postCount
        ? postCount
        : currentPosts.length + 12;
    let morePosts: Post[] = [];
    if (type === "all-posts") {
      posts = await getRecentPostsByLimit(lim, currentPosts.length);
    } else if (type === "category-posts") {
      if (!slug) return;
      posts = await getPostsByCategorySlugAndLimit(
        slug,
        lim,
        currentPosts.length
      );
    } else if (type === "search-posts") {
      if (!slug) return;
      posts = await searchString(slug, lim, currentPosts.length);
    } else if (type === "author-posts") {
      if (!slug) return;
      posts = await getAuthorPostsWithLimit(slug, lim, currentPosts.length);
    }
    setCurrentPosts([...currentPosts, ...morePosts]);
  };

  return (
    <>
      <div {...props}>
        {posts.map((post) => {
          return <SmallPost key={post.slug} post={post} />;
        })}
      </div>
      {currentPosts.length < postCount && (
        <div className="flex items-center justify-center mt-16">
          <button
            onClick={getMorePosts}
            className=" py-3 px-4 leading-none font-light uppercase text-lg rounded-md bg-blue-600 text-white hover:bg-blue-500"
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default PaginatedPosts;
