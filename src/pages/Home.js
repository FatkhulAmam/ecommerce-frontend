import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "react-elastic-carousel";
import Navbar from "../component/NavBar";
import "../assets/style/style.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";
import { Link } from "react-router-dom";

// import redux
import productAction from "../redux/actions/product";

//import component
import CardProduct from "../component/CardProduct";

// import asset image
import carousel1 from "../assets/image/corou1.png";
import carousel2 from "../assets/image/corou2.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2 },
];

class Home extends Component {

  componentDidMount() {
    this.props.getProduct();
    this.props.getCategory();
  }
  render() {
    const url = process.env.REACT_APP_BACKEND_URL;
    const {
      isLoading,
      data,
      isError,
      alertMsg,
      dataCategory,
    } = this.props.product;
    return (
      <>
        <Navbar />
        <div className="mt-3">
          <Carousel breakPoints={breakPoints}>
            <img src={carousel1} alt="caroucel one" />
            <img src={carousel2} alt="caroucel two" />
            <img src={carousel1} alt="caroucel three" />
            <img src={carousel2} alt="caroucel four" />
            <img src={carousel1} alt="caroucel five" />
            <img src={carousel2} alt="caroucel six" />
          </Carousel>
        </div>
        <Container className="mt-4">
          <div className="h3 font-weight-bold">Category</div>
          <span className="text-secondary small">
            what are you curently looking for
          </span>
          <Row>
            {!isLoading &&
              !isError &&
              dataCategory.length !== 0 &&
              dataCategory.map((item) => {
                return (
                  <Link to={`/category/product/${item.id}`}>
                    <Col>
                      <Card className="category-card mb-5">
                        <CardBody className="flex justify-content-center align-item-center">
                          <CardTitle>
                            <h3>{item.category_name}</h3>
                          </CardTitle>
                        </CardBody>
                      </Card>
                    </Col>
                  </Link>
                );
              })}
          </Row>
          <h3 className="font-weight-bold">New</h3>
          <span className="text-secondary small">you never seem it before</span>
          <Row className="mb-4">
            {!isLoading &&
              !isError &&
              data.length !== 0 &&
              data.map((item) => {
                return (
                  <CardProduct
                    productId={item.id}
                    productName={item.name}
                    productCategory={item.category_name}
                    productPrice={item.price}
                    productImage={url + item.url}
                  />
                );
              })}
          </Row>
          {isLoading && !isError && <div>Loading</div>}
          {isError && alertMsg !== "" && <div>{alertMsg}</div>}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product,
});

const mapDispatchToProps = {
  getProduct: productAction.getData,
  searchAction: productAction.searchData,
  getDetail: productAction.getDetailById,
  getCategory: productAction.getCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
