import {useState} from "react";
import {useDispatch} from "react-redux";
import {ragister} from "../../slices/userSlice.jsx"
import {useHistory} from "react-router-dom";
const Ragister = () => {
    const [email,setEmil]=useState("");
    const [pass,setPass]=useState("");
    const [cPass,setCpass]=useState("");
    const dispatch=useDispatch();
    
    const location=useHistory();
    // const data=useSelector(state=>state.user.user);
    // console.log(data)
    const frmSubmit=(e)=>{
        e.preventDefault();
        if(pass!==cPass){
            return false;
        }
        if (email===""){
            return false;
        }
        if (pass===""){
            return false;
        }
        if (cPass===""){
            return false;
        }
        dispatch(ragister({Email:email,Password:pass}))
        setEmil("")
        setPass("")
        setCpass("")
        location.push("/login")
    }
    return (
        <>
<div className="d-flex justify-content-center align-items-center bg-dark" style={{height:"100vh"}}>
<div className="w-50 p-3" style={{boxShadow:"5px 5px 15px rgba(0,0,0,.5),-5px -5px 10px rgba(109,103,103,1),inset 5px 5px 15px rgba(0,0,0,.5),inset -5px -5px 10px rgba(109,103,103,1)",
border:"3px solid #343a40",
maxWidth:"350px"
}}>
    <form onSubmit={frmSubmit}>
    <h3 className="text-light" style={{textAlign:"center"}}>Ragister</h3>
  <div className="form-group">
    <label className="text-light" for="exampleInputEmail1">Email address</label>
    <input value={email} onChange={(e)=>setEmil(e.target.value)   } type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted text-light">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label className="text-light" for="exampleInputPassword1">Password</label>
    <input value={pass} onChange={(e)=>setPass(e.target.value)   } type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label className="text-light" for="exampleInputPassword2">Confirm Password</label>
    <input value={cPass} onChange={(e)=>setCpass(e.target.value)   } type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary mb-2">Ragister</button>
</form>
</div>
</div>
        
        </>
    )
}

export default Ragister
