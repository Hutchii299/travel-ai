import {
  getRecentPostsByLimitAndNotSlug,
  getRecentPostsByLimit,
} from "@/sanity/lib/utils";
import SmallPost from "./SmallPost";

type Props = {
  limit: number;
  withoutSlug?: string;
};

const RecentPosts = async ({ limit, withoutSlug }: Props) => {
  let posts = [];
  if (withoutSlug) {
    posts = await getRecentPostsByLimitAndNotSlug(limit, withoutSlug);
  } else {
    posts = await getRecentPostsByLimit(limit);
  }
  return (
    <section id="recent-posts" className="pt-16 border-t">
      <h2 className="mb-8 text-center">Recent Posts</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post) => {
          return <SmallPost key={post._id} post={post} />;
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
