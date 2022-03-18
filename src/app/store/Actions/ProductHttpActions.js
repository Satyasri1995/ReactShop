import axios from "axios";
import Toast from "../../models/Toast";
import { ProductActions } from "../slices/ProductSlice";
import { UIActions } from "../slices/UISlice";

export const fetchProducts = () => {
  return async (dispatch) => {
    axios
      .get("http://localhost:4000/products")
      .then((response) => {
        if (response.status) {
          if(Array.isArray(response.data.data)){
            dispatch(ProductActions.replaceProducts(response.data.data));
          }else{
            dispatch(ProductActions.replaceProducts([]));
          }
        } else {
          const toast = new Toast();
          toast.severity = "error";
          toast.summary = "Failed";
          toast.detail = response.data.data;
          dispatch(UIActions.showToast(toast));
        }
      })
      .catch((error) => {
        const toast = new Toast();
        toast.severity = "error";
        toast.summary = "Error";
        toast.detail = error.message;
        console.log(error);
        dispatch(UIActions.showToast(toast));
      });
  };
};

export const saveProducts = (products) => {
  return async (dispatch) => {
    axios
      .post("http://localhost:4000/products", products)
      .then((response) => {
        if (response.status) {
          const toast = new Toast();
          toast.severity = "success";
          toast.summary = "Success";
          toast.detail = response.data.data;
          dispatch(UIActions.showToast(toast));
          dispatch(ProductActions.status(true));
        } else {
          const toast = new Toast();
          toast.severity = "error";
          toast.summary = "Failed";
          toast.detail = response.data.data;
          dispatch(UIActions.showToast(toast));
        }
      })
      .catch((error) => {
        const toast = new Toast();
        toast.severity = "error";
        toast.summary = "Error";
        toast.detail = error.message;
        console.log(error);
        dispatch(UIActions.showToast(toast));
      });
  };
};
