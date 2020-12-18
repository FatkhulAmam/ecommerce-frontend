import React, { Component } from "react";
import { connect } from "react-redux";
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

class CategoryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getCategoryDetail(id);
  }

  render() {
    const url = "http://localhost:8180/";
    const {
      isLoading,
      categoryProduct,
      isError,
      alertMsg,
    } = this.props.product;
    return (
      <>
        <Navbar />
        <Container><Row>
            {!isLoading &&
              !isError &&
              categoryProduct.length !== 0 &&
              categoryProduct.map((item) => {
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
  getCategoryDetail: productAction.getCategoryDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail)
