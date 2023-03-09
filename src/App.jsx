import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Dashboard,
  EditCBT,
  EditProfile,
  ForgotPassword,
  Home,
  Login,
  NewCBT,
  Register,
  ResetPassword,
  Scores,
  WriteCBT,
} from "./pages/index";

import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:hash" element={<WriteCBT />} />
            <Route path="/get-started" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/scores/:hash" element={<Scores />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/forget-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:hash" element={<ResetPassword />} />
            <Route path="/new-cbt" element={<NewCBT />} />
            <Route path="/edit-cbt/:hash" element={<EditCBT />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
};

export default App;
