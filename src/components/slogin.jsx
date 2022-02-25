import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebase/firebase";
// import Loogin from "../firebase/login"

const data = JSON.parse(localStorage.getItem("username") ) || "Signin"
console.log(data);
class Login extends React.Component {
  
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.name=data
  }
  handlemodel() {
    this.setState({ show: !this.state.show });
  }
  

  render() {
    return (
      <div>
        <button
          style={{
            height: "3.5vh",
            width: "110%",
            backgroundColor: "#f84464",
            color: "white",
            border: "1px solid #f84464",
            borderRadius: "5px",
            marginTop: "1em",
            marginLeft: "10%",
            padding: "0",
            cursor: "pointer",
          }}
          id="signin"
          onClick={() => {
            this.handlemodel();
          }}
        >
         {this.name}
        </button>
        <Modal className="modal-xl" show={this.state.show}>
          <div>
            <Modal.Header className="body1">
              Get Started
              <button
                onClick={() => {
                  this.handlemodel();
                }}
              >
                close
              </button>
            </Modal.Header>
            <Modal.Body className="bodylogin">
              <Link to="">
                <button
                  onClick={() => {
                    const signIn = () => {
                      signInWithPopup(auth, provider)
                        .then((result) => {
                          //console.log(result.user.displayName);
                          localStorage.setItem("username",JSON.stringify(result.user.displayName))
                          this.handlemodel(false)
                          setAction(false);
                          
                          // ...
                        })
                        .catch((error) => {
                          console.log(error.message); // ...
                        });
                       
                    };
                 
                    signIn()
                     
                   // <Loogin signIn={signIn} action={action}/> 
                  }
                  }
                  className="slogin"
                >
                  <GoogleIcon></GoogleIcon> Continue with Google
                </button>
              </Link>
              <br></br>
              <Link to="">
                <button className="slogin">
                  <EmailIcon></EmailIcon> Continue with Email
                </button>
              </Link>
              <br></br>
              <Link to="">
                <button className="slogin">
                  <AppleIcon></AppleIcon> Continue with Apple
                </button>
              </Link>
              <p>I agree to terms & conditions &privacy policy</p>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
