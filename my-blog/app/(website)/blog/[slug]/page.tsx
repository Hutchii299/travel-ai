import { getPostWithSlug, getAllPostsSlugs } from "@/sanity/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SanityImage } from "@/types/SanityImage";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import PostMeta from "../../components/PostMeta";
import BackButton from "../../components/BackButton";
import { urlForImage } from "@/sanity/lib/image";
import Categories from "../../components/Categories";
import RecentPosts from "../../components/RecentPosts";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = await getAllPostsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostWithSlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title}`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${process.env.NEXT_PUBLIC_SITENAME}`,
      description: post.excerpt,
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`,
      siteName: `${process.env.NEXT_PUBLIC_SITENAME}`,
      images: [
        {
          url:
            urlForImage(post.featuredImg)
              .fit("clip")
              .width(1000)
              .height(750)
              .url() || "",
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${process.env.NEXT_PUBLIC_SITENAME}`,
      description: post.excerpt,
      images: [
        {
          url:
            urlForImage(post.featuredImg)
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

const portableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      return (
        <Image
          src={urlForImage(value).url()}
          alt={value.alt}
          width={1024}
          height={1024 * (2 / 3)}
        />
      );
    },
  },
};

const PostPage = async ({ params }: Props) => {
  const { slug } = params;
  const post = await getPostWithSlug(slug);

  if (!post) {
    notFound();
  }
  return (
    <>
      <BackButton />
      <h1 className="mt-8">{post.title}</h1>
      <PostMeta
        author={post.author}
        readtime={post.readtime}
        ISO8601Date={post.publishedAt}
        showAuthorImage={true}
      />

      <Image
        src={urlForImage(post.featuredImg)
          .width(1024)
          .height(461)
          .fit("clip")
          .url()}
        alt={post.imgAlt}
        width={1024} //AR 5:2.25
        height={461}
        priority={true}
        className="w-full rounded-2xl mt-12"
      />
      <Categories categories={post.categories} className="mt-8" />
      <p className="mt-4 mb-16 w-full text-gray-500 dark:text-white/80">
        <em>{post.excerpt}</em>
      </p>

      <div className="pb-16">
        {post.body.map((block: PortableTextBlock) => {
          return (
            <PortableText
              key={block._key}
              value={block}
              components={portableTextComponents}
            />
          );
        })}
      </div>

      <RecentPosts limit={1} withoutSlug={slug} />
    </>
  );
};

export default PostPage;
