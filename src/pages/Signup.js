import React from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Form,
  Input,
  FormText,
  Alert,
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../assets/style/style.css";
import logo from "../assets/image/logo.svg";

//import action dispatch
import registerUser from "../redux/actions/register";

// eslint-disable-next-line react/prefer-stateless-function
class Register extends React.Component {
  state = {
    user_name: "",
    email: "",
    password: "",
  };

  register = (e) => {
    e.preventDefault();
    const { user_name, email, password } = this.state;
    const data = {
      user_name,
      email,
      password,
    };
    this.props.signUp(data);
  };

  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  componentDidMount() {
    console.log(this.props.registerData);
  }

  componentDidUpdate() {
    if (this.props.registerData.isRegister) {
      this.props.history.push("/login");
    }
  }

  render() {
    const { isError, message } = this.props.registerData;
    return (
      <>
        <div className="vh-100 d-flex">
          <Container className="d-flex align-items-center justify-content-center">
            <Form
              onSubmit={this.register}
              className="text-center col-sm-4 col-12"
            >
              <Alert
                color={isError ? "danger" : "success"}
                isOpen={isError || message !== ""}
              >
                {message}
              </Alert>
              <img alt="brand logo" src={logo} />
              <FormText className="text-center mb-5 mt-4">
                <h6>Please Sign up with your account</h6>
              </FormText>
              <ButtonGroup className="col-sm-8">
                <Button className="btn-custommer" style={{ width: 100 }}>
                  custommer
                </Button>
                <Button className="btn-seller" style={{ width: 100 }}>
                  seller
                </Button>
              </ButtonGroup>
              <Input
                onChange={this.onChangeText}
                type="text"
                className="mt-5"
                name="user_name"
                placeholder="name"
              />
              <Input
                onChange={this.onChangeText}
                type="email"
                className="mt-3"
                name="email"
                placeholder="email"
              />
              <Input
                onChange={this.onChangeText}
                type="password"
                className="mt-3 mb-4"
                name="password"
                placeholder="password"
              />
              <Button
                className="btn-auth col-sm-12 col-12 mb-4"
                style={{ width: 370 }}
              >
                Sign Up
              </Button>
              <p>
                already have an account?
                <Link to="/login"> login</Link>
              </p>
            </Form>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  registerData: state.register,
});
const mapDispatchToProps = {
  signUp: registerUser.addData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
