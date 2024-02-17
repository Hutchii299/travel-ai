import PostLoader from "../components/PostLoader";
import Skeleton from "../components/Skeleton";

const loading = () => {
  return (
    <>
      <div className="pb-16 border-b">
        <Skeleton height={72} width={200} className="mt-8" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <PostLoader type="small" />
          <PostLoader type="small" />
          <PostLoader type="small" />
          <PostLoader type="small" />
        </div>
      </div>
      <div className="mt-16">
        <div className="flex justify-between items-center text-center">
          <Skeleton height={24} width={100} className="mb-6 text-center" />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <PostLoader type="small" />

          <PostLoader type="small" />
        </div>
      </div>
    </>
  );
};

export default loading;
