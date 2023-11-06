import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AuthProvider from "./components/AuthProvider";
import Routes from "./components/Routes";
import PublicationProvider from "./components/PublicationProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthProvider>
        <PublicationProvider>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </PublicationProvider>
      </AuthProvider>
    </>
  );
}

export default App;
