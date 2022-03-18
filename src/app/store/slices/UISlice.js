import { createSlice } from "@reduxjs/toolkit";
import UI from "../../models/UI";

const initUI={...new UI()}

const UISlice = createSlice({
    name:"UI",
    initialState:initUI,
    reducers:{
        showToast(state,actions){
            state.toast=actions.payload;
        },
        clearToast(state,actions){
            state.clearToast=actions.payload;
        },
        updateLoading(state,actions){
            state.loading=actions.payload;
        },
        redirect(state,actions){
            state.redirect=actions.payload;
        }
    }
});

export const UIActions = UISlice.actions;
export default UISlice.reducer;