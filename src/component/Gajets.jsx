import React from 'react'
import Nav from "./Nav";
import {Link} from "react-router-dom"
import HomeItems from "./HomeItems.jsx"
import {useSelector} from "react-redux";
const Gajets = () => {
   const gajectData=useSelector(state=>state.gajects.gajects)
    return (
        <>
            <Nav />
            <div className="items__list">
            <div className="container mt-5">
                <div className="row">
                    {
                        gajectData.map((vals,id)=>{
                            
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

export default Gajets
