import React from "react";
import Navbar from "../component/NavigationBar";
import axios from "axios";
import qs from "querystring";
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class Edit extends React.Component {
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

  componentDidMount = async () => {
    document.title= 'Edit Product Belanja Online'
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:8180/product/${id}`);

    this.setState({
      id: res.data.data.id,
      name: res.data.data.name,
      price: res.data.data.price,
      category: res.data.data.category,
      description: res.data.data.description,
    });
  };

  handlerChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerSubmit = async (event) => {
    const url = process.env.REACT_APP_BACKEND_URL;
    event.preventDefault();
    await axios.put(
      `${url}product/${this.state.id}`,
      qs.stringify({
        name: this.state.name,
        price: this.state.price,
        category: this.state.category,
        description: this.state.description,
      })
    );
    this.props.history.push("/my_product");
  };

  render() {
    const { name, price, category, description } = this.state;
    return (
      <React.Fragment>
        <Navbar />
        <Container>
          <div className="mt-4">
            <Card>
              <CardBody>
                <h3>My Product</h3>
                <Form onSubmit={this.handlerSubmit}>
                  <FormGroup row>
                    <Label for="input-name" md={2} sm={3}>
                      Product:{" "}
                    </Label>
                    <Col>
                      <Input
                        type="text"
                        name="name"
                        id="input-name"
                        value={name}
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
                        value={price}
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
                        value={category}
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
                        value={description}
                        onChange={this.handlerChange}
                      ></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={10}></Col>
                    <Col md={2}>
                      <Input
                        type="submit"
                        value="edit"
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

export default Edit;
