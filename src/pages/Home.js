import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "react-elastic-carousel";
import Navbar from "../component/NavSearchBar";
import "../assets/style/style.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
} from "reactstrap";
import { Link } from "react-router-dom";

// import redux
import productAction from "../redux/actions/product";

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
    const url = "http://localhost:8180/";
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
          <div className="h3">Category</div>
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
                      <Card className="category-card">
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
          <h3>New</h3>
          <span className="text-secondary small">you never seem it before</span>
          <Row>
            {!isLoading &&
              !isError &&
              data.length !== 0 &&
              data.map((item) => {
                return (
                  <Link to={`/product/${item.id}`}>
                    <Col className="mt-4">
                      <Card className="card-home shadow-sm">
                        <CardImg
                          className="default-img"
                          src={`${url}${item.url}`}
                        />
                        <CardBody>
                          <CardTitle>
                            <h5 className="product_name">{item.name}</h5>
                          </CardTitle>
                          <CardSubtitle className="text-danger mb-2">
                            {item.price}
                          </CardSubtitle>
                          <CardSubtitle>
                            <h6 className="product_name">
                              {item.category_name}
                            </h6>
                          </CardSubtitle>
                        </CardBody>
                      </Card>
                    </Col>
                  </Link>
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
