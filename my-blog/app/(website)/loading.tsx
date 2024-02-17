import PostLoader from "./components/PostLoader";
import Skeleton from "./components/Skeleton";

const loading = () => {
  return (
    <div className="pb-16 border-b">
      <Skeleton height={24} width={100} className="mb-6" />
      <PostLoader type="large" />
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <PostLoader type="small" />
        <PostLoader type="small" />
      </div>

      <div className="mt-16">
        <Skeleton height={24} width={100} className="mb-6" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <PostLoader type="small" />

          <PostLoader type="small" />
        </div>
      </div>
    </div>
  );
};

export default loading;
