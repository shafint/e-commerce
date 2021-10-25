
import "./styles/NavCss.css";
import {AiTwotoneShopping} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
const Nav = () => {
    const loginDAta=useSelector(state=>state.user.user)
    const chart=useSelector(state=>state.chart.chart)
           
    return (
        <>
        <header className="hading">
            <div className="container">
                <nav className="d-md-flex justify-content-between align-items-center" >
                <div className="logo">
                <h2><Link to="">Happy Shop</Link></h2>
                </div>
                <ul className="menus d-flex justify-content-center align-items-center">
                    {loginDAta.Email==""||loginDAta.Password==""?<li><Link to="/login">Login / Ragister</Link></li>:null}
                    {loginDAta.Email==""||loginDAta.Password==""?null:<li><Link to="/">home </Link></li>}
                    {loginDAta.Email==""||loginDAta.Password==""?null:<li><Link to="/gajets">Gajets </Link></li>  }
                    {loginDAta.Email==""||loginDAta.Password==""?null:<li><Link to="/shelter">Shelter </Link></li>}
                    {loginDAta.Email==""||loginDAta.Password==""?null:<li><Link to="/foods">Foods </Link></li> }
                    {loginDAta.Email==""||loginDAta.Password==""?null: <li><Link to='/hidden'>18+ Product </Link></li>  }
                    <li><Link to="/chart"><AiTwotoneShopping className="shopIcons"/>{chart.length? <span style={{color:"red"}}>{chart.length}</span>:null}</Link></li>                  
                </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Nav
