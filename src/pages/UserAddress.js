import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Media,
  Nav,
  NavItem,
  Card,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";

import Navbar from "../component/NavProfileBar";
//import style
import "../assets/style/style.css";

import profileAction from "../redux/actions/profile";

export default function Address() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileAction.getProfile(token));
  }, [dispatch, token]);

  return (
    <React.Fragment>
      <Navbar />
      <div className="d-flex">
        <div className="sidebar">
          <div className="justify-content-center">
            <Media>
              <Media left>
                <Media
                  className="rounded-circle m-3"
                  object
                  src="https://via.placeholder.com/50"
                />
              </Media>
              <Media body>
                <div className="strong mt-3">Media heading</div>
                <div className="text-muted small">
                  <FaPencilAlt />
                  Edit profile
                </div>
              </Media>
            </Media>
            <Nav vertical className="pl-3">
              <NavItem>
                <Media className="align-items-center">
                  <Media left>
                    <Media
                      className="rounded-circle"
                      object
                      src="https://via.placeholder.com/25"
                    />
                  </Media>
                  <Media body className="ml-2">
                    <Link to="/profile">edit profile</Link>
                  </Media>
                </Media>
              </NavItem>
            </Nav>
            <Nav vertical className="pl-3">
              <NavItem>
                <Media className="align-items-center">
                  <Media left>
                    <Media
                      className="rounded-circle"
                      object
                      src="https://via.placeholder.com/25"
                    />
                  </Media>
                  <Media body className="ml-2">
                    <Link to="/address">address</Link>
                  </Media>
                </Media>
              </NavItem>
            </Nav>
          </div>
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
