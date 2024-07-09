import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//! importing routes

import LandingPage from "./pages/landingPage";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
