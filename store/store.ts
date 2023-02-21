import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { applicationSlice } from "./appSlice";
import { layoutSlice } from "./layoutSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  [layoutSlice.name]:layoutSlice.reducer
});


const masterReducer = (state: any, action: any) => {
  console.log(action)
  if (action.type === HYDRATE) {
      const nextState = {
          ...state, // use previous state
          layout: {
              mainLoaded:true,
              main: [...action.payload.layouts.main, ...state.layouts.main]
          },
          application:{
            display_added_to_cart_modal:false
          }
      }
      return nextState;
  } else {
      return combinedReducer(state, action)
  
  // {
  //   // [applicationSlice.name]:applicationSlice.reducer,
  //   [layoutSlice.name]:layoutSlice.reducer
  // } 
}
}


const makeStore = () =>
  configureStore({
    reducer:masterReducer,
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action 
>; 

export const wrapper = createWrapper<AppStore>(makeStore,{debug:true});