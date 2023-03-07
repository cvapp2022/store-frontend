import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../types/category";
import { AppState } from "./store";

// Type for our state
export interface ApplicationState {

    categories:Category[];
    display_auth_modal:boolean;
    display_route_loader:boolean;
    dispaly_sidebar:boolean;
}

const initialState: ApplicationState = {
    categories:[],
    display_auth_modal:false,
    display_route_loader:true,
    dispaly_sidebar:false
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
      setDispalyAuthModal(state,action){
        state.display_auth_modal=action.payload
      },
      setDisplayRouteLoader(state,action){
        state.display_route_loader=action.payload
      },
      setDisplaySidebar(state){
        (state.dispaly_sidebar ? state.dispaly_sidebar=false : state.dispaly_sidebar=true)
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
export const {setDispalyAuthModal,setDisplayRouteLoader,setDisplaySidebar}=applicationSlice.actions;
// export const { setDisplayAddedToCartModal }=applicationSlice.actions

export const selectApplicationState = (state: AppState) => state.application;

export default applicationSlice.reducer;