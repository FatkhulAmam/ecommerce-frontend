import React, { useEffect } from "react";
import {
  Container,
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
  Button,
  Row,
  Input,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/NavProfileBar";
import "../assets/style/style.css";
import CartAction from "../redux/actions/product";

import bgDefault from "../assets/image/bgProduct.png";

const Cart = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(CartAction.getCart(token));
  }, [dispatch, token]);
  const cartIndex = useSelector((state) => state.product);
  const { isLoading, isError, dataCart } = cartIndex;
  const url = "http://localhost:8180/";

  return (
    <div>
      <>
        <Navbar />
        <Container>
          <h1 className="mt-4">My Bag</h1>
          <Row>
            <div>
              <Card className="cart-check shadow-sm mt-3">
                <CardBody className="ml-3">
                  <Input type="checkbox" />
                  <p>
                    Select All item
                    <a href="/cart"> delete</a>
                  </p>
                </CardBody>
              </Card>
              {!isLoading &&
                !isError &&
                dataCart.length !== 0 &&
                dataCart.map((item) => {
                  return (
                    <Card className="shadow-sm mt-3">
                      <CardBody className="ml-4">
                        <Row>
                          <Input type="checkbox" />
                          <img
                            className="img-cart"
                            src={`${url}${item.url}`}
                            alt="img-product"
                          />
                          <div>
                            <CardTitle>{item.name}</CardTitle>
                            <CardSubtitle>nama toko</CardSubtitle>
                          </div>
                          <Button className="btn-plus rounded-circle">+</Button>
                          <p>1</p>
                          <Button className="btn-min rounded-circle">-</Button>
                          <p className="text-danger">{item.price}</p>
                        </Row>
                      </CardBody>
                    </Card>
                  );
                })}
            </div>
            <div>
              <Card className="card-buy shadow-sm mt-3 ml-4">
                <CardBody>
                  <CardTitle>Shopping summary</CardTitle>
                  <Row>
                    <CardSubtitle>Total Harga</CardSubtitle>
                    <p className="text-danger">price</p>
                  </Row>
                  <Button className="btn-buy rounded-pill">Buy</Button>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default Cart;
