import {useState} from 'react'
import {Link} from "react-router-dom"
import {login} from "../../slices/Rightuser.jsx";
import {useDispatch,useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
const Login = () => {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const Rvalue=useSelector(state=>state.user.user);
    const history=useHistory();
    const dispatch=useDispatch();
    const loginSbumit=(e)=>{
      e.preventDefault();
        if (email===""){
            return false;
        }
        if (pass===""){
            return false;
        }
        if (email!==Rvalue.Email){
          alert("Please enter the Corect Email")
          return false;
      }
      if (pass!==Rvalue.Password){
        alert("Please enter the Corect PassWord")
          return false;
      }
      if (email===Rvalue.Email && pass===Rvalue.Password){
        dispatch(login({Email:Rvalue.Email,Password:Rvalue.Password}))
        history.push("/")
    }
    }
    return (
        <>
        <div className="d-flex justify-content-center align-items-center bg-dark" style={{height:"100vh"}}>
<div className="w-50 p-3" style={{boxShadow:"5px 5px 15px rgba(0,0,0,.5),-5px -5px 10px rgba(109,103,103,1),inset 5px 5px 15px rgba(0,0,0,.5),inset -5px -5px 10px rgba(109,103,103,1)",
border:"3px solid #343a40",
maxWidth:"350px"
}}>
    <form onSubmit={loginSbumit}>
    <h3 className="text-light" style={{textAlign:"center"}}>Login</h3>
  <div className="form-group">
    <label className="text-light" for="exampleInputEmail1">Email address</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted text-light">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label className="text-light" for="exampleInputPassword1">Password</label>
    <input value={pass} onChange={(e)=>setPass
      (e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="mb-2 form-check-label text-light" for="exampleCheck1">remember me</label>
  </div>
  <button type="submit" className="btn btn-primary mb-2">Submit</button><br/>
  <Link className="pb-5 text-light" to="/login/ragister"> Ragister Account Now</Link>
</form>
</div>
</div>
        </>
    )
}

export default Login
