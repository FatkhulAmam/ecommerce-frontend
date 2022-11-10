import React, { Component } from "react";
import Navbar from "../component/NavBar";
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import imgDef from "../assets/image/bgProduct.png";
import productAction from "../redux/actions/product";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      category: "",
      description: "",
    };
  }

  componentDidMount() {
    document.title= 'Sell Product Belanja Online'
  }
  

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerSubmit = async (event) => {
    const token = localStorage.getItem("token")
    event.preventDefault();
    const form = new FormData();
    form.append("name", this.state.name);
    form.append("price", this.state.price);
    form.append("category", this.state.category);
    form.append("description", this.state.description);
    await productAction.addProduct(token, form)
    console.log(form);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container>
          <div className="mt-4">
            <Card>
              <CardBody>
                <h3 className="mt-3 mb-3 font-weight-bold col-sm-10">
                  My Product
                </h3>
                <Form>
                  <FormGroup row>
                    <Label for="input-name" md={2} sm={3}>
                      Pick Image:{" "}
                    </Label>
                    <Col>
                      <Label>
                        <img src={imgDef} alt="product-img" className="mb-3" />
                        <Input
                          style={{ display: "none" }}
                          type="file"
                          accept=".jpeg, .jpg, .png"
                        />
                      </Label>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="input-name" md={2} sm={3}>
                      Product:{" "}
                    </Label>
                    <Col>
                      <Input
                        type="text"
                        name="name"
                        id="input-name"
                        onChange={this.handlerChange}
                      ></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="input-price" md={2} sm={3}>
                      Price:{" "}
                    </Label>
                    <Col>
                      <Input
                        type="number"
                        name="price"
                        id="input-price"
                        onChange={this.handlerChange}
                      ></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="category" md={2} sm={3}>
                      Category
                    </Label>
                    <Col md={10} sm={9}>
                      <Input
                        type="select"
                        name="category"
                        id="category"
                        onChange={this.handlerChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="desc" md={2} sm={3}>
                      Description
                    </Label>
                    <Col md={10} sm={9}>
                      <Input
                        type="textarea"
                        name="description"
                        id="desc"
                        onChange={this.handlerChange}
                      ></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={10}></Col>
                    <Col md={2}>
                      <Button
                        onClick={this.handlerSubmit}
                        value="add"
                        className="btn btn-success"
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
