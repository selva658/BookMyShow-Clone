import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";

 class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.location = "Select ▼";
  }
  handlemodel() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.handlemodel();
          }}
        >
          {this.location}
        </button>
        <Modal className="modal-xl" show={this.state.show}>
          <div>
            <Modal.Header className="body1">
              Citys
              <button
                onClick={() => {
                  this.handlemodel();
                }}
              >
                close
              </button>
            </Modal.Header>
            <Modal.Body className="body">
              <img
                onClick={() => {
                  this.location = "Mumbai";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"
              ></img>
              <img
                onClick={() => {
                  this.location = "NCR";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/NCR.png"
              ></img>
              <img
                onClick={() => {
                  this.location = "Bangaluru";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png"
              ></img>
              <img
                onClick={() => {
                  this.location = "Hyderabad";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png"
              ></img>
              <img
                onClick={() => {
                  this.location = "Chandigarh";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png"
              ></img>
              <img
                onClick={() => {
                  this.location = "Ahmedabad";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/chd.png"
              ></img>
              <img
                onClick={() => {
                  this.location = "Chennai";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png"
              ></img>
              <img
                onClick={() => {
                  this.location = "Pune";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/chen-selected.png"
              ></img>
              <img
                onClick={() => {
                  this.location = "Kolkata";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png"
              ></img>
              <img
                onClick={() => {
                  this.location = "Kochi";
                  this.handlemodel(false)
                }}
                src="https://in.bmscdn.com/m6/images/common-modules/regions/koch.png"
              ></img>
            </Modal.Body>
            <Modal.Footer className="scity">
              <p>see more</p>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Popup;
