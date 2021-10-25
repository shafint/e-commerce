import {createSlice} from "@reduxjs/toolkit";
export const Inachart=createSlice({
    name:"inChart",
    initialState:{
        inChart:[]
    },
    reducers:{
        buttonDisabl:(state,action)=>{
            state.inChart=[...state.inChart,action.payload];
        },
        buttonInable:(state,action)=>{
            state.inChart=state.inChart.filter((val,ind)=>ind != action.payload.id)
        }
    }
})
export const {buttonDisabl,buttonInable}=Inachart.actions;
export default Inachart.reducer;
