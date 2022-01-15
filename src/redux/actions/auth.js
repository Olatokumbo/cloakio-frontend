import { auth } from "../../config/firebase";
import * as actionTypes from "./actionTypes";

export const startSignin = (cred) => async (dispatch, getState) => {
  try {
    const response = await auth.signInWithEmailAndPassword(
      cred.email,
      cred.password
    );

    const { uid, displayName, email, photoURL } = response.user;
    dispatch({
      type: actionTypes.SIGNIN_SUCCESS,
      ...{ uid, displayName, email, photoURL },
    });

    console.log("THUNK STATE STUFF", getState().auth);
    return response.user;
  } catch (error) {
    dispatch({ type: actionTypes.SIGNIN_FAILED, error });

    throw new Error(error);
  }
};
