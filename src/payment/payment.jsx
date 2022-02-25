import React from "react";
import "./payment.css";
import { addtotal } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
import Login from "./success";
import "./success.css"

const FirstSection = () => {
  const city = "Chennai";


  var todays = new Date();
var dd = String(todays.getDate()).padStart(2, '0');
var mm = String(todays.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = todays.getFullYear();
  
  todays=mm + '/' + dd + '/' + yyyy

  const handleChange = () => {};
  const stotal = useSelector((store) => store.total);
  return (
    <div>
      <div className="left">
        <div className="contact">
          <div>
            <span>Share your contact details</span>
          </div>
          <div className="contact_details">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Nobile number" />
            <button style={{ marginBottom: "-5px", color: "white" }}>
              continue
            </button>
          </div>
           {/* <img src="https://media3.giphy.com/media/zaqclXyLz3Uoo/200.webp?cid=ecf05e47w0citnrprd4j5lkl1yo1sodooglwhv6oqsrokd4i&rid=200.webp&ct=g" alt="loading..." /> */}
        </div>
        <div className="contact">
          <div>More Payment options</div>
          <div className="StoredCard">
            <div className="sidebar">
              <div>Quick pay</div>
              <div style={{ background: "white" }}>Credit / Debit card</div>
              <div>Net Banking</div>
              <div>Mobile wallet</div>
              <div>Gift Voucher</div>
              <div>UPI</div>
              <div>Redeem Points</div>
              <div>Credit Voucher</div>
            </div>
            <div className="cardDetails">
              <span>Enter your card details</span>
              <div className="sampleCard">
                <div style={{ fontSize: "13px", color: "gray" }}>
                  Card Number
                </div>
                <input
                  type="text"
                  placeholder="Enter Your Card Number"
                  value="4568 6749 7864 6543"
                />
                <input
                  type="text"
                  placeholder="Name on the card"
                  value="Selvakumar"
                />

                <div className="otherDetails">
                  <div>
                    <div style={{ fontSize: "13px", color: "gray" }}>
                      Expiry
                    </div>
                    <div style={{ display: "flex" }}>
                      <input type="text" placeholder="MM" value="06" />
                      <input type="text" placeholder="YY" value="23" />
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "13px", color: "gray" }}>CVV</div>
                    <div>
                      <input
                        style={{ width: "50px" }}
                        type="text"
                        placeholder="CVV"
                        value="933"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="payment">
                {/* <button onClick={() => {
                 

                }}>Make Payment</button> */}
                <Login></Login>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="summeryPart">
          <div>Order Summery</div>
          <div className="categories">
            <div style={{ textTransform: "uppercase" }}>Doctor Strange</div>
            {/* <div>{booking_details.silver.length + booking_details.platinium.length} Ticket(s)</div> */}
          </div>
          <span>English</span>
          <br></br>
          <span>D5,D6</span>
          <br></br>
          
          <span>{todays}</span>
          <br></br>
          <span>10.00pm</span>
          {/* <div className={styles.categories}>
                    <div style={{fontSize:'12px', lineHeight:'25px'}}>Internet handeling fees</div>
                    <div>Rs 28.00</div>
                </div> */}
          <div className="line"></div>
          <div className="categories">
            <div>Contribution to BookASmile</div>
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
            <div>Rs {stotal}</div>
          </div>
          {/* <h3 className={styles.ticketType}>Select Ticket Type</h3> */}

          <div className="cancellation_policy">
            You can cancel the tickets 20 min(s) before the show. Refunds will
            be done according to <a href="">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
