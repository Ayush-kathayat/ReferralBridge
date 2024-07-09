import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Assuming you have these imports based on your usage
import { auth, db } from "../auth/firebase"; // Update the path as per your project structure
import { doc, getDoc } from "firebase/firestore";

import "./header.css";

const Header = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUser(userSnap.data());
          console.log(userSnap.data());
        } else {
          console.log("User not found");
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      console.log(" User logged out Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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

          {user ? (
            <div className="username-wrapper">
              <span>
                {" "}
                <h1 className="username"> Welcome, {user.username}</h1>
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
