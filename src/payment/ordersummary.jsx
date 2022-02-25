import React, { useEffect, useState } from "react";
import "./ordersummary.css";
import axios from "axios";
import { addtotal } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cors from"core-js"

const SecondSection = () => {
  const city = "Chennai";
  const [food, setfood] = useState([]);
  const handleChange = () => {};
  useEffect(() => {
    axios.get("https://shielded-basin-22580.herokuapp.com").then((res) => setfood(res.data));
  }, []);
  let [total, settotal] = React.useState(0);
  const stotal = useSelector((store) => store.total);
  const dispatch = useDispatch();
  console.log(stotal);
  return (
    <div>
      <div className="left">
        <img
          className="banner"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1641974027911_728x100.png"
        ></img>
        <div className="food">
          {food.map((e) => {
            return (
              <div key={e.id} className="singlefood">
                <img src={e.food_image}></img>
                <div className="fname">{e.food_name}</div>
                <div className="rs">
                  Rs{e.food_price}
                  <span>
                    <button
                      onClick={() => {
                        settotal(total + e.food_price);
                      }}
                    >
                      Add
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <div className="summeryPart">
          <div>Booking Summery</div>
          <div className="categories">
            <div style={{ textTransform: "uppercase" }}>500</div>
            {/* <div>{booking_details.silver.length + booking_details.platinium.length} Ticket(s)</div> */}
          </div>
          <span>AUDI 5</span>
          {/* <div className={styles.categories}>
                    <div style={{fontSize:'12px', lineHeight:'25px'}}>Internet handeling fees</div>
                    <div>Rs 28.00</div>
                </div> */}
          <div className="line"></div>
          <div className="categories">
            <div>Sub total</div>
            <div>Rs 1</div>
          </div>

          <div className="charity">
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input type="checkbox" onChange={handleChange} />
                <img
                  src="https://in.bmscdn.com/webin/common/icons/bookasmile-logo.svg"
                  alt=""
                />
              </div>
              <div>Rs 1</div>
            </div>
            <div style={{ fontSize: "12px", padding: "10px 20px" }}>
              <div>Rs. 1 will be added to your transaction as a donation.</div>
              <div>Re.1/1 Ticket</div>
            </div>
          </div>

          <div
            style={{ fontSize: "12px", margin: "0 30px", fontWeight: "600" }}
          >
            Your current State is <a href="">{city}</a>
          </div>
          <div className="total">
            <div>Amount Payable</div>
            <div>Rs {stotal + total}</div>
          </div>
          {/* <h3 className={styles.ticketType}>Select Ticket Type</h3> */}

          <div className="cancellation_policy">
            You can cancel the tickets 20 min(s) before the show. Refunds will
            be done according to <a href="">Cancellation Policy</a>
          </div>
        </div>
        <Link to="/payment">
          <button className="sprice" onClick={() => dispatch(addtotal(total))}>
            Pay Rs {stotal + total}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SecondSection;
