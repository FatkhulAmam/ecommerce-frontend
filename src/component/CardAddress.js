import React, { Component } from 'react'
import {
  Card,
  CardTitle,
  CardText,
} from "reactstrap";

export default class CardAddress extends Component {
  render() {
    const {userName,userAddress,userHome, postalCode, userPhone} = this.props
    return (
      <Card className="pt-4 pl-3 mt-4">
        <CardTitle className="h6 font-weight-bold">{userName}</CardTitle>
        <CardText>{userAddress}, {userHome}, {postalCode}, phone 0{userPhone}</CardText>
        <CardText className="text-danger mb-3 font-weight-bold">Change Address</CardText>
      </Card>
    )
  }
}
