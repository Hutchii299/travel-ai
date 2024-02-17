import Skeleton from "./Skeleton";

const PostLoader = ({ type }: { type: "small" | "large" }) => {
  return (
    <div>
      <Skeleton
        height={type === "small" ? 302 : 432}
        className={`${type === "small" ? "rounded-xl" : "rounded-2xl"}`}
      />
      <Skeleton width={105} height={33} className="mt-4" />
      <Skeleton width={231} height={24} className="mt-4" />
      <Skeleton width={100} height={24} className="mt-2" />
      <Skeleton height={24} width={250} className="mt-6" />
      <div className="mt-4">
        <Skeleton count={3} className="mt-1" />
      </div>
    </div>
  );
};

export default PostLoader;
