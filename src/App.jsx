import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//! importing routes

import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";

import SignUP from "./auth/signUp";
import Login from "./auth/login";

//! Auth provider
import { AuthProvider } from "./auth/authContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/signup" element={<SignUP />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
