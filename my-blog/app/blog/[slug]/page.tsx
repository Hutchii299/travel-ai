import { getPostWithSlug } from "@/sanity/lib/utils";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

const page = async ({ params }: Props) => {
  const { slug } = params;
  const post = await getPostWithSlug(slug);
  const { title, publishedAt, mainImage, body, imgAlt, categories } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{publishedAt}</p>
      <Image src={mainImage} alt={imgAlt} width={500} height={500} />
      {categories.map((category) => {
        return <p key={category._id}>{category.title}</p>;
      })}
    </div>
  );
};

export default page;
