import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {
  Media,
  Nav,
  NavItem,
  Card,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaSignOutAlt } from "react-icons/fa";

import Navbar from "../component/NavBar";
import CardAddress from "../component/CardAddress";
//import style
import "../assets/style/style.css";
// import image
import EditSvg from "../assets/image/userDef.svg";
import MapPin from "../assets/image/map-pin.svg";
import Clipbord from "../assets/image/clipboard.svg";
import profileAction from "../redux/actions/profile";
import user from "../assets/image/avatar.png";

class Address extends Component {
  constructor(props) {
  super(props)
    this.state= {
      avatar: "",
      user_name: "",
    }
  }

  componentWillMount() {
    const token = localStorage.getItem("token")
    const id = this.props.match.params.id
    this.props.getAddressId(token, id)
    const { isLoading, isError, dataAddress, message, data, dataAddressById } = this.props.getProfile;
    console.log(dataAddressById);
    console.log("amam");
  }

  // componentDidMount() {
  //   const token = localStorage.getItem("token")
  //   const id = this.props.match.params.id
  //   this.props.getAddressId(token, id)
  //   const { isLoading, isError, dataAddress, message, data, dataAddressById } = this.props.getProfile;
  //   console.log(dataAddressById);
  //   console.log("amam");
  // }
  
  
  render() {
    const url = "http://localhost:8180/";
    const { isLoading, isError, dataAddress, message, data, dataAddressById } = this.props.getProfile;
    return (
      <React.Fragment>
        <Navbar />
        <div className="d-flex">
          <div className="sidebar">
            <aside className="row justify-content-center">
              <div>
                <Media className="mt-3">
                  <Media left>
                    <Media
                      className="rounded-circle m-3 side-img"
                      object
                      src={
                        data[0].photo
                          ? url + data[0].photo
                          : user
                      }
                    />
                  </Media>
                  <Media body>
                    <div className="font-weight-bold mt-3">
                      {this.state.user_name}
                    </div>
                    <div className="text-muted row mt-1 ml-1">
                      <FaPencilAlt />
                      <p className="ml-1 edit-text">Ubah profile</p>
                    </div>
                  </Media>
                </Media>
                <Nav vertical className="pl-5">
                  <NavItem className="nav-item">
                    <Link to="/profile">
                      <Media className="align-items-center">
                        <Media
                          left
                          className="edit-img-wrap d-flex justify-content-center"
                        >
                          <img src={EditSvg} alt="edit" />
                        </Media>
                        <Media body className="ml-2">
                          My account
                        </Media>
                      </Media>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-item">
                    <Link to="/profile/address">
                      <Media className="align-items-center">
                        <Media
                          left
                          className="pin-img-wrap d-flex justify-content-center"
                        >
                          <img src={MapPin} alt="mapPin" />
                        </Media>
                        <Media body className="ml-2">
                          Address
                        </Media>
                      </Media>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-item">
                    <Link to="/user/address">
                      <Media className="align-items-center">
                        <Media
                          left
                          className="clip-img-wrap d-flex justify-content-center"
                        >
                          <img src={Clipbord} alt="clip" />
                        </Media>
                        <Media body className="ml-2">
                          My Order
                        </Media>
                      </Media>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-item">
                    <Media className="align-items-center">
                      <Media left className="d-flex justify-content-center">
                        <FaSignOutAlt color="#8e8e8e" size={22} />
                      </Media>
                      <Media body className="ml-2">
                        Logout
                      </Media>
                    </Media>
                  </NavItem>
                </Nav>
              </div>
            </aside>
          </div>
          <div className="d-flex content p-5" sm="9">
            <div className="profile-edit shadow p-3 ">
              <div className="heading h3 font-weight-bold">
                Choose Another Address
              </div>
              <div className="text-muted small">
                add or change address rescipients
              </div>
              <hr />
              <div className="ml-5 mr-5 pb-5">
                <Card className="d-flex justify-content-center align-items-center card-add">
                  <CardTitle className="h5 text-muted">
                    Add New Address
                  </CardTitle>
                </Card>
                {!isLoading &&
                  !isError &&
                  dataAddress.length !== 0 &&
                  dataAddress.map((item) => {
                    return (
                      <CardAddress
                        addressId={item.id}
                        userName={item.recipients_name}
                        userAddress={item.address}
                        userHome={item.home}
                        postalCode={item.postal_code}
                        userPhone={item.recipients_phone}
                      />
                    );
                  })}
                {isLoading && !isError && <div>Loading</div>}
                {isError && message !== "" && <div>{message}</div>}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Modal isOpen={true} className="modal-dialog-centered modal-lg">
            <ModalHeader className="row justify-content-center mt-3 ml-2 mr-2">
              <p className="font-weight-bold">Change My Address</p>
            </ModalHeader>
            <ModalBody>
              <label className="text-muted small mb-2">
                Save address as (ex: home address, office address)
              </label>
              <Input type="text" value="maamam"/>
              <div className="row justify-content-center">
                <div className="col">
                  <label className="text-muted small">Recipient's Name</label>
                  <Input
                    type="text"
                  />
                </div>
                <div className="col">
                  <label className="text-muted small">
                    Recipient's Telphone Number
                  </label>
                  <Input
                    type="number"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-2">
                <div className="col">
                  <label className="text-muted small">Address</label>
                  <Input
                    type="text"
                  />
                </div>
                <div className="col">
                  <label className="text-muted small">Postal Code</label>
                  <Input
                    type="number"
                  />
                </div>
              </div>
              <div>
                <label className="text-muted small mt-2">
                  City or Subdistrict
                </label>
                <Input
                  className="mb-5"
                  type="text"
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Link to="/profile/address">
                <Button color="secondary btn-modal m-3" >
                  Cancel
                </Button>
              </Link>{" "}
              <Button color="success btn-modal m-3">
                Save
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  getProfile: state.profile,
});

const mapDispatchToProps = {
  getAddressId: profileAction.getAddressById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);
