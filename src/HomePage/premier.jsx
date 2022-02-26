import React from 'react'
import Premierimg from "./premier.png"
import "./premier.css"
import {Spremier} from "./CommomCard"
const Premier = () => {
  return (
    <>
    <div className='premier-container'>
   <div className='premier-img'>
   <img src={Premierimg} alt="" />
   <h2>Premier</h2><br></br>
   <p>
       brand new release every friday
   </p>
   </div>
   <div>
       <Spremier/>
   </div>
    </div>
    </>
  )
}

export default Premier