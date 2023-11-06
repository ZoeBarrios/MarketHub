import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AuthProvider from "./components/AuthProvider";
import Routes from "./components/Routes";
import PublicationProvider from "./components/PublicationProvider";
import CarritoProvider from "./components/CarritoProvider";

export const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthProvider>
        <PublicationProvider>
          <CarritoProvider>
            <QueryClientProvider client={queryClient}>
              <Routes />
            </QueryClientProvider>
          </CarritoProvider>
        </PublicationProvider>
      </AuthProvider>
    </>
  );
}

export default App;
