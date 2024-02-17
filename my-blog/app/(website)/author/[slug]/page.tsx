import {
  getAuthorInformationAndPostsWithLimit,
  getAllAuthorsSlugs,
} from "@/sanity/lib/utils";
import { urlForImage } from "@/sanity/lib/image";
import PaginatedPosts from "../../components/PaginatedPosts";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = await getAllAuthorsSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const authorAndPosts = await getAuthorInformationAndPostsWithLimit(slug, 12);
  if (!authorAndPosts) return { title: "Not Found" };

  return {
    title: `${authorAndPosts.name}`,
    description: authorAndPosts.description,
    openGraph: {
      title: `${authorAndPosts.name} Posts | ${process.env.NEXT_PUBLIC_SITENAME}`,
      description: authorAndPosts.description,
      url: `${process.env.NEXT_PUBLIC_URL}/author/${slug}`,
      siteName: `${process.env.NEXT_PUBLIC_SITENAME}`,
      images: [
        {
          url:
            urlForImage(authorAndPosts.image)
              .fit("clip")
              .width(1000)
              .height(750)
              .url() || "",
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${authorAndPosts.name} Posts | ${process.env.NEXT_PUBLIC_SITENAME}`,
      description: authorAndPosts.description,
      images: [
        {
          url:
            urlForImage(authorAndPosts.image)
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

const Author = async ({ params }: Props) => {
  const { slug } = params;
  const authorAndPosts = await getAuthorInformationAndPostsWithLimit(slug, 12);
  if (!authorAndPosts) notFound();

  return (
    <>
      <div className="flex flex-wrap justify-start gap-6 ">
        {authorAndPosts.image ? (
          <Image
            src={
              urlForImage(authorAndPosts.image)
                .fit("clip")
                .width(300)
                .height(300)
                .url() || ""
            }
            alt={`An image of the author; ${authorAndPosts.name}`}
            width={120}
            height={120}
            className="rounded-2xl shadow-md w-full w-16 h-full sm:w-[120px] sm:h-[120px]"
          />
        ) : (
          <div className=" w-16 h-full sm:w-[120px] sm:h-[120px] rounded-2xl shadow-md bg-gradient-to-br from-blue-400 to-purple-500"></div>
        )}
        <div>
          <h1 className="break-words text-2xl sm:text-4xl">
            {authorAndPosts.name}
          </h1>
          <p className="text-gray-600 dark:text-white/80">{`Total posts: ${authorAndPosts.postCount}`}</p>
        </div>
      </div>
      <div className="mt-8 pb-8 border-b">
        <PortableText value={authorAndPosts.bio} />
      </div>

      <div className="mt-16">
        <h2 className="text-center mb-6">Author&apos;s Posts</h2>
        <PaginatedPosts
          type="author-posts"
          posts={authorAndPosts.posts}
          postCount={authorAndPosts.postCount}
          slug={slug}
        />
      </div>
    </>
  );
};

export default Author;
