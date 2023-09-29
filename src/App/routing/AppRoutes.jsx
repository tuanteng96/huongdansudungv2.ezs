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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to="/huong-dan" replace />} />
      <Route path="huong-dan" element={<GuidePage />}>
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
