import axios from "axios";
import Toast from "../../models/Toast";
import { OrderActions } from "../slices/OrderSlice";
import { UIActions } from "../slices/UISlice";

export const SaveOrders = (orderItems) => {
    return async (dispatch) => {
      dispatch(UIActions.updateLoading(true));
      axios
        .post("http://localhost:4000/orders",orderItems)
        .then((response) => {
          if (response.data.status) {
            const toast = new Toast()
            toast.severity = "success";
            toast.summary = "Success";
            toast.detail = response.data.data;
            dispatch(UIActions.showToast(toast));
          } else {
            const toast = new Toast();
            toast.severity = "error";
            toast.summary = "Failed";
            toast.detail = response.data.data;
            dispatch(UIActions.showToast(toast));
          }
          dispatch(UIActions.updateLoading(false));
        })
        .catch((error) => {
          const toast = new Toast();
          toast.severity = "error";
          toast.summary = "Failed";
          toast.detail = error.message;
          dispatch(UIActions.showToast(toast));
          dispatch(UIActions.updateLoading(false));
        });
    };
  };
  
  export const fetchOrders = () => {
    return async (dispatch) => {
      dispatch(UIActions.updateLoading(true));
      axios
        .get("http://localhost:4000/orders")
        .then((response) => {
          if (response.data.status) {
            const orderItems = Array.isArray(response.data.data)
              ? response.data.data
              : [];
            dispatch(OrderActions.replaceOrders(orderItems));
          } else {
            const toast = new Toast();
            toast.severity = "error";
            toast.summary = "Failed";
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
  