import { createSlice } from "@reduxjs/toolkit";
import { layout } from "../types/layout";
import { layoutItem } from "../types/layoutItem";



export interface LayoutState {
  main: {
    layout: layout
    mainLoaded: boolean,
  },
  prodOne: {
    product: any,
    layout: layout,
    prodOneLoaded: boolean
  },
  categoryOne: {
    category: any,
    layout: layout,
    catOneLoaded: boolean
  }
}

const initialState: LayoutState = {
  main: {
    layout: {
      layout_name: '',
      layout_permalink: '',
      items: []
    },
    mainLoaded: false
  },
  prodOne: {
    product: {},
    layout: {
      layout_name: '',
      layout_permalink: '',
      items: []
    },
    prodOneLoaded: false,
  },
  categoryOne: {
    category: {},
    layout: {
      layout_name: '',
      layout_permalink: '',
      items: []
    },
    catOneLoaded: false
  }
};

// Actual Slice 
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setMainLayout(state, action) {
      // console.log(action.payload)
      state.main.mainLoaded = true;
      state.main.layout = action.payload;
    },
    setProdOneLayout(state, action) {
      state.prodOne.prodOneLoaded = true;
      state.prodOne = action.payload;
    },
    setCatOneLayout(state,action){
      state.categoryOne.catOneLoaded=true;
      state.categoryOne.category=action.payload.category;
      state.categoryOne.layout=action.payload.layout;
    }

  },
});


export const { setMainLayout, setProdOneLayout, setCatOneLayout } = layoutSlice.actions;

export const selectLayoutState = (state: { layout: LayoutState; }) => state.layout;

export const selectMainLayoutState = (state: { layout: LayoutState; }) => state.layout.main;

export const selectProdOneLayoutState = (state: { layout: LayoutState; }) => state.layout.prodOne;

export const selectCategoryOneLayoutState=(state:{layout: LayoutState;}) => state.layout.categoryOne;

export default layoutSlice.reducer;
