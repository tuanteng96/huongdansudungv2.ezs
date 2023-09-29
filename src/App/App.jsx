import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routing/AppRoutes";

function App() {
  return (
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  );
}

export default App;
