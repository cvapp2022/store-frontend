import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface UserState {
  authenticated: boolean;
  token: string;
  user: object;
}

// Initial state
const initialState: UserState = {
    authenticated: false,
    token: "",
    user: {}
};

// Actual Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    // Action to set the authentication status
    setUserState(state,action) {
        state.authenticated=true;
        state.token=action.payload.token
        state.user=action.payload.user
    },

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

export const { setUserState } = userSlice.actions;

export const selectUserState = (state: AppState) => state.user;

export default userSlice.reducer;