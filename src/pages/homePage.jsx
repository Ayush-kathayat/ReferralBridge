import { useState } from "react";

import Header from "../components/header";
import Services from "../components/services";
import Referral from "../components/referral";

import "./homePage.css";

const HomePage = () => {
  // State to track which component to show
  const [componentToShow, setComponentToShow] = useState("referral");

  return (
    <>
      <Header />
      <div className="links-container">
        {/* Buttons to toggle between components */}
        <button className="btn" onClick={() => setComponentToShow("referral")}>
          Referral
        </button>
        <button className="btn" onClick={() => setComponentToShow("services")}>
          Services
        </button>
      </div>
      {/* Conditionally rendering components based on state */}

      <div className="component-wrapper">
        {componentToShow === "referral" && <Referral />}
        {componentToShow === "services" && <Services />}
      </div>
    </>
  );
};

export default HomePage;
