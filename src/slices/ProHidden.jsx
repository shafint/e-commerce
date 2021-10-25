import {createSlice} from "@reduxjs/toolkit";
import img1 from "../imgs/hidden1.jpg";
import img2 from "../imgs/hidden2.jpg";
import img3 from "../imgs/hidden3.jpg";
import img4 from "../imgs/hidden4.jpg";
import img5 from "../imgs/hidden5.jpg";
import img6 from "../imgs/hidden6.jpg";
import img7 from "../imgs/hidden7.jpg";
export const ProHidden=createSlice({
    name:"hidden",
    initialState:{
        hidden:[
            {
                img:img1,
                name:"Wight Bra",
                discriptions:"No Warrenty",
                price:100
            },
            {
                img:img2,
                name:"Gray Bra",
                discriptions:"No Warrenty",
                price:300
            },
            {
                img:img3,
                name:"Blue bra",
                discriptions:"No Warrenty",
                price:100
            },
            {
                img:img4,
                name:"Pink Bra",
                discriptions:"No Warrenty",
                price:200
            },
            {
                img:img5,
                name:"Full set",
                discriptions:"No Warrenty",
                price:400
            },
            {
                img:img6,
                name:"blue set",
                discriptions:"No Warrenty",
                price:500
            },
            {
                img:img7,
                name:"Panti",
                discriptions:"No Warrenty",
                price:600
            },
        ]
    },
    reducers:{
        allHiddndata:(state,action)=>{

        }
    }
})
export const {allHiddndata}=ProHidden.actions;
export default ProHidden.reducer;