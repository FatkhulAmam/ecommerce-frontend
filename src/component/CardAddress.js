import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class CardAddress extends Component {
  state = {
    modal: false,
  };
  modalOpen = () =>{this.setState({modal: !this.state.modal})}

  render() {
    const {
      addressId,
      userName,
      userAddress,
      userHome,
      postalCode,
      userPhone,
    } = this.props;
    return (
      <>
        <Card className="pt-4 pl-3 mt-4">
          <CardTitle className="h6 font-weight-bold">{userName}</CardTitle>
          <CardText>
            {userAddress}, {userHome}, {postalCode}, phone 0{userPhone}
          </CardText>
          <Link
            className="text-danger mb-3 font-weight-bold"
            onClick={this.modalOpen}
          >
            Change Address
          </Link>
        </Card>
        <div>
          <Modal
            isOpen={this.state.modal}
            className="modal-dialog-centered modal-lg"
          >
            <ModalHeader className="row justify-content-center mt-3 ml-2 mr-2">
              <p className="font-weight-bold">Change Address</p>
            </ModalHeader>
            <ModalBody>
              <label className="text-muted small mb-2">
                Save address as (ex: home address, office address)
              </label>
              <Input />
              <div className="row justify-content-center">
                <div className="col">
                  <label className="text-muted small">Recipient's Name</label>
                  <Input />
                </div>
                <div className="col">
                  <label className="text-muted small">
                    Recipient's Telphone Number
                  </label>
                  <Input />
                </div>
              </div>
              <div className="row justify-content-center mt-2">
                <div className="col">
                  <label className="text-muted small">Address</label>
                  <Input />
                </div>
                <div className="col">
                  <label className="text-muted small">Postal Code</label>
                  <Input />
                </div>
              </div>
              <div>
                <label className="text-muted small mt-2">
                  City or Subdistrict
                </label>
                <Input className="mb-5" />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary btn-modal m-3" onClick={this.modalOpen}>
                Cancel
              </Button>{" "}
              <Button color="success btn-modal m-3" onClick={this.modalOpen}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
  }
}
