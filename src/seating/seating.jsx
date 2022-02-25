import React, { useEffect } from "react";
import "./Seating.css";
import { rows, rows2 } from "./data";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import {addtotal} from "../redux/action"

const Silver = ["A", "B", "C", "D"];
const ticketList = {
  silver: [],
  platinium: [],
  price: 0,
};
const Seating = ({
  seatingActive = false,
  movie_name = "Tom And Jerry",
  location = "INOX: Neelyog, Ghatkopar E",
  timeAndDate = "Tomorrow, 12 Mar, 10:30 AM",
  type1 = "SILVER",
  type2 = "Premium",
  ticketPrice1 = 112,
  ticketPrice2 = 100,
}) => {
  const [seatActive, setSeatActive] = React.useState(true);
  const [active, setActive] = React.useState(false);
  const [rowsData, setRowData] = React.useState(rows);
  const [rowsData2, setRowData2] = React.useState(rows2);
  const [price, setPrice] = React.useState(0);
  //const movie_details = useSelector(state => state.booking_details);
    const movie_details="singam"

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  // console.log(seatingActive);

  const handleClick = (value) => {
  
    setRowData(
      rowsData.map((e) =>
        e.id === value ? { ...e, isSelected: !e.isSelected } : e
      )
    );

    setRowData2(
      rowsData2.map((e) =>
        e.id === value ? { ...e, isSelected: !e.isSelected } : e
      )
    );
  };
  React.useEffect(() => {
    let a = rowsData.filter((e) => e.isSelected).length;
    let b = rowsData2.filter((e) => e.isSelected).length;

    setPrice(a * ticketPrice1 + b * ticketPrice2);
    setActive(price > 0 ? true : false);
  }, [price, rowsData, rowsData2]);


//     const handleSeat = () => {
    
//     rowsData.forEach((e) =>
//       e.isSelected ? ticketList.silver.push(e.seat) : ""
//     );
//     rowsData2.forEach((e) =>
//       e.isSelected ? ticketList.platinium.push(e.seat) : ""
//     );
//     ticketList.price = price;
//     //ticketListfunc(ticketList);
//    //setSeatActive(false);
//       <Navigate to="/payment"></Navigate>
//   };
  
  const stotal = useSelector((store) => store.total)
  const dispatch=useDispatch()
  console.log(stotal);
  return (
    <div
     style={
        seatActive
          ? {
            display: "block", zIndex: 1000, position: "absolute", top: "10%", left: 0, height: "100vh"
          }
          : { display: "none" }
      }
      className="seatingModal"
    >
      <div className="seatingModal__nav">
        <div>
          <div>
            <h4 style={{ color: "white", fontSize: 20 }}>Singam</h4>
            <h5 style={{ color: "white" }}>{movie_details.cinemas_name}</h5>
          </div>
          <div>
            <button style={{ cursor: "pointer", fontSize: 25 }} onClick={() => useNavigate("/payment")}>X</button>
          </div>
        </div>
        <div>
          <h3>{movie_details.date} {monthNames[new Date().getMonth()]} {movie_details.time}</h3>
        </div>
      </div>
      <div className="seatingModal__seatContainer">
        <div>
          <h5>
            {/* {type1}-Rs. {ticketPrice1} */}
          </h5>

          <div className="seatingModal__seatContainer_can">
            <div style={{ display: "grid" }}>
              {Silver.map((e) => (
                <div style={{ margin: 10, color: "gray" }} key={e}>
                  {e}
                </div>
              ))}
            </div>
            <div className="seatingModal__seatContainer_seats">
              {rowsData.map((e) => (
                <div
                  onClick={() => handleClick(e.id)}
                  className={
                    e.disable
                      ? "disable"
                      : e.isReserved
                        ? "reserved"
                        : e.isSelected
                          ? "select"
                          : "seats"
                  }
                  key={e.id}
                >
                  <p>{e.number}</p>
                </div>
              ))}
            </div>
          </div>
          <h5>
            {/* {type2}-Rs. {ticketPrice2} */}
          </h5>
          <div className="seatingModal__seatContainer_can">
            <div style={{ display: "grid" }}>
              {Silver.map((e) => (
                <div style={{ margin: 10, color: "gray" }} key={e}>
                  {e}
                </div>
              ))}
            </div>
            <div className="seatingModal__seatContainer_seats">
              {rowsData2.map((e) => (
                <div
                  onClick={() => handleClick(e.id)}
                  className={
                    e.disable
                      ? "disable"
                      : e.isReserved
                        ? "reserved"
                        : e.isSelected
                          ? "select"
                          : "seats"
                  }
                  key={e.id}
                >
                  <p>{e.number}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="Screen">
            <img src="https://i.imgur.com/XhsTL5Y.png" alt="screen" />
          </div>
        </div>
      </div>
      <Link to="/summary"><div
        style={active ? { display: "block" } : { display: "none" }}
        className="PriceButton"
      >
      <button className="spricebtn"
          onClick={() => {dispatch(addtotal(price)) }}
          style={{ height: 40, margin: 10, marginLeft: "40%", cursor: "pointer" }}
        >
          Pay Rs. {price}
        </button>
      </div></Link>
    </div>
  );
};

export default Seating;