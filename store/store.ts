import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { applicationSlice } from "./appSlice";
import { layoutSlice } from "./layoutSlice";
import { cartSlice } from "./cartSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  [applicationSlice.name]:applicationSlice.reducer,
  [userSlice.name]:userSlice.reducer,
  [layoutSlice.name]:layoutSlice.reducer,
  [cartSlice.name]:cartSlice.reducer,
});


const masterReducer = (state: any, action: any) => {
  if(action.type==='LOAD_SSR'){
    const nextState = {
      ...state, // use previous state
      ...action.payload
      // layout: {
      //   mainLoaded:action.payload.layout.mainLoaded,
      //   main:action.payload.layout.main,
      //   prodOne:action.payload.layout.prodOne,
      //   prodOneLoaded:action.payload.layout.prodOneLoaded
      // },
      // cart:{
      //   items:action.payload.cart.items,
      //   identifier:action.payload.cart.identifier,
      //   totalAmount:action.payload.cart.totalAmount,
      // }
  }
  return nextState;
  }
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

  //   "fetchMainLayout", 

export const wrapper = createWrapper<AppStore>(makeStore,{debug:false});