import {configureStore} from "@reduxjs/toolkit";
import Product from "../slices/Product.jsx";
import Rightuser from "../slices/Rightuser.jsx"
import userDataSlice from "../slices/userSlice.jsx";
import ProGajets from "../slices/ProGajets.jsx";
import ProShelter from "../slices/ProShelter.jsx";
import ProFoods from "../slices/ProFoods.jsx";
import ProHidden from "../slices/ProHidden.jsx";
import ChartBackend from "../slices/ChartBackend.jsx";
import Inachart from "../slices/Inachart.jsx";
const store=configureStore({
    reducer:{
        items:Product,
        rightUser:Rightuser,
        user:userDataSlice,
        gajects:ProGajets,
        shelter:ProShelter,
        foods:ProFoods,
        hidden:ProHidden,
        chart:ChartBackend,
        conditionBtn:Inachart
    }
})
export default store;