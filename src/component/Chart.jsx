import {useState} from 'react'
import Nav from "./Nav";
import "./styles/chart.css";
import ChartChild from "./ChartChild.jsx";
import {useDispatch,useSelector} from "react-redux"
const Chart = () => {
    const ChartData=useSelector(state=>state.chart.chart)
    return (
        <>
        <Nav/>
        {ChartData.length?<div className="items__list mainChart">
        <div className="container mt-5">
            {
             ChartData.map((vals,ind)=>{
                        return <ChartChild
                        key={ind}
                        id={ind}
                        img={vals.img}
                        name={vals.name}
                        dis={vals.discripton}
                        price={vals.price}
                        />
                })
            }
            </div> 
        </div>:<div className="d-flex justify-content-center align-items-center" style={{width:"100vw",height:"100vh"}}>
            <h1 style={{}}>Please Add Some Products</h1>
        </div>
        }
        </>

    )
}

export default Chart
