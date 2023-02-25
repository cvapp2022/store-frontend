import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../types/category";
import { AppState } from "./store";

// Type for our state
export interface ApplicationState {

    categories:Category[];
    display_added_to_cart_modal:boolean
}

const initialState: ApplicationState = {
    categories:[],
    display_added_to_cart_modal:false
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
      setDisplayAddedToCartModal(state,action) {
        state.display_added_to_cart_modal=action.payload
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

export const { setApplicationState } = applicationSlice.actions;
export const { setDisplayAddedToCartModal }=applicationSlice.actions

export const selectApplicationState = (state: AppState) => state;

export default applicationSlice.reducer;