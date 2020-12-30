import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import "../assets/style/style.css";

import Navbar from "../component/NavBar";

import bgProduct from "../assets/image/bgProduct.png";
// import product from '../redux/actions/product';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      modalOpen: false,
      Product: {
        id: "",
        name: "",
        price: "",
        category: "",
        description: "",
      },
    };
  }

  openModal = async (url) => {
    // const {data} = await axios.get(url)
    console.log(url);
  };

  async componentDidMount() {
    await this.getData();
  }

  getData = async () => {
    const { data } = await axios.get("http://54.172.55.29:8180/product");
    this.setState({ data });
  };

  detailProduct = async (id) => {
    const { data } = await axios.get(`http://54.172.55.29:8180/product/${id}`);
    this.setState({ modalOpen: true, Product: data.data }, () => {});
  };

  deleteProduct = async (id) => {
    await axios.delete(`http://54.172.55.29:8180/product/${id}`);
    this.setState(
      {
        modalOpen: false,
      },
      () => {
        this.getData();
      }
    );
  };

  render() {
    const { data, modalOpen, Product } = this.state;
    return (
      <>
        <Navbar />
        <Container>
          <Row>
            {Object.keys(data).length &&
              data.data.map((item) => (
                <Col className="mt-4">
                  <Card className="card-home shadow-sm">
                    <CardImg className="default-img" src={bgProduct} />
                    <CardBody>
                      <CardTitle>
                        <h5>{item.name}</h5>
                      </CardTitle>
                      <CardSubtitle className="text-danger mb-2">
                        {item.price}
                      </CardSubtitle>
                      <CardSubtitle>
                        <h6>{item.category_name}</h6>
                      </CardSubtitle>
                      <Button onClick={() => this.detailProduct(item.id)}>
                        detail
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
          </Row>
          <Modal isOpen={modalOpen}>
            <ModalBody>
              <div className="h2">{Product.name}</div>
              <div>{Product.price}</div>
              <div>{Product.category}</div>
              <div>{Product.description}</div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => this.setState({ modalOpen: false })}>
                cancel
              </Button>
              <Button
                onClick={() => this.deleteProduct(Product.id)}
                className="bg-danger"
              >
                delete
              </Button>
              <Link to={"/edit/" + Product.id}>
                <Button className="bg-success">edit</Button>
              </Link>
            </ModalFooter>
          </Modal>
        </Container>
      </>
    );
  }
}
