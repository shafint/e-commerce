import Nav from "./Nav";
import HomeItems from "./HomeItems.jsx"
import {useSelector} from "react-redux"
const Hidden = () => {
    const hidd=useSelector(state=>state.hidden.hidden)
    return (
        <>
        <Nav/>
        <div className="items__list">
            
        <div className="container mt-5">
                <div className="row">
                {
                        hidd.map((vals,id)=>{
                            
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

export default Hidden
