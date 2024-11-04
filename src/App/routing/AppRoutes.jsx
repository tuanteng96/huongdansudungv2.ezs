import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "../../_ezs/layout";
import GuidePage from "../pages/Guide";
import GuideLists from "../pages/Guide/pages/Lists";
import GuideDetail from "App/pages/Guide/pages/Detail";
import QuickPage from "App/pages/Quick";
import QuickLists from "App/pages/Quick/Lists";
import QuickDetail from "App/pages/Quick/Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="/huong-dan" replace />} />
      <Route path="quicks" element={<QuickPage />}>
        <Route index element={<Navigate to="danh-sach" replace />} />
        <Route path="danh-sach" element={<QuickLists />}></Route>
        <Route path="danh-sach/:slug" element={<QuickDetail />}></Route>
      </Route>
      <Route path="huong-dan" element={<RootLayout />}>
        <Route index element={<Navigate to="pos-quan-ly" replace />} />
        <Route path=":slug" element={<GuideLists />}></Route>
        <Route path=":cate/:slug" element={<GuideDetail />} />
      </Route>
    </Route>
  )
);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
