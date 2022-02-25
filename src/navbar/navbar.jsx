import "./navbar.css";
import Popup from "./bot";
 import Login from "./slogin";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebase/firebase";
// import Login from "../firebase/login"

import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
export const Navbar = () => {
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
    <div>
      <div id="snavdiv">
        <img id="title" src="https://github.com/arshadalitalwar/bookmyshow/blob/main/bookmyshow-app/public/Bookmyshow-logo.png?raw=true"></img>
        {/* <p id="title">BookMyShow</p> */}
        <input placeholder=" Search for Movies,Events,Plays,Sports and activities"></input>

        <p id="select">
          <Popup></Popup>
        </p>
        {/* <button id="signin">Signin</button> */}
        <Login></Login>
        {/* <button id="signin" onClick={()=>setAction(true)}>Show</button> */}
        {/* <Login signIn={signIn} action={action}/> */}
        <p id="icon">
          <DehazeOutlinedIcon></DehazeOutlinedIcon>
        </p>
      </div>
      {/* ------------------------------------------------- */}
      <div className="snav2">
        <p>
          <Link className="Link" to="">
            Movies
          </Link>
        </p>
        <p>
          <Link className="Link" to="">
            Stream
          </Link>
        </p>
        <p>
          <Link className="Link" to="">
            Events
          </Link>
        </p>
        <p>
          <Link className="Link" to="">
            Plays
          </Link>
        </p>
        <p>
          <Link className="Link" to="">
            Sports
          </Link>
        </p>
        <p>
          <Link className="Link" to="">
            Activities
          </Link>
        </p>
        <p>
          <Link className="Link" to="">
            Buzz
          </Link>
        </p>
        <p className="hidden">
          <Link className="Link" to="">
            ListYourShow
          </Link>
        </p>
        <p className="hidden">
          <Link className="Link" to="">
            Corporates
          </Link>
        </p>
        <p className="hidden">
          <Link className="Link" to="">
            Offers
          </Link>
        </p>
        <p className="hidden">
          <Link className="Link" to="">
            GiftCards
          </Link>
        </p>
      </div>
    </div>
  );
};
