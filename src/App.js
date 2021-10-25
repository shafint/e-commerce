
import {useDispatch,useSelector} from "react-redux";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Home from "./component/Home"
import Gajets from "./component/Gajets"
import Hidden from "./component/Hidden"
import Shelter from "./component/Shelter"
import Foods from "./component/Foods"
import Chart from "./component/Chart"
import Login from './component/loginPage/Login'
import Ragister from "./component/loginPage/Ragister.jsx"
function App() {
  const userdata=useSelector(state=>state.user.user);
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/ragister" component={Ragister} />
        <Route exact path="/" component={Home} />
        <Route exact path="/gajets" component={userdata.Email==""||userdata.Password==""?Home:Gajets} />
        <Route exact path="/hidden" component={userdata.Email==""||userdata.Password==""?Home:Hidden} />
        <Route exact path="/shelter" component={userdata.Email==""||userdata.Password==""?Home:Shelter} />
        <Route exact path="/foods" component={userdata.Email==""||userdata.Password==""?Home:Foods}/>
        <Route exact path="/chart" component={userdata.Email==""&&userdata.Password==""?Home:Chart}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
    </>

  );
}
export default App;
