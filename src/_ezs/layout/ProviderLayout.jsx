import { useIsFetching } from "react-query";
import { SidebarPage } from "../components";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    0: "#f26452",
  },
  barThickness: 1.5,
  shadowBlur: 5,
});

function ProviderLayout({ children }) {
  const isFetching = useIsFetching();

  return (
    <>
      <div className="w-full h-full flex">
        <SidebarPage />
        <div className="flex-1">
          <div className="h-[62px] border-b"></div>
          <div className="h-[calc(100%-62px)]">{children}</div>
        </div>
      </div>
      {isFetching > 0 && <TopBarProgress />}
    </>
  );
}

export default ProviderLayout;
