import {createSlice} from "@reduxjs/toolkit";


export const Rightuser=createSlice({
    name:"ruser",
    initialState:{
        ruser:null
    },
    reducers:{
        login:(state,action)=>{
            state.ruser=action.payload;
        },
    }
})
export const {login}=Rightuser.actions;
export default Rightuser.reducer;