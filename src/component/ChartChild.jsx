import {useState} from 'react'
import {Link} from "react-router-dom"
import CloseIcon from '@material-ui/icons/Close';
import {removef} from "../slices/ChartBackend.jsx";
import {buttonInable} from "../slices/Inachart.jsx";
import {useDispatch} from "react-redux"
const ChartChild = (props) => {
    const {id,img,name,dis,price}=props;
    const[counter,setCounter]=useState(1)
    const [cPrice,setPrice]=useState(price);
    const incd=()=>{

      const dd=counter<6? setCounter((old)=>++old):null;
      const ff= counter<6? setPrice(old=>old+price):null;
    }
    const dec=()=>{
      const kk= counter>1? setCounter((old)=>--old):null;
      const tt=  counter>1? setPrice(old=>old-price):null;
    }
    const deleted=useDispatch();
    const deletedAll=()=>{
        deleted(removef({id}))
        deleted(buttonInable({id}))
    }
    return (
        <>
         <div className="row d-flex flex-column flex-md-row mb-5 defaultChart py-3" style={{position:"relative"}}>
                    <span style={{position:"absolute",right:"10px",top:"5px",width:"25px",height:"25px",color:"#fff",background:"black",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"5px",zIndex:"100"}} onClick={deletedAll}><CloseIcon/></span>
                    <div className="col col-md-5 parentimg ">
                        <img className="productImg" src={img} alt="Photo"/>
                    </div>
                    <div className="col col-md-3 d-flex justify-content-center align-items-center flex-column">
                        <h1>{name}</h1>
                        <p>{dis}</p>
                    </div>
                    <div className="col col-md-2 d-flex justify-content-center align-items-center flex-column">
                        <div className="increment__d">
                            <button onClick={incd} className="btn btn-outline-info">+</button>
                            <span className="text-info
                             mx-2" style={{fontSize:"25px"}}>{counter}</span>
                            <button onClick={dec} className="btn btn-outline-danger">-</button>
                        </div>
                        <div className="price">
                            <h3>Price:{cPrice}Tk</h3>
                        </div>
                    </div>
                    <div className="col col-md-2 d-flex justify-content-center align-items-center">
                        <Link className="btn btn-info" to="">Buy Now</Link>
                    </div>
                </div>   
        </>
    )
}

export default ChartChild
