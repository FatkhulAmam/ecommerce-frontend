import React, { Component } from 'react';
import axios from 'axios';
import {
  Container,
  Row, Col,
  Card, CardBody, CardTitle, CardSubtitle, CardImg,
  Modal, ModalHeader, ModalBody, ModalFooter, Button,
} from 'reactstrap';

import Navbar from '../component/NavProfileBar';

import bgProduct from '../assets/image/bgProduct.png';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      modalOpen: false,
      openedProduct: '',
    };
  }

  async componentDidMount() {
    const data = await axios.get('http://localhost:8180/product');
    this.setState({ data });
  }

  render() {
    const { data, modalOpen, openedProduct } = this.state;
    return (
      <>
        <Navbar />
        <Container>
          <Row>
            {Object.keys(data).length && data.data.data.map((item) => (
              <Col className="mt-4">
                <Card className="card-home shadow-sm">
                  <CardImg className="default-img" src={bgProduct} />
                  <CardBody>
                    <CardTitle><h5>{item.name}</h5></CardTitle>
                    <CardSubtitle className="text-danger mb-2">{item.price}</CardSubtitle>
                    <CardSubtitle><h6>{item.category_name}</h6></CardSubtitle>
                    <Button onClick={() => this.openModal(item.url)}>detail</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Modal isOpen={modalOpen}>
          <ModalHeader>Detail Product</ModalHeader>
          <ModalBody>{openedProduct}</ModalBody>
          <ModalFooter>
            <Button onClick={() => this.setState({ modalOpen: false })}>close</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
