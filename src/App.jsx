import "./App.css";
import AuthProvider from "./components/AuthProvider";
import Routes from "./components/Routes";
function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
