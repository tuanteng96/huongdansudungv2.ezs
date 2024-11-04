import clsx from "clsx";
import { useIsFetching } from "react-query";
import { Outlet } from "react-router-dom";

function QuickPage() {
  const isFetchingQuicks = useIsFetching({
    queryKey: ["Quicks-List"],
  });
  const isFetchingDetail = useIsFetching({
    queryKey: ["DetailQuick"],
  });
  return (
    <>
      <div className="w-full h-full">
        <Outlet />
      </div>
      <div
        id="splash-screen"
        className={clsx(
          "kt-splash-screen",
          !isFetchingQuicks && !isFetchingDetail && "hidden"
        )}
      >
        <svg className="splash-spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx={25}
            cy={25}
            r={20}
            fill="none"
            strokeWidth={5}
          />
        </svg>
      </div>
    </>
  );
}

export default QuickPage;
