import {useState,useEffect} from 'react'
import dress from "../imgs/dressjpg.jpg";
import foods from "../imgs/foodsjpg.jpg";
import world from "../imgs/world-gadgets-set_1284-20049.jpg"
import "./styles/slider.css";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Link} from "react-router-dom";
const HomeHeader = () => {
    const [slider1,setSlider1]=useState("img1");

    useEffect(() => { 
        const slid= setInterval(()=>{
            if(slider1=="img1"){
                setSlider1("img2")
            }else if(slider1=="img2"){
                setSlider1("img3")
            }else{
                setSlider1("img1")
            }
           
        },2500)         
            return ()=>{

                return clearInterval(slid)
              }
    }, [slider1])

    
    const next=()=>{
        if(slider1=="img1"){
            setSlider1("img2")
        }else if(slider1=="img2"){
            setSlider1("img3")
        }else{
            setSlider1("img1")
        }
    }
    const back=()=>{
        if(slider1=="img3"){
            setSlider1("img2")
        }else if(slider1=="img2"){
            setSlider1("img1")
        }else{
            setSlider1("img3")
        }
    }
    return (
        <>
        <header className="mainS">
            
            <Link to="/gajets" className={`slider imgnum1 ${slider1}`}>
            <img src={world} alt="Photo"/>
            </Link>
            <Link  to="/shelter" className={`slider imgnum2 ${slider1}`}>
            <img src={dress} alt="Photo"/>
            </Link>
            <Link to="/foods" className={`slider imgnum3 ${slider1}`}>
            <img src={foods} alt="Photo"/>
            </Link>
            <span className="next" onClick={next}><NavigateNextIcon /></span>
            <span className="back" onClick={back}><ArrowBackIosIcon /></span>
        </header>  
        </>
    )
}

export default HomeHeader
