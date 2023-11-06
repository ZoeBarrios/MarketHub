import { Switch, Route } from "wouter";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile";
import { ProductPage } from "../pages/ProductPage";
import { useContext } from "react";
import AuthContext from "../context/authContext";
import NotFound from "../pages/NotFound";

function Routes() {
  const { state } = useContext(AuthContext);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      {state.isAuthenticated && <Route path="/profile" component={Profile} />}
      <Route path="/publication/:id" component={ProductPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
