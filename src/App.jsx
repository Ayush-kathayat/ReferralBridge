import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//! importing routes

import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";

import SignUP from "./auth/Signup/signUp";
import Login from "./auth/Login/login";

//! Auth provider
import { AuthProvider } from "./auth/authContext";

//! importing protected routes
import ProtectedRoute from "./utils/protectedRoutes";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUP />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
