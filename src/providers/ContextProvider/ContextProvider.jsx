import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import {
    auth,
    githubProvider,
    googleProvider,
  } from "../../firebase/firebase.config";
  import PropTypes from "prop-types";
  
  export const UserContext = createContext(null);
  
  const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
    };
  
    const logInWithGithub = () => {
      return signInWithPopup(auth, githubProvider);
    };
  
    const logOutUser = () => {
      setLoading(false);
      return signOut(auth);
    };
  
    const updateUserProfile = (userName, imgUrl) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: imgUrl,
      });
    };
  
    // Truck the current user status:
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unSubscribe();
    }, []);
  
  
    const userInfo = {
      createUser,
      user,
      logOutUser,
      loginUser,
      setLoading,
      loading,
      updateUserProfile,
      logInWithGoogle,
      logInWithGithub,
    };
  
    return (
      <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    );
  };
  ContextProvider.propTypes = {
    children: PropTypes.node,
  };
  
  export default ContextProvider;