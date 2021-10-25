import {useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {allactions} from "../slices/ChartBackend.jsx";
import {buttonDisabl} from "../slices/Inachart.jsx";
import {useHistory} from "react-router-dom"
import { SyncAlt } from '@material-ui/icons';
const HomeItems = (props) => {
     const [btnEnabl,setEnabl]=useState({text:"Add to Chart",action:"pointed"});
    const {id,img,name,dis,price}=props;
    const loginDAta=useSelector(state=>state.user.user);
    const histri=useHistory()
    const btn=useSelector(state=>state.conditionBtn.inChart);
    const Chart__data=useDispatch();
    useEffect(() => {
        
    Chart__data(buttonDisabl({id:id}));

        return () => {
            
        }
    }, []);
    const clickdata=()=>{
        Chart__data(allactions({id:id,img:img,name:name,discripton:dis,price:price}));
        btn.forEach((element,ind) => {
            if(element.id===id){
                setEnabl({...setEnabl,text:"Add Successfully",action:"none"})
            }
        })
        

    }
    return (
        <div className="col col-lg-3 col-md-4 col-sm-6 d-flex justify-content-around mb-5" style={{zIndex:"100"}}>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap" style={{height:"50%"}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{dis}</p>
                    <h5 className="card-title">{price}Taka</h5>
                    {loginDAta.Email==""||loginDAta.Password==""?null:
                    <Link to="#" onClick={clickdata} className="btn btn-primary" style={{pointerEvents:btnEnabl.action}}>{btnEnabl.text}</Link>}
                </div>
            </div>
        </div>
    )
}

export default HomeItems

