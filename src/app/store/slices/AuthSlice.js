import { createSlice } from "@reduxjs/toolkit";
import Auth from "../../models/Auth";

const initAuth = {...new Auth()};

const AuthSlice = createSlice({
    name:"auth",
    initialState:initAuth,
    reducers:{
        loggedIn(state,actions){
            state.isAuthenticated=actions.payload.isAuthenticated;
            state.isAdmin=actions.payload.isAdmin;
            state.username=actions.payload.username;
        },
        loggedOut(){
            return {...initAuth};
        }
    }
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice.reducer;