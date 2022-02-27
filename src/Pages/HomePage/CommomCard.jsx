
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


export const Spremier = () => {
    const [data, setdata] = useState([])
    
    useEffect(() => {
        axios.get("https://shielded-basin-22580.herokuapp.com/movies3").then((res) => { setdata(res.data);console.log(res.data) })
    },[])

    return (<div className="sdiv1p">
        {/* <div className="stitle"><h3>Recommended movies</h3><Link className="link" to=""><p>See All</p></Link></div> */}
        {data.map((e) => {
            return (
                <div className="simgdivp" key={e._id}><Link className="link1" to={`/moviedetails/${e._id}`}><img src={e.cover_image_url}></img><h5>{e.movie_name}</h5><p>{ e.languages}</p></Link></div>
                
            )
        })}
    </div>)
}