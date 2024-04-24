import React from "react";
import { Skeleton } from "../ui/skeleton";

const DevProfileLoader = () => {
  return (
    <>
      {Array.from({ length: 35 }).map((_, i) => (
        <div key={i} className="flex flex-col justify-center items-center gap-3">
          <Skeleton className={"w-14 h-14 rounded-full "} />
          <Skeleton className={"w-28 h-4 rounded-xl "} />
        </div>
      ))}
    </>
  );
};

export default DevProfileLoader;
