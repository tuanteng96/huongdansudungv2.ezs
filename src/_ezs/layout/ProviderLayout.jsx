import { useIsFetching } from "react-query";
import { HeaderPage, SidebarPage } from "../components";
import TopBarProgress from "react-topbar-progress-indicator";
import { createContext, useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { m } from "framer-motion";
import { useLocation } from "react-router-dom";

TopBarProgress.config({
  barColors: {
    0: "#f26452",
  },
  barThickness: 1.5,
  shadowBlur: 5,
});

const LayoutContext = createContext();

const useLayout = () => {
  return useContext(LayoutContext);
};

function ProviderLayout({ children }) {
  let { pathname } = useLocation();
  const isFetching = useIsFetching({
    queryKey: ["Taxonomys"],
  });
  const [visibleSidebar, setVisibleSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768 && visibleSidebar) setVisibleSidebar(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  let openSidebar = () => setVisibleSidebar(!visibleSidebar);

  return (
    <LayoutContext.Provider value={{ visibleSidebar, openSidebar }}>
      <div
        className={clsx(
          "w-full h-full flex flex-col group",
          visibleSidebar && "is-sidebar"
        )}
      >
        <HeaderPage />
        <div className="h-[calc(100%-62px)] flex overflow-hidden relative">
          <SidebarPage />
          <div className="flex-1 h-full md:!translate-x-0 group-[.is-sidebar]:translate-x-[200px] transition-transform">
            {children}
          </div>
          {visibleSidebar && (
            <m.div
              className="absolute inset-0 bg-black/[.2] z-[10] md:!hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={openSidebar}
            ></m.div>
          )}
        </div>
      </div>
      {isFetching > 0 && <TopBarProgress />}
    </LayoutContext.Provider>
  );
}

export { ProviderLayout, useLayout };
