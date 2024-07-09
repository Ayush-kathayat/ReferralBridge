import Header from "../components/header";
import "./landingPage.css";

import { useNavigate } from "react-router-dom";


import { AuthContext } from "../auth/authContext";
import { useContext } from "react";

const LandingPage = () => {

  const context = useContext(AuthContext);

  const { currentUser } = context;

  const navigate = useNavigate();


  const handleProtectedRoute = () => {

    if(!currentUser){
      navigate("/login");
    }
    else{
      navigate("/home");
    }

  }
    
  return (
    <>
      <Header />
      <div className="titles">
        <h1 className="hero-title">Welcome to Job Referral Platform.</h1>
        <h3 className="hero-subtitle">
          Find Job Opportunities and Services with Ease!
        </h3>

        <button onClick={handleProtectedRoute}className="home-cta btn"> Go to Home</button>
      </div>
    </>
  );
};

export default LandingPage;
