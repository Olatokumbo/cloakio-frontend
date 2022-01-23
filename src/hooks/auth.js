import { useEffect, useState } from "react";
import * as actionTypes from "../redux/actions/actionTypes";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
    //   console.log(">>>>>>", user, "<<<<<<<");
      setLoading(true);
      if (user) {
        console.log("Signed in");
        setLoading(false);
        dispatch({
          type: actionTypes.SIGNIN_SUCCESS,
          uid: user.uid,
          photoURL: user.photoURL,
          displayName: user.displayName,
          email: user.email,
          refreshToken: user.refreshToken,
        });
      } else {
        console.log("Not Signed in");
        setLoading(false);
        dispatch({ type: actionTypes.SIGNOUT_SUCCESS });
      }
    });
    return () => unsubscribe();
  }, []);

  return loading;
};

export default useAuth