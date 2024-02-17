"use client";
import Skeleton from "./Skeleton";

const CategoryLoader = () => {
  return (
    <div>
      <div className="flex w-full gap-x-4 w-full">
        <div>
          <Skeleton className="rounded-xl h-14 w-14 sm:h-[150px] sm:w-[150px]" />
        </div>

        <div className="w-full">
          <Skeleton height={30} width={150} />
          <Skeleton height={24} width={200} className="mt-2" />
          <Skeleton count={2} className="hidden sm:block mt-2" />
        </div>
      </div>
    </div>
  );
};

export default CategoryLoader;
