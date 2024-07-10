// AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//! toastify imports
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//! firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const notifySuccess = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const notifyError = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  //! SIGNUP
  const signup = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.username, data.password);
      const user = auth.currentUser;
      console.log(user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: data.name,
        });
      }
      notifySuccess("Registration Successfull");

      // Delay the navigation by 2.5 seconds to allow the toast to be displayed
      setTimeout(() => {
        navigate("/login");
      }, 1500);
      console.log("User created successfully");
    } catch (error) {
      notifyError("Registration Failed");
      console.log(error.message);
    }

    console.log(data.username);
    console.log(data.password);
  };

  //! LOGIN
  const login = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.username, data.password);
      console.log("User logged in successfully");
      notifySuccess("Login Successfull");
      // Delay the navigation by 2.5 seconds to allow the toast to be displayed
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (error) {
      notifyError("Login Failed");
      console.log(error);
    }
  };

  //! Fetching Current user details

  const [currentUser, setCurrentUser] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setCurrentUser(userSnap.data());
        } else {
          console.log("User not found");
        }
      }
    });

    return () => unsubscribe();
  }, [location.pathname]);

  //! Logging out the Current USER

  const logout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
      notifySuccess("User logged out Successfully");
      console.log(" User logged out Successfully");
      // Delay the navigation by 2.5 seconds to allow the toast to be displayed
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
