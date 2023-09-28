import { Outlet } from "react-router-dom";
import ProviderLayout from "./ProviderLayout";

function RootLayout() {
  return (
    <ProviderLayout>
      <Outlet />
    </ProviderLayout>
  );
}

export default RootLayout;
