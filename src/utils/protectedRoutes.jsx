import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth, db } from "../auth/firebase";
import { getDoc, doc } from "firebase/firestore";

//! importing loader
import { LineWave } from "react-loader-spinner";

const ProtectedRoute = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const userRef = doc(db, "Users", user.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setCurrentUser(userSnap.data());
          } else {
            console.log("User not found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [location]);

  if (loading) {
    return (
      <LineWave
        visible={true}
        height="200" // Increased size
        width="200" // Increased size
        color="#4fa94d"
        ariaLabel="line-wave-loading"
        wrapperStyle={{
          display: 'flex', // Use flexbox
          justifyContent: 'center', // Center horizontally
          alignItems: 'center', // Center vertically
          height: '100vh', // Full viewport height
        }}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
