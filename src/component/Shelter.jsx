import React from 'react'
import Nav from "./Nav";
import {useSelector} from "react-redux"
import HomeItems from "./HomeItems.jsx"
const Shelter = () => {
    const shelterData=useSelector(state =>state.shelter.Shelter)
    console.log(shelterData)
    return (
        <>
        <Nav/>
        <div className="items__list">
        <div className="container mt-5">
                <div className="row">
                {
                        shelterData.map((vals,id)=>{
                            
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

export default Shelter
