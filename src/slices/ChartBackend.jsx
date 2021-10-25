import {createSlice} from "@reduxjs/toolkit";
export const ChartBackend=createSlice({
    name:"chart",
    initialState:{
        chart:[]
    },
    reducers:{
        allactions:(state,action)=>{
            state.chart=[...state.chart,action.payload];
        },
        removef:(state,action)=>{
            state.chart=state.chart.filter((val,ind)=>ind != action.payload.id)
        }
    }
})
export const {allactions,removef}=ChartBackend.actions;
export default ChartBackend.reducer;


