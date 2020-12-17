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
import bgProduct from "../assets/image/bgProduct.png";

// import redux
import productAction from "../redux/actions/product";

// import asset image
import carousel1 from "../assets/image/corou1.png";
import carousel2 from "../assets/image/corou2.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1200, itemsToShow: 2 },
];

class Product extends Component {
  componentDidMount() {
    this.props.getProduct();
  }
  render() {
    const { isLoading, data, isError, alertMsg } = this.props.product;
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
          <h3>New</h3>
          <span className="text-secondary small">you never seem it before</span>
          <Row>
            {!isLoading &&
              !isError &&
              data.length !== 0 &&
              data.map((item) => {
                return (
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
                      </CardBody>
                    </Card>
                  </Col>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
