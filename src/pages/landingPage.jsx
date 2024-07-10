import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import "./landingPage.css";

import SearchComponent from "../components/search/Search";

import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/home");
  };

  return (
    <>
      <Header />
      <div className="landing-wrapper">
        <div className="landing-up">
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
        </div>
        <div className="landing-down">
          <SearchComponent
            placeholder={"Search by Companies or Industry...."}
            dataType={"static"}
          />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  );
};

export default LandingPage;
