import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';

// import Loogin from "../firebase/login"

class Login extends React.Component {
  
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.name="Make Payment"
  }
  handlemodel() {
    this.setState({ show: !this.state.show });
  }
  

  render() {
    return (
      <div>
        <button id="spayment"
          onClick={() => {
            this.handlemodel();
          }}
        >
       {this.name}
        </button>
        <Modal className="modal-xl" show={this.state.show}>
          <div>
            <Modal.Header className="body1">
             Successfully Booked !
              <button
                onClick={() => {
                  this.handlemodel();
                }}
              >
                close
              </button>
            </Modal.Header>
            <Modal.Body className="bodylogin">
             
                        <div className="success">
                         <img src="https://www.cntraveller.in/wp-content/themes/cntraveller/images/check-circle.gif" alt="loading..." />
                        </div>
              <br></br>
              <Link to="/">
                <button className="slogin"><DoneIcon></DoneIcon>Successfully Booked
                </button>
              </Link>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
