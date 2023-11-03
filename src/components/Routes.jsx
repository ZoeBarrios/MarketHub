import { Route } from "wouter";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Profile from "../pages/Profile"


function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/profile" component={Profile} />
    
   
      {/*<Route exact path="/publication/:id" component={Publication} />
      <Route exact path="/profile/:id" component={Profile} />*/}
    </>
  );
}

export default Routes;
