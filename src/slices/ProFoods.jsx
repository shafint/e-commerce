import {createSlice} from "@reduxjs/toolkit";
import img1 from "../imgs/foods1.jpg";
import img2 from "../imgs/foods2.jpg";
import img3 from "../imgs/foods3.jpg";
import img4 from "../imgs/foods4.jpg";
import img5 from "../imgs/foods5.jpg";
import img6 from "../imgs/foods6.jpg";
import img7 from "../imgs/foods7.jpg";
export const ProFoods=createSlice({
    name:"foods",
    initialState:{
        foods:[
            {
                img:img1,
                name:"Italian Burger",
                discriptions:"100% fresh conditions foods",
                price:400
            },
            {
                img:img2,
                name:"Chines Burger",
                discriptions:"100% fresh conditions foods",
                price:800
            },
            {
                img:img3,
                name:"Hot Dog",
                discriptions:"100% fresh conditions foods",
                price:200
            },
            {
                img:img4,
                name:"Dominos Pizza",
                discriptions:"100% fresh conditions foods",
                price:850
            },
            {
                img:img5,
                name:"Italian Pizza",
                discriptions:"100% fresh conditions foods",
                price:950
            },
            {
                img:img6,
                name:"Chines Pizza",
                discriptions:"100% fresh conditions foods",
                price:600
            },
            {
                img:img7,
                name:"Chice Burger",
                discriptions:"100% fresh conditions foods",
                price:400
            },
        ]
    },
    reducers:{
        allShelters:(state,action)=>{

        }
    }
})
export const {allData}=ProFoods.actions;
export default ProFoods.reducer;