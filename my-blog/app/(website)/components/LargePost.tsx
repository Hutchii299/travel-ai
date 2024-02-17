import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import PostMeta from "./PostMeta";
import Link from "next/link";
import Categories from "./Categories";
import PostTitleSection from "./PostTitleSection";
import { Post } from "@/types/Post";

type Props = {
  post: Post;
};

const LargePost = async ({ post }: Props) => {
  return (
    <article>
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={urlForImage(post.featuredImg)
            .width(Math.round(1024 * 1.2)) //20% quality buffer
            .height(Math.round(461 * 1.2))
            .fit("clip")
            .url()}
          alt={post.imgAlt}
          width={1024} //AR 5:2.25
          height={461}
          priority
          className="w-full rounded-2xl drop-shadow "
        />
      </Link>
      <div className="text-base mt-6">
        <Categories categories={post.categories} />
        <PostMeta
          author={post.author}
          readtime={post.readtime}
          ISO8601Date={post.publishedAt}
        />
      </div>

      <PostTitleSection
        title={post.title}
        excerpt={post.excerpt}
        href={`/blog/${post.slug}`}
        showReadMore={true}
      />
    </article>
  );
};

export default LargePost;
