import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  excerpt: string;
  href: string;
  showReadMore?: boolean;
};

const PostTitleSection = ({
  title,
  excerpt,
  href,
  showReadMore = false,
}: Props) => {
  return (
    <div className="mt-6">
      <Link href={href}>
        <h3>{title}</h3>
      </Link>
      <p className="text-gray-400 dark:text-white/80 mt-4 w-full">
        {excerpt.length > 234 ? `${excerpt.slice(0, 234)}...` : excerpt}
      </p>
      {showReadMore && (
        <div className="mt-4">
          <Link className="text-blue-500 underline " href={href}>
            Read More
          </Link>
        </div>
      )}
    </div>
  );
};

export default PostTitleSection;
