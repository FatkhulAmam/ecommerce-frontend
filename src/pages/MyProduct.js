import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import "../assets/style/style.css";

import Navbar from "../component/NavBar";
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
    const url = process.env.REACT_APP_BACKEND_URL;
    const { data } = await axios.get(`${url}product`);
    this.setState({ data });
  };

  detailProduct = async (id) => {
    const url = process.env.REACT_APP_BACKEND_URL;
    const { data } = await axios.get(`${url}product/${id}`);
    this.setState({ modalOpen: true, Product: data.data }, () => {});
  };

  deleteProduct = async (id) => {
    const url = process.env.REACT_APP_BACKEND_URL;
    await axios.delete(`${url}product/${id}`);
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
          <h1 className="mt-3 mb-5 font-weight-bold">My Product</h1>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Action</th>
              </tr>
            </thead>
            {Object.keys(data).length &&
              data.data.map((item) => (
                <>
                  <tbody>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>
                        <Button
                          className="bg-success"
                          onClick={() => this.detailProduct(item.id)}
                        >
                          Detail
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
          </Table>
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
        <div className="row justify-content-center">
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink first href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink last href="#" />
            </PaginationItem>
          </Pagination>
        </div>
      </>
    );
  }
}
