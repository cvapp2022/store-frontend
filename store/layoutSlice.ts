import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { layoutItem } from "../types/layoutItem";
// import { HYDRATE } from "next-redux-wrapper";
import { baseUrl } from "../utils/config";



export interface LayoutState {
    main:{
      items:Array<layoutItem>
    },
    mainLoaded:boolean
}

const initialState: LayoutState = {
    main:{ items:[] },
    mainLoaded:false
};

// export const fetchMainLayout = createAsyncThunk(
//   "fetchMainLayout", 
//   () =>
//     axios
//       .get(`http://127.0.0.1:8000/api/en/desktop/layout/main-page`)
//       .then((response) => response.data.payload)
//       .catch((error) => error)
// );

// Actual Slice 
export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
      setMainLayout(state,action){
        // console.log(action.payload)
        state.mainLoaded=true;
        state.main=action.payload;
      },
      // [fetchMainLayout.fulfilled.type]: (state, action) => { 
      //   state.mainLoaded=true;
      //   state.main=action.payload;
      // }
      // Action to set the authentication status
      // setMainLayoutState(state,action) {
      //   state.main=action.payload;
      //   state.mainLoaded=true;
      // },
    },
    extraReducers: {
 
      // [fetchMainLayout.pending.type]: (state, action) => { 
      //   state.mainLoaded=false;
      //   state.main={} 
      // },
      // [fetchMainLayout.fulfilled.type]: (state, action) => { 
      //   state.mainLoaded=true;
      //   state.main=action.payload;
      // }
    }
    // Special reducer for hydrating the state. Special case for next-redux-wrapper

});


export const { setMainLayout } = layoutSlice.actions;

export const selectLayoutState = (state: { layout: LayoutState; }) => state.layout;


export default layoutSlice.reducer;
