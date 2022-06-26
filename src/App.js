import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" exact element={Login} />
              <Route path="/login" element={Login} />
              <Route path="/signup" element={Signup} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </>
  );
};

export default App;
