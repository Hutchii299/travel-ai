import Skeleton from "../../components/Skeleton";
import PostLoader from "../../components/PostLoader";

const loading = () => {
  return (
    <>
      <div className="flex flex-wrap justify-start gap-6 ">
        <Skeleton className="rounded-2xl w-full w-16 h-full sm:w-[120px] sm:h-[120px]" />
        <div className="">
          <Skeleton className="h-[32px] sm:h-[40px] w-[200px] mb-2" />
          <Skeleton className="h-[24px]  w-[150px]" />
        </div>
      </div>
      <div className="mt-8">
        <Skeleton count={3} className="h-[16px] w-full mb-2" />
      </div>

      <div className="mt-16">
        <Skeleton className="h-[24px] w-[100px]" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <PostLoader type="small" />
          <PostLoader type="small" />
          <PostLoader type="small" />
          <PostLoader type="small" />
        </div>
      </div>
    </>
  );
};

export default loading;
