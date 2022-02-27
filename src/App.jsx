// import "./styles.css";
// import { auth, provider, signInWithPopup } from "./firebase";
// import Login from "./login"
import { useEffect, useState } from "react";
// import movies from "./Pages/movies"
// import Routers from "./Routes/Router";
import { Routes, Route } from "react-router-dom";
import SeeAll from "./Pages/movies";
import axios from "axios";
import {Theaters} from "./Pages/BookTickets/Theaters"
import Seating from "./Pages/BookTickets/Seating"

import FullScreenDialog from "./Pages/payment/payment"
import SecondSection from "./Pages/payment/ordersummary"
import {HomePage} from "./Pages/homepage"
import {Navbar} from "./Pages/navbar/navbar"
import Footer from "./Pages/HomePage/footer"
function App() {
  // const [action,setAction] = useState(false)

  // const signIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result);
  //       setAction(false)
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log(error.message); // ...
  //     });
  // };

  return (
    <div className="App">
       <Navbar/>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<SeeAll />} />
          <Route path="/movies/:id" element={<Theaters/>}/>
          <Route path="/book/seats" element={<Seating/>}/>
          <Route path="/summary" element={<SecondSection/>}></Route>
          <Route path="/payment" element={<FullScreenDialog/>}></Route>
      </Routes>   
      <Footer></Footer>  
      {/* <button onClick={()=>setAction(true)}>Show</button>
     <Login signIn={signIn} action={action}/> */}
    </div>
  )
}

export default App
