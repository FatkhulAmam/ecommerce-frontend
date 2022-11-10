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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

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
  static get propTypes() { 
    return {
      searchAction: PropTypes.func, 
      dropdownOpen: PropTypes.func,
    }; 
  }
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      keyword: "",
      modal: false,
      dropdownOpen: false,
    };
  }
  // componentWillMount() {
  //   const token = localStorage.getItem("token");
  //   this.props.getProfileData(token);
  //   this.props.getAddressData(token);
  // }

  modalOpen = () => {
    this.setState({ modal: !this.state.modal });
  };
  onOpenDrop = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  onChangeText = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSearch = () => {
    this.props.searchAction(this.state.keyword);
  };
  render() {
    const isLogin = localStorage.getItem("isLogin")
      ? localStorage.getItem("isLogin")
      : false;
    return (
      <>
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
                <Button
                  onClick={() => {
                    this.setState({ modal: !this.state.modal });
                  }}
                  className="btn-filter"
                >
                  <img src={filter} alt="bell logo" />
                </Button>
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
        <Modal isOpen={this.state.modal} className="modal-dialog-centered">
          <ModalHeader>Filter</ModalHeader>
          <ModalBody>
            <p>Colors</p>
            <div className="row">
              <Button className="btn-color rounded-circle mr-3 ml-4" />
              <Button className="btn-color rounded-circle mr-3" />
              <Button className="btn-color rounded-circle mr-3" />
              <Button className="btn-color rounded-circle mr-3" />
            </div>
            <p>Sizes</p>
            <div className="row mb-3">
              <Button className="btn-size ml-4 mr-3">XS</Button>
              <Button className="btn-size mr-3">S</Button>
              <Button className="btn-size mr-3">M</Button>
              <Button className="btn-size mr-3">L</Button>
              <Button className="btn-size mr-3">XL</Button>
            </div>
            <p>Category</p>
            <div className="row mb-3">
              <Button className="btn-cat ml-4 mr-3">All</Button>
              <Button className="btn-cat mr-3">Women</Button>
              <Button className="btn-cat mr-3">Men</Button>
            </div>
            <div className="row mb-3">
              <Button className="btn-cat mr-3 ml-4">Boys</Button>
              <Button className="btn-cat mr-3">Girls</Button>
            </div>
            <p>Brand</p>
            <div>
              <Dropdown
                isOpen={this.props.dropdownOpen}
                toggle={() => {
                  this.setState(prevState => !prevState);
                }}
              >
                <DropdownToggle
                  tag="span"
                  data-toggle="dropdown"
                  aria-expanded={this.props.dropdownOpen}
                >
                  Choose your favorite brand
                </DropdownToggle>
                <DropdownMenu>
                  <div onClick={this.onOpenDrop}>Custom dropdown item</div>
                  <div onClick={this.onOpenDrop}>Custom dropdown item</div>
                  <div onClick={this.onOpenDrop}>Custom dropdown item</div>
                  <div onClick={this.onOpenDrop}>Custom dropdown item</div>
                </DropdownMenu>
              </Dropdown>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary btn-modal m-3" onClick={this.modalOpen}>
              Cancel
            </Button>{" "}
            <Button color="success btn-modal m-3">Apply</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.profile.data,
});
const mapDispatchToProps = {
  searchAction: productAction.searchData,
  getProfileData: profileAction.getProfile,
  getAddressData: profileAction.getAddress,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavSearchBar);
