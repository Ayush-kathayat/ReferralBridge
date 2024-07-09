import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/home");
  };

  return (
    <>
      <Header />
      <div className="titles">
        <h1 className="hero-title">Welcome to Job Referral Platform.</h1>
        <h3 className="hero-subtitle">
          Find Job Opportunities and Services with Ease!
        </h3>

        <button onClick={handleRoute} className="home-cta btn">
          {" "}
          Go to Home
        </button>
      </div>
    </>
  );
};

export default LandingPage;
