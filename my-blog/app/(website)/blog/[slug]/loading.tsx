import PostLoader from "../../components/PostLoader";
import Skeleton from "../../components/Skeleton";

const loading = () => {
  return (
    <>
      <div className="pb-16 border-b">
        <Skeleton height={72} width={200} className="mt-8" />
        <div className="flex mt-6 gap-4">
          <Skeleton height={50} width={50} />
          <div className="mb-8">
            <Skeleton height={24} width={230} />
            <Skeleton height={24} width={100} className="mt-2" />
          </div>
        </div>
        <PostLoader type="large" />
        <div className="mt-4">
          <Skeleton count={10} className="mt-1" />
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
