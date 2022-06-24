import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
};

export default App;
