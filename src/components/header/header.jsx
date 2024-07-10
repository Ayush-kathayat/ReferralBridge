import { useContext } from "react";
import { Link } from "react-router-dom";

//! importing Auth Context
import { AuthContext } from "../../auth/authContext";

import "./header.css";

const Header = () => {
  const context = useContext(AuthContext);

  const { currentUser, logout } = context;

  const handleLogout = async () => {
    logout();
  };

  return (
    <>
      <div className="wrapper">
        <div className="nav">
          <div className="logo-title">
            <Link to="/">
              <h1 className="app-name">ReferralBridge.</h1>
            </Link>
          </div>

          {currentUser ? (
            <div className="username-wrapper">
              <span>
                {" "}
                <h1 className="username"> Welcome, {currentUser.username}</h1>
              </span>
              <button className="btn-log out" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="nav-cta">
              <Link to="/login" className="nav-btn log-btn">
                <button className="btn-log">Login</button>
              </Link>
              <Link to="/signup" className="nav-btn sign-btn">
                <button className="btn-sign">Signup</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
