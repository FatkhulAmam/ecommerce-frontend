import React, { Component } from "react";
import { Container, Row, Button, Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import Navbar from "../component/NavSearchBar";
import { Link } from "react-router-dom";

import bgDefault from "../assets/image/bgProduct.png";

// import redux
import productAction from "../redux/actions/product";
class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      amount: 1,
      modal: false,
    };
  }
  modalOpen = () => this.setState(!this.state.modal);
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetail(id);
  }

  onAddToCart = () => {
    const itemsId = this.props.match.params.id;
    const token = this.state.token;
    const amount = this.state.amount;
    const product = {
      itemsId,
      amount,
    };
    this.props.addToCart(token, product);
    if (this.props.product.isError === true) {
      this.modalOpen();
    }
  };

  render() {
    const url = "http://localhost:8180/";
    const { dataDetail } = this.props.product;
    return (
      <>
        <Navbar />
        <Container>
          <Row>
            <div className="product-img mt-4">
              <div>
                <img
                  className="one"
                  src={`${url}${dataDetail.url}`}
                  alt="img product one"
                />
                <img
                  className="two ml-3"
                  src={bgDefault}
                  alt="img product two"
                />
              </div>
              <div>
                <img
                  className="three mt-3"
                  src={bgDefault}
                  alt="img product three"
                />
                <img
                  className="four ml-3 mt-3"
                  src={`${url}${dataDetail.url}`}
                  alt="img product four"
                />
              </div>
            </div>
            <div className="product-detail mt-4 ml-3">
              <h2>{dataDetail.name}</h2>
              <p>toko</p>
              <p>rating</p>
              <p>harga</p>
              <h3>{dataDetail.price}</h3>
              <p>color</p>
              <Row className="ml-2">
                <h3>size </h3>
                <h3 className="ml-3">count</h3>
              </Row>
              <Row>
                <Button className="btn-chat rounded-pill ml-2">chat</Button>
                <Button
                  onClick={this.onAddToCart}
                  href="/cart"
                  className="btn-add rounded-pill ml-2"
                >
                  add to cart
                </Button>
                <Button className="btn-buy-now rounded-pill ml-2">
                  buy now
                </Button>
              </Row>
            </div>
          </Row>
          <h4 className="mt-5">Informasi Product</h4>
          <h5 className="mt-5">condition</h5>
          <h5 className="text-danger">New</h5>
          <h4 className="mt-4">description</h4>
          <p>{dataDetail.description}</p>
          <h4>Product Review</h4>
          <hr />
          <h4>You can also like this</h4>
        </Container>
        <Modal isOpen={this.state.modal}>
          <ModalBody>{this.props.product.message}</ModalBody>
          <div className="d-flex justify-content-end">
            <Button
              color="secondary"
              onClick={this.modalOpen}
              className="modalBtn m-3"
            >
              OK
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  product: state.product,
});

const mapDispatchToProps = {
  getDetail: productAction.getDetailById,
  addToCart: productAction.addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
