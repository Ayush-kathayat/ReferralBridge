import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//! importing routes

import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";

import SignUP from "./auth/signUp";
import Login from "./auth/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/signup" element={<SignUP />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
