import { AuthActions } from "../slices/AuthSlice";

import axios from "axios";
import Auth from "../../models/Auth";
import { UIActions } from "../slices/UISlice";
import Toast from "../../models/Toast";

export const SignIn = (user) => {
  return async (dispatch) => {
    dispatch(UIActions.updateLoading(true));
    axios
      .post("http://localhost:4000/signin", user)
      .then((response) => {
        if (response.data.status) {
          const auth = new Auth();
          auth.isAuthenticated = true;
          auth.isAdmin = response.data.data.admin;
          auth.username = response.data.data.username;
          dispatch(AuthActions.loggedIn(auth));
        } else {
          const toast = new Toast();
          toast.severity = "error";
          toast.summary = "Invaid Credentials";
          toast.detail = response.data.data;
          dispatch(UIActions.showToast(toast));
        }
        dispatch(UIActions.updateLoading(false));
      })
      .catch((error) => {
        const toast = new Toast();
        toast.severity = "error";
        toast.summary = "Error";
        toast.detail = error.message;
        dispatch(UIActions.showToast(toast));
        dispatch(UIActions.updateLoading(false));
      });
  };
};

export const Sign_Up = (user) => {
  return async (dispatch) => {
    dispatch(UIActions.updateLoading(true));
    axios
      .post("http://localhost:4000/signup", user)
      .then((response) => {
        const toast = new Toast();
        if (response.data.status) {
          toast.severity = "success";
          toast.summary = "Success";
          toast.detail = response.data.data;
        } else {
          toast.severity = "error";
          toast.summary = "Failed";
          toast.detail = response.data.data;
        }
        dispatch(UIActions.showToast(toast));
        dispatch(UIActions.updateLoading(false));
        dispatch(UIActions.redirect("/ReactShop/login"));
      })
      .catch((error) => {
        const toast = new Toast();
        toast.severity = "error";
        toast.summary = "Error";
        toast.detail = error.message;
        dispatch(UIActions.showToast(toast));
        dispatch(UIActions.updateLoading(false));
      });
  };
};
