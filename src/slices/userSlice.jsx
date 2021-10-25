import {createSlice} from "@reduxjs/toolkit";


export const userDataSlice=createSlice({
    name:"user",
    initialState:{
        user:{Email:"",Password:""}
    },
    reducers:{
        ragister:(state,action)=>{
            state.user=action.payload;
        },
    }
})
export const {ragister}=userDataSlice.actions;
export default userDataSlice.reducer;