import { convertISO8601ToFormattedDate } from "@/lib/utils";
import { Author } from "@/types/Author";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  readtime: number;
  author: Author;
  ISO8601Date: string;
  showAuthorImage?: boolean;
};

const PostMeta = ({
  readtime,
  author,
  ISO8601Date,
  showAuthorImage = false,
}: Props) => {
  return (
    <div className="mt-4 flex items-center justify-start gap-x-4">
      {showAuthorImage &&
        (author?.image ? (
          <Image
            src={urlForImage(author.image)
              .fit("clip")
              .width(150)
              .height(150)
              .url()}
            alt={`Image of the author ${author.name}`}
            width={50}
            height={50}
            className="rounded-full shadow-md"
          />
        ) : (
          <div className="w-[50px] h-[50px] rounded-full shadow-md bg-gradient-to-br from-blue-400 to-purple-500"></div>
        ))}
      <div className="text-gray-400 dark:text-white/70">
        <div className="flex ">
          <Link
            className="pr-2 border-r border-gray-400 hover:underline underline-offset-4 decoration-wavy"
            href={`/author/${author.slug}`}
          >
            {author.name}
          </Link>
          <p className="ml-2">{readtime} min read</p>
        </div>
        <p className=" mt-2">{convertISO8601ToFormattedDate(ISO8601Date)}</p>
      </div>
    </div>
  );
};

export default PostMeta;
