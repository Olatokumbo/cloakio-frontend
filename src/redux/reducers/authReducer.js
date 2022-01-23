import * as actionTypes from "../actions/actionTypes";

export const authInitialState = {
  uid: null,
  displayName: null,
  email: null,
  photoURL: null,
  error: null,
  refreshToken: null,
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
        refreshToken: action.refreshToken,
        error: null,
      };
    case actionTypes.SIGNIN_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.SIGNOUT_SUCCESS:
      return {
        uid: null,
        displayName: null,
        email: null,
        photoURL: null,
        error: null,
        refreshToken: null,
      };

    default:
      return state;
  }
};

export default authReducer;
