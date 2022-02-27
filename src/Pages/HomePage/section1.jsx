import "./section1.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export const Section1 = () => {
    const [data, setdata] = useState([])
    
    useEffect(() => {
        axios.get("https://shielded-basin-22580.herokuapp.com/movies").then((res) => { setdata(res.data);console.log(res.data) })
    },[])

    return (<div className="sdiv1">
        <div className="stitle"><h3>Recommended movies</h3><Link className="link" to=""><p>See All</p></Link></div>
        {data.map((e) => {
            return (
                <div className="simgdiv" key={e._id}><Link className="link" to={`/movies/${e._id}`}><img src={e.cover_image_url}></img><h5>{e.movie_name}</h5><p>{ e.languages}</p></Link></div>
                
            )
        })}
        
        <img className="sbanner" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/lead-in-v3-collection-202102040828.png"></img>

    </div>)
}