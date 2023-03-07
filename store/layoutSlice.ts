import { createSlice  } from "@reduxjs/toolkit";
import { layout } from "../types/layout";
import { layoutItem } from "../types/layoutItem";



export interface LayoutState {
    main:{
      layout:layout
      mainLoaded:boolean,
    },
    prodOne:{
      product:any,
      layout:layout,
      prodOneLoaded:boolean
    },
}

const initialState: LayoutState = {
    main:{ 
      layout:{
        layout_name:'',
        layout_permalink:'',
        items:[]
      },
      mainLoaded:false
    },
    prodOne:{
      product:{},
      layout:{
        layout_name:'',
        layout_permalink:'',
        items:[]
      },
      prodOneLoaded:false,
    },
};

// Actual Slice 
export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
      setMainLayout(state,action){
        // console.log(action.payload)
        state.main.mainLoaded=true;
        state.main.layout=action.payload;
      },
      setProdOneLayout(state,action){
        state.prodOne.prodOneLoaded=true;
        state.prodOne=action.payload;
      }
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


export const { setMainLayout,setProdOneLayout } = layoutSlice.actions;

export const selectLayoutState = (state: { layout: LayoutState; }) => state.layout;

export const selectMainLayoutState=(state: { layout: LayoutState; }) =>state.layout.main;

export const selectProdOneLayoutState=(state: { layout: LayoutState; }) =>state.layout.prodOne;


export default layoutSlice.reducer;
