import { auth } from "../../config/firebase";

export const startSignin = (cred) => {
  return auth.signInWithEmailAndPassword(cred.email, cred.password);
};
