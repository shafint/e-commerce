import {useEffect} from "react"
import HomeHeader from "./HomeHeader.jsx";
import "./styles/home.css";
import Nav from "./Nav";
import {useSelector,useDispatch} from "react-redux";
import HomeItems from "./HomeItems.jsx"
import {allData} from "../slices/Product.jsx"
const Home = () => {
    const dispatch=useDispatch()
    const gajet=useSelector(state=>state.gajects.gajects)
    const shelterd=useSelector(state=>state.shelter.Shelter)
    const foods=useSelector(state=>state.foods.foods)
    const arr=[...gajet,...shelterd,...foods];
    useEffect(() => {

    dispatch(allData([...gajet,...shelterd,...foods]))
        return () => {
            
        }
    }, [arr.length])

    const productsData=useSelector(state=>state.items.product);
    return (
        <>
        
      <Nav/>
            <HomeHeader />
            <div className="porduct__All">
                <div className="container">
                    <div className="row mt-5">
                        {productsData.map((val,id)=>{
                            return <HomeItems
                            key={id}
                            id={id}
                            img={val.img}
                            name={val.name}
                            dis={val.discriptions}
                            price={val.price}
                            />
                        })}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home
