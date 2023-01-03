import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../types/category";
import { AppState } from "./store";

// Type for our state
export interface ApplicationState {

    categories:Category[];
}

const initialState: ApplicationState = {
    categories:[]
};

// Actual Slice
export const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
  
      // Action to set the authentication status
      setApplicationState(state,action) {
        state.categories=action.payload.categories;
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

export const { setApplicationState } = applicationSlice.actions;

export const selectApplicationState = (state: AppState) => state;

export default applicationSlice.reducer;