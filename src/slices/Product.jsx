import {createSlice} from "@reduxjs/toolkit";
// import dataProducts from "../component/Products.jsx";
export const productSlice=createSlice({
    name:"product",
    initialState:{
        product:[]
    },
    reducers:{
        allData:(state,action)=>{
            state.product=action.payload
        }
    }
})
export const {allData}=productSlice.actions;
export default productSlice.reducer;