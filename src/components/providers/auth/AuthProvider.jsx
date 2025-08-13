import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  get current login user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);

      //! JWT create
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        fetch("http://localhost:4000/jwt", userInfo)
          .then((res) => res.json())
          .then((data) => {
            if (data.accessToken) {
              localStorage.setItem("accessToken", data.accessToken);
            }
          });
      } else {
        localStorage.removeItem("accessToken");
      }

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // update user
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //   log out a user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    loginUser,
    updateUser,
    user,
    loading,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
