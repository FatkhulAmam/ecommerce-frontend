import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../component/NavSearchBar";
import "../assets/style/style.css";
import {
  Container,
  Row,
} from "reactstrap";
// import redux
import productAction from "../redux/actions/product";

//import component
import CardProduct from "../component/CardProduct"

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
  getCategoryDetail: productAction.getCategoryDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail)
