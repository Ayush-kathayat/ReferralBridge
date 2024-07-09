import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <>
      <div className="wrapper">
        <div className="nav">
          <div className="logo-title">
            <Link to="/">
              <h1 className="app-name">ReferralBridge.</h1>
            </Link>
          </div>

          <div className="nav-cta">
            <Link to="/login" className="nav-btn log-btn">
              <button className="btn-log">Login</button>
            </Link>
            <Link to="/signup" className="nav-btn sign-btn">
              <button className="btn-sign">Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
