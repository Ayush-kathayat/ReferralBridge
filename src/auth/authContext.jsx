// AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//! firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const navigate = useNavigate();


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
      navigate("/login");
      console.log("User created successfully");
    } catch (error) {
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
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  //! Fetching Current user details

  const [currentUser, setCurrentUser] = useState(null);

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
  }, []); 


  //! Logging out the Current USER

  const logout = async () => {

    try {
      await auth.signOut();
      setCurrentUser(null);
      console.log(" User logged out Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <AuthContext.Provider value={{ signup , login, logout, currentUser }}>{children}</AuthContext.Provider>
  );
};
