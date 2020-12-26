import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Col,
  Input,
  Row,
  Media,
  Label,
  Button,
  Nav,
  NavItem,
  Modal,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaSignOutAlt } from "react-icons/fa";

// import image
import EditSvg from "../assets/image/userDef.svg";
import MapPin from "../assets/image/map-pin.svg";
import Clipbord from "../assets/image/clipboard.svg";
import user from "../assets/image/avatar.png";

import Navbar from "../component/NavBar";
//import style
import "../assets/style/style.css";

import profileAction from "../redux/actions/profile";

export default function Profile() {
  const { data } = useSelector((state) => state.profile);
  const profileIndex = useSelector((state) => state.profile);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const url = "http://localhost:8180/";

  const [modal, setModal] = useState(false);
  const modalOpen = () => setModal(!modal);
  const [user_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [avatar, setAvatar] = useState("");
  // const uploadFile = React.useRef()

  useEffect(() => {
    if (data.length) {
      setName(data[0].user_name);
      setEmail(data[0].email);
      setPhone(data[0].phone);
      setGender(data[0].gender);
      setBirth(data[0].birth);
      setAvatar(data[0].photo);
    }
  }, [data]);
  useEffect(() => {
    dispatch(profileAction.getProfile(token));
  }, [dispatch, token]);

  const onChangeProfile = async () => {
    const dataProfile = {
      user_name,
      email,
      phone,
      gender,
      birth,
    };
    await dispatch(profileAction.updateProfile(token, dataProfile));
    modalOpen();
  };

  const onLogout = () => {
    localStorage.clear();
  };

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
                    src={avatar ? url + avatar : user}
                  />
                </Media>
                <Media body>
                  <div className="font-weight-bold mt-3">{user_name}</div>
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
                    <Link to="/" onClick={onLogout}>
                    <Media className="align-items-center">
                      <Media
                        left
                        className="d-flex justify-content-center"
                      >
                      <FaSignOutAlt color="#8e8e8e" size={22} />
                      </Media>
                      <Media body className="ml-2">
                        Logout
                      </Media>
                    </Media>
                  </Link>
                </NavItem>
              </Nav>
            </div>
          </aside>
        </div>
        <div className="d-flex content p-5" sm="9">
          <div className="profile-edit shadow p-3">
            <div className="heading h3 font-weight-bold">My profile</div>
            <div className="text-muted small">
              manage your profile information
            </div>
            <hr />
            <Row>
              <Col md={8}>
                <Row>
                  <Col className="text-right mt-3" md={4}>
                    Name
                  </Col>
                  <Col className="mb-3 mt-2" md={8}>
                    <Input
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      value={user_name}
                    />
                  </Col>
                  <Col className="text-right" md={4}>
                    Email
                  </Col>
                  <Col className="mb-3" md={8}>
                    <Input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      value={email}
                    />
                  </Col>
                  <Col className="text-right" md={4}>
                    Phone Number
                  </Col>
                  <Col className="mb-3" md={8}>
                    <Input
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                      value={phone}
                    />
                  </Col>
                  <Col className="text-right" md={4}>
                    Gender
                  </Col>
                  <Col className="mb-3" md={8}>
                    <div className="pl-3">
                      {["male", "female"].map((item, index) => {
                        return (
                          <Label className={index === 0 ? "ml-1" : "ml-5"}>
                            <Input
                              onChange={() => setGender(item)}
                              name="gender"
                              type="radio"
                              checked={item === gender}
                              value={item}
                            />
                            <span>{item}</span>
                          </Label>
                        );
                      })}
                    </div>
                  </Col>
                  <Col className="text-right" md={4}>
                    Date of Birth
                  </Col>
                  <Col className="mb-3" md={8}>
                    <Input
                      onChange={(e) => setBirth(e.target.value)}
                      type="text"
                      value={birth}
                    />
                  </Col>
                  <Col md={4} />
                  <Col md={8}>
                    <Button
                      className="rounded-pill px-4"
                      color="success"
                      type="submit"
                      onClick={onChangeProfile}
                    >
                      save
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <Media className="flex-column align-items-center">
                  <Media top>
                    <Media
                      className="rounded-circle"
                      src="https://via.placeholder.com/125"
                    />
                  </Media>
                  <Media body>
                    <Label className="btn-success pl-3 pt-2 pb-2 pr-3 mt-3 rounded-pill">
                      <span>Select File</span>
                      <Input
                        style={{ display: "none" }}
                        type="file"
                        accept=".jpeg, .jpg, .png"
                      />
                    </Label>
                  </Media>
                </Media>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Modal isOpen={modal}>
        <ModalBody>{profileIndex.message}</ModalBody>
        <div className="d-flex justify-content-end">
          <Button
            color="secondary"
            onClick={modalOpen}
            className="modalBtn m-3"
          >
            OK
          </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
