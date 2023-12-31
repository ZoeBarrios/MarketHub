import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AuthProvider from "./components/Providers/AuthProvider";
import Routes from "./components/Routes";
import PublicationProvider from "./components/Providers/PublicationProvider";
import CarritoProvider from "./components/Providers/CarritoProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthProvider>
        <PublicationProvider>
          <CarritoProvider>
            <QueryClientProvider client={queryClient}>
              <ToastContainer />
              <Routes />
            </QueryClientProvider>
          </CarritoProvider>
        </PublicationProvider>
      </AuthProvider>
    </>
  );
}

export default App;
