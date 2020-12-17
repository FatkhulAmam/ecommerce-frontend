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

//import assets
import logo from "../assets/image/logo.svg";
import cart from "../assets/image/shoppingCart.svg";
import search from "../assets/image/Search.svg";
import filter from "../assets/image/filter.svg";

class NavSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      keyword: ''
    };
  }
  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSearch = () =>{
    this.props.searchAction(this.state.keyword)
  }
  render() {
    return (
      <Navbar expand="md" className="shadow-sm">
        <Container>
          <NavbarBrand>
            <img className="logo" src={logo} alt="logo brand" />
          </NavbarBrand>
          <Form>
            <ButtonGroup>
              <Input 
                className="search-box" placeholder="search..." 
                onChange={this.onChangeText} 
                name="keyword"></Input>
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
        </Container>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {
  searchAction: productAction.searchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavSearchBar);
