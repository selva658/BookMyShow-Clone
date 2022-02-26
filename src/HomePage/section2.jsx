import "./section2.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export const Section2 = () => {
    const [data, setdata] = useState([])
    
    useEffect(() => {
        axios.get("https://shielded-basin-22580.herokuapp.com/movies4").then((res) => { setdata(res.data);console.log(res.data) })
    },[])

    return (<div className="sdiv1">
        <div className="stitle"><h3>The Latest Play</h3><Link className="link" to=""><p>See All</p></Link></div>
        {data.map((e) => {
            return (
                <div className="simgdiv" key={e._id}><Link className="link" to={`/moviedetails/${e._id}`}><img src={e.cover_image_url}></img><h6>{e.movie_name}</h6><p>{ e.languages}</p></Link></div>
                
            )
        })}
        
    </div>)
}