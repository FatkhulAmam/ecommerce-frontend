import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Media,
  Nav,
  NavItem,
  Card,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaSignOutAlt } from "react-icons/fa";

import Navbar from "../component/NavProfileBar";
//import style
import "../assets/style/style.css";
// import image
import EditSvg from "../assets/image/userDef.svg";
import MapPin from "../assets/image/map-pin.svg";
import Clipbord from "../assets/image/clipboard.svg";

import profileAction from "../redux/actions/profile";

export default function Address() {
  const token = useSelector((state) => state.auth.token);
  const { data } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const url = "http://localhost:8180/";
  const [avatar, setAvatar] = useState("");
  const [user_name, setName] = useState("");

  useEffect(() => {
    if (data.length) {
      setName(data[0].user_name);
      setAvatar(data[0].photo);
    }
  }, [data]);

  useEffect(() => {
    dispatch(profileAction.getAddress(token));
  }, [dispatch, token]);

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
                    src={url + avatar}
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
                        edit profile
                      </Media>
                    </Media>
                  </Link>
                </NavItem>
                <NavItem className="nav-item">
                  <Link to="/user/address">
                    <Media className="align-items-center">
                      <Media
                        left
                        className="pin-img-wrap d-flex justify-content-center"
                      >
                        <img src={MapPin} alt="mapPin" />
                      </Media>
                      <Media body className="ml-2">
                        address
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
            <div className="heading h3">Choose Another Address</div>
            <div className="text-muted small">
              add or change address rescipients
            </div>
            <hr />
            <Card></Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
