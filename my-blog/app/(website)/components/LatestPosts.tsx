import { Post } from "@/types/Post";
import LargePost from "./LargePost";
import SmallPost from "./SmallPost";
import EmptyState from "./EmptyState";
import React from "react";

type Props = {
  latestPosts: Post[];
};

const LatestPosts = ({ latestPosts }: Props) => {
  return (
    <>
      <h2 className="mb-6">Latest Posts</h2>
      {latestPosts.length > 0 && <LargePost post={latestPosts[0]} />}
      {latestPosts.length > 0 ? (
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {latestPosts
            .filter((_, i) => i > 0)
            .map((post) => {
              return <SmallPost key={post.slug} post={post} />;
            })}
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default LatestPosts;
