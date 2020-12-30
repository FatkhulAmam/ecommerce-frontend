import React, { Component } from "react";
import { Container, Row, Button, Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import Navbar from "../component/NavBar";
import NumberFormat from "react-number-format";

import bgDefault from "../assets/image/bgProduct.png";
import Star from "../assets/image/star.png";

//import component
import CardProduct from "../component/CardProduct"

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
    const url = "http://54.172.55.29:8180/";
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
              <h3 className="font-weight-bold">{dataDetail.name}</h3>
              <p>Toko Serba Punya</p>
              <Row>
                <img className="star-detail ml-3" src={Star} />
                <img className="star-detail" src={Star} />
                <img className="star-detail" src={Star} />
                <img className="star-detail" src={Star} />
                <img className="star-detail mr-1" src={Star} />
                <text className="star-detail-num">(10)</text>
              </Row>
              <h5>Harga</h5>
              <h4 className="price-tag font-weight-bold">
                <NumberFormat
                  value={dataDetail.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rp. "}
                />
              </h4>
              <h5>color</h5>
                <Button className="btn-color rounded-circle"/>
              <Row className="ml-2">
                <div>
                  <h5>size </h5>
                  <Row>
                    <Button className="btn-plus-order rounded-circle">+</Button>
                    <p className="mt-3">1</p>
                    <Button className="btn-min-order rounded-circle">-</Button>
                  </Row>
                </div>
                <div>
                  <h5 className="ml-4">count</h5>
                  <Row className="ml-4">
                    <Button className="btn-plus-order rounded-circle">+</Button>
                    <p className="mt-3">1</p>
                    <Button className="btn-min-order rounded-circle">-</Button>
                  </Row>
                </div>
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
          <h4 className="mt-5 font-weight-bold">Informasi Product</h4>
          <h5 className="mt-4 font-weight-bold">condition</h5>
          <h6 className="text-danger">New</h6>
          <h5 className="mt-4 font-weight-bold">description</h5>
          <p>{dataDetail.description}</p>
          <h4 className="mt-4 font-weight-bold">Product Review</h4>
          <hr />
          <h4>You can also like this</h4>
          <CardProduct />
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
  getCategoryDetail: productAction.getCategoryDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
