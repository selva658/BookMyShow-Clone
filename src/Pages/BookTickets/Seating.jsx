import React, {useState, useEffect } from "react";
import "../../Components/Styling/Seating.css";
import { rows, rows2 } from "../../Components/BookTickets/data";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router-dom";
import {BookMovie} from "../../Redux/BookSingleM/action"
import {addtotal} from "../../Redux/payment/action"
import { Navigate, Link, useNavigate } from "react-router-dom";

const Silver = ["A", "B", "C", "D"];
const ticketList = {
  silver: [],
  platinium: [],
  price: 0,
};
const Seating = ({
  seatingActive = true,
  movie_name = "Tom And Jerry",
  location = "INOX: Neelyog, Ghatkopar E",
  timeAndDate = "Tomorrow, 12 Mar, 10:30 AM",
  type1 = "SILVER",
  type2 = "Premium",
  ticketPrice1 = 250,
  ticketPrice2 = 100,
}) => {
    const Navigate = useNavigate()

  const [seatActive, setSeatActive] = useState(seatingActive);
  const [active, setActive] = useState(false);
  const [rowsData, setRowData] = useState(rows);
  const [rowsData2, setRowData2] = useState(rows2);
  const [clickedSeats,changeSeat]=useState([])
  const [price, setPrice] = useState(0);
  // const movie_details = useSelector(state => state.booking_details);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  

  // console.log(seatingActive);

  const handleClick = (value,seat) => {
    setRowData(
      rowsData.map((e) =>
        e.id === value ? { ...e, isSelected: !e.isSelected } : e
      )
    );
     if(clickedSeats.indexOf(seat)!=-1){
        var x=clickedSeats.filter((x)=>seat!=x)
        changeSeat(x);
        console.log(clickedSeats)
        // clickedSeats.splice(clickedSeats.indexOf(seat), 1);
     }else{
        changeSeat([...clickedSeats,seat]);
        console.log(clickedSeats)
     }
    
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


  const handleSeat = () => {
    rowsData.forEach((e) =>
      e.isSelected ? ticketList.silver.push(e.seat) : ""
    );
    rowsData2.forEach((e) =>
      e.isSelected ? ticketList.platinium.push(e.seat) : ""
    );
    ticketList.price = price;
    //ticketListfunc(ticketList);
    console.log(ticketList);
    setSeatActive(false);
    handleCloseSeatingModal(ticketList);
  };

  const {id} = useParams()
  const dispatch = useDispatch()
     
 
  const movie_details = useSelector((store)=>store.book.bookedMovie)
  const cinemas = JSON.parse(localStorage.getItem('theaterDet'))
  console.log(cinemas)
  // const isLoading = useSelector(state => state.book.isLoading);
  // const isError = useSelector(state => state.book.isError);
    //  console.log("Checking",movie_details)  
     useEffect(() => {
        if (movie_details) {
            dispatch(BookMovie(id))
        }
     }, [])


     const navto=()=>{
      Navigate("/summary")
      localStorage.setItem("BookedMovie",JSON.stringify({ MovieName:movie_details.movie_name,
                                                          theater:cinemas.name,
                                                          time:cinemas.time,
                                                          seats:clickedSeats,
                                                          price:price,
                                                        }))
    }
  return (
    <div
      style={
        seatingActive
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
            <h4 style={{ color: "white", fontSize: 20 }}>{movie_details.movie_name}</h4>
            <h5 style={{ color: "white" }}>{cinemas.name}</h5>
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
            {type1}-Rs. {ticketPrice1}
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
                  onClick={() => handleClick(e.id,e.seat)}
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
            {type2}-Rs. {ticketPrice2}
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
                  onClick={() =>handleClick(e.id,e.seat)}
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
      <div
        style={active ? { display: "block" } : { display: "none" }}
        className="PriceButton"
      >
        <button
           onClick={() => {dispatch(addtotal(price),console.log(price)),navto()}}
          style={{ height: 40, margin: 10, marginLeft: "40%", cursor: "pointer" }}
        >
          Rs. {price}
        </button>
      </div>
    </div>
  );
};

export default Seating;
