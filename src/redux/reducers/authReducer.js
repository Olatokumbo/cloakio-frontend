import * as actionTypes from "../actions/actionTypes";

export const authInitialState = {
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
  error: null,
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        uid: action.uid,
        displayName: action.displayName,
        email: action.email,
        photoURL: action.photoURL,
        error: null,
      };
    case actionTypes.SIGNIN_FAILED:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default authReducer;
