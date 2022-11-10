import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button,
  Input,
} from "reactstrap";
import PropTypes from 'prop-types';
import {NumericFormat} from "react-number-format";
import "../assets/style/style.css";
import { connect } from "react-redux";
import productAction from "../redux/actions/product";

class CartCard extends Component {
  static get propTypes() { 
    return { 
      cartId: PropTypes.string, 
      productPrice: PropTypes.string,
      productName: PropTypes.string, 
      productImage: PropTypes.string ,
      deleteCart: PropTypes.func, 
    }; 
  }
  render() {
    const token = localStorage.getItem("token");
    return (
      <div>
        <Card className="shadow-sm mt-3">
          <CardBody className="ml-4 row">
            <div className="col-sm-8 row align-items-center">
              <Input
                type="checkbox"
                onClick={() => this.props.deleteCart(token, this.props.cartId)}
              />
              <img
                className="img-cart rounded"
                src={this.props.productImage}
                alt="img-product"
              />
              <div className="ml-4">
                <CardTitle className="h5">{this.props.productName}</CardTitle>
                <CardSubtitle>nama toko</CardSubtitle>
              </div>
            </div>
            <div className="row col-sm align-items-center">
              <Button className="btn-plus rounded-circle">+</Button>
              <p className="counter-txt">1</p>
              <Button className="btn-min rounded-circle">-</Button>
            </div>
            <div className="col-sm">
              <p className="text-danger mr-2">
                <NumericFormat
                  value={this.props.productPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp. "}
                />
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {
  deleteCart: productAction.deleteCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
