import { Post } from "@/types/Post";
import React from "react";
import SmallPost from "./SmallPost";
import EmptyState from "./EmptyState";

type Props = {
  featuredPosts: Post[];
};

const FeaturedPosts = ({ featuredPosts }: Props) => {
  return (
    <>
      <h2>Featured Posts</h2>
      {featuredPosts.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredPosts.map((post) => {
            return <SmallPost key={post.slug} post={post} />;
          })}
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default FeaturedPosts;
