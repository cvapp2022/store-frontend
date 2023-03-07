import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { user } from "../types/user";
import { order } from "../types/order";

// Type for our state
export interface UserState {
  authenticated: boolean;
  token: string;
  user: user;
  orders: Array<order>
}

// Initial state
const initialState: UserState = {
    authenticated: false,
    token: "",
    user: {},
    orders:[]
};

// Actual Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    // Action to set the authentication status
    setUserState(state,action) {
        state.authenticated=true;
        state.token=action.payload.token;
        state.user=action.payload.user;
        state.orders=action.payload.orders
    },

    unSetUserState(state){
      state.authenticated=false;
      state.token='';
      state.user={};
      state.orders=[];
    }

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //   [HYDRATE]: (state,action) => {
    //     return {
    //       ...state,
    //       ...action.payload,
    //     };
    //   },
    // },
  },
});

export const { setUserState, unSetUserState } = userSlice.actions;

export const selectUserState = (state: AppState) => state.user;

export const selectOrdersState = (state: AppState) => state.user.orders;


export default userSlice.reducer;