import React from 'react'
import Nav from "./Nav";
import {Link} from "react-router-dom"
import HomeItems from "./HomeItems.jsx"
import {useSelector} from "react-redux"
const Foods = () => {
    const foodsData=useSelector(state=>state.foods.foods)
    return (
        <>
        <Nav/>
        <div className="items__list">
        <div className="container mt-5">
                <div className="row">
                {
                        foodsData.map((vals,id)=>{
                            
                   return <HomeItems
                    key={id}
                    id={id}
                    img={vals.img}
                    name={vals.name}
                    dis={vals.discriptions}
                    price={vals.price}
                    />
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Foods
