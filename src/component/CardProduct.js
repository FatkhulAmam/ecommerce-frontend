import React, { Component } from "react";
import { NumericFormat } from 'react-number-format';
import "../assets/style/style.css";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
} from "reactstrap";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Star from  "../assets/image/star.png"; 

export default class CardProduct extends Component {
  static get propTypes() { 
    return { 
      productId: PropTypes.string, 
      productImage: PropTypes.string,
      productName: PropTypes.string, 
      productCategory: PropTypes.string ,
      productPrice: PropTypes.string, 
    }; 
  }
  render() {
    return (
      <div>
        <Link to={`/product/${this.props.productId}`}>
          <Col className="mt-4 ml-2">
            <Card className="card-home shadow-sm">
              <CardImg className="default-img" src={this.props.productImage}/>
              <CardBody>
                <CardTitle>
                  <text className="product-name font-weight-bold">
                    {this.props.productName} - {this.props.productCategory}
                  </text>
                </CardTitle>
                <CardSubtitle className="text-danger mb-2">
                  <NumericFormat
                    value={this.props.productPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Rp. "}
                  />
                </CardSubtitle>
                <CardSubtitle>
                  <text className="categoryText">Zalora Cloth</text>
                </CardSubtitle>
                <Row>
                  <CardImg className="star ml-3" src={Star} />
                  <CardImg className="star" src={Star} />
                  <CardImg className="star" src={Star} />
                  <CardImg className="star" src={Star} />
                  <CardImg className="star mr-1" src={Star} />
                  <text className="star-num">(10)</text>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Link>
      </div>
    );
  }
}
