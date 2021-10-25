import {createSlice} from "@reduxjs/toolkit";
import img1 from "../imgs/dress1.jpg";
import img2 from "../imgs/dress2.jpg";
import img3 from "../imgs/dress3.jpg";
import img4 from "../imgs/dress4.jpg";
import img5 from "../imgs/dress5.jpg";
import img6 from "../imgs/dress6.jpg";
import img7 from "../imgs/dress7jpg.jpg";
export const ProShelter=createSlice({
    name:"Shelter",
    initialState:{
        Shelter:[
            {
                img:img1,
                name:"Dhakaiya jamdani",
                discriptions:"Product is 100% real.Only 7 days return",
                price:40000
            },
            {
                img:img2,
                name:"Lehenga",
                discriptions:"Product is 100% real.Only 7 days return",
                price:80000
            },
            {
                img:img3,
                name:" Three Pice",
                discriptions:"Product is 100% real.Only 7 days return",
                price:4000
            },
            {
                img:img4,
                name:"Red Three Pice",
                discriptions:"Product is 100% real.Only 7 days return",
                price:10000
            },
            {
                img:img5,
                name:"Mini 3Pice",
                discriptions:"Product is 100% real.Only 7 days return",
                price:2000
            },
            {
                img:img6,
                name:"Marriage Lehenga",
                discriptions:"Product is 100% real.Only 7 days return",
                price:150000
            },
            {
                img:img7,
                name:"Jeket and Tshart",
                discriptions:"Product is 100% real.Only 7 days return",
                price:1500
            },
        ]
    },
    reducers:{
        allShelters:(state,action)=>{

        }
    }
})
export const {allData}=ProShelter.actions;
export default ProShelter.reducer;