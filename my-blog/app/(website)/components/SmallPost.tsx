import { Post } from "@/types/Post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Categories from "./Categories";
import PostMeta from "./PostMeta";
import PostTitleSection from "./PostTitleSection";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  post: Post;
};

const SmallPost = ({ post }: Props) => {
  return (
    <article>
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={urlForImage(post.featuredImg)
            .height(Math.round(325 * 1.2)) //20% quality buffer
            .width(Math.round(488 * 1.2))
            .fit("clip")
            .url()}
          alt={post.imgAlt}
          width={488} //AR 3:2
          height={325}
          placeholder="blur"
          blurDataURL={urlForImage(post.featuredImg)
            .height(5)
            .width(5)
            .fit("max")
            .url()}
          className="w-full rounded-xl drop-shadow"
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
      />
    </article>
  );
};

export default SmallPost;
