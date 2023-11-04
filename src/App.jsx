import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AuthProvider from "./components/AuthProvider";
import Routes from "./components/Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;
