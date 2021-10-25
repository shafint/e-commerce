import {createSlice} from "@reduxjs/toolkit";
import img1 from "../imgs/gajects1.jpg";
import img2 from "../imgs/gajects2.jpg";
import img3 from "../imgs/gajects3.jpg";
import img4 from "../imgs/gajects4.jpg";
import img5 from "../imgs/gajects5.jpg";
import img6 from "../imgs/gajects6.jpg";
import img7 from "../imgs/gajects7.jpg";
export const ProGajets=createSlice({
    name:"gajects",
    initialState:{
        gajects:[
            {
                img:img1,
                name:"Air Pod",
                discriptions:"Product is 100% real",
                price:4000
            },
            {
                img:img2,
                name:"Head Phone",
                discriptions:"Head Phone is 100% real",
                price:2000
            },
            {
                img:img3,
                name:"Fan tag Keyboard",
                discriptions:"key-board is 100% real",
                price:1500
            },
            {
                img:img4,
                name:"Tablet",
                discriptions:"Tablet is 100% real.Official product 7 days replacement gurrenty.NO warrenty",
                price:40000
            },
            {
                img:img5,
                name:"Samsung M30",
                discriptions:"This is 100% real.Official product 7 days replacement gurrenty.NO warrenty",
                price:22500
            },
            {
                img:img6,
                name:"One plus+ Nord",
                discriptions:"It is is 100% real.Official product 7 days replacement gurrenty.NO warrenty",
                price:40000
            },
            {
                img:img7,
                name:"One Plus Watch",
                discriptions:"it is 100% real.Official product 7 days replacement gurrenty.NO warrenty",
                price:25000
            },
        ]
    },
    reducers:{
        allgajects:(state,action)=>{

        }
    }
})
export const {allData}=ProGajets.actions;
export default ProGajets.reducer;