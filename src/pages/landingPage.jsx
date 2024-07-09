import Header from "../components/header";
import "./landingPage.css";

const landingPage = () => {
  return (
    <>
      <Header />
      <div className="titles">
        <h1 className="hero-title">Welcome to Job Referral Platform.</h1>
        <h3 className="hero-subtitle">
          Find Job Opportunities and Services with Ease!
        </h3>
      </div>
    </>
  );
};

export default landingPage;
