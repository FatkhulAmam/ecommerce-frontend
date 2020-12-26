import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Input,
  Form,
  Button,
  ButtonGroup,
} from "reactstrap";
import { Link } from "react-router-dom";

// import style
import "../assets/style/style.css";

// import redux action
import productAction from "../redux/actions/product";
import profileAction from "../redux/actions/profile";

//import assets
import logo from "../assets/image/logo.svg";
import cart from "../assets/image/shoppingCart.svg";
import search from "../assets/image/Search.svg";
import filter from "../assets/image/filter.svg";
import mail from "../assets/image/mail.svg";
import bell from "../assets/image/bell.svg";
import user from "../assets/image/avatar.png";

class NavSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      keyword: "",
    };
  }
  componentWillMount() {
    const token = localStorage.getItem("token")
    this.props.getProfileData(token)
    this.props.getAddressData(token)
  }
  
  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSearch = () => {
    this.props.searchAction(this.state.keyword);
  };
  render() {
    const {photo} = this.props.profile
    const isLogin = localStorage.getItem("isLogin")
      ? localStorage.getItem("isLogin")
      : false;
    return (
      <Navbar expand="md" className="shadow-sm">
        <Container>
          <NavbarBrand>
            <img className="logo" src={logo} alt="logo brand" />
          </NavbarBrand>
          <Form>
            <ButtonGroup>
              <Input
                className="search-box"
                placeholder="search..."
                onChange={this.onChangeText}
                name="keyword"
              ></Input>
              <Button className="bg-white btn-src" onClick={this.onSearch}>
                <img src={search} alt="search" />
              </Button>
            </ButtonGroup>
          </Form>
          <Nav>
            <NavItem className="ml-2">
              <NavLink href="#">
                <img src={filter} alt="bell logo" />
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler
            className="navbar-light"
            onClick={() =>
              this.setState({ navbarOpen: !this.state.navbarOpen })
            }
          />
          {isLogin === false ? (
            <Collapse navbar isOpen={this.state.navbarOpen}>
              <Nav navbar className="ml-auto">
                <NavItem className="mr-3">
                  <NavLink href="/cart">
                    <img src={cart} alt="bell logo" />
                  </NavLink>
                </NavItem>
                <NavItem className="mr-">
                  <NavLink href="#">
                    <Link to="/login">
                      <Button className="btn-nav rounded-pill text-white">
                        Login
                      </Button>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Link to="/signup">
                      <Button className="btn-nav rounded-pill text-white">
                        Signup
                      </Button>
                    </Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          ) : (
            <Collapse navbar isOpen={this.state.navbarOpen}>
              <Nav navbar className="ml-auto">
                <NavItem className="mr-3">
                  <Link to="/cart">
                    <img src={cart} alt="bell logo" />
                  </Link>
                </NavItem>
                <NavItem className="mr-3">
                  <Link to="#">
                    <img src={bell} alt="bell logo" />
                  </Link>
                </NavItem>
                <NavItem className="mr-3">
                  <Link to="/cart">
                    <img src={mail} alt="bell logo" />
                  </Link>
                </NavItem>
                <NavItem className="mr-3">
                  <Link to="/profile">
                    <img
                      className="rounded-circle avatar-nav"
                      src={user}
                      alt="avatar logo"
                    />
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          )}
        </Container>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.profile.data,
});
const mapDispatchToProps = {
  searchAction: productAction.searchData,
  getProfileData: profileAction.getProfile,
  getAddressData: profileAction.getAddress
};

export default connect(mapStateToProps, mapDispatchToProps)(NavSearchBar);
