import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { applicationSlice } from "./appSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [applicationSlice.name]:applicationSlice.reducer
    },
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

export const wrapper = createWrapper<AppStore>(makeStore);