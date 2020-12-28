import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

class CardAddress extends Component {
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
            to={`/profile/address/${addressId}`}
          >
            Change Address
          </Link>
        </Card>
      </>
    );
  }
}

export default CardAddress;
