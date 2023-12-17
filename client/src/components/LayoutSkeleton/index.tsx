import Skeleton from "react-loading-skeleton";

export function LayoutSkeleton() {
  return (
    <div className="max-w-[37.6rem] w-full ">
      <div>
        <Skeleton height={"17.8rem"} />
      </div>
      <div className="flex items-center justify-between mt-4 text-gra">
        <p>
          <h4>
            <Skeleton width={100} />
          </h4>
          <span>
            <Skeleton width={50} />
          </span>
        </p>
        <span>
          <Skeleton width={70} />
        </span>
      </div>
    </div>
  );
}
