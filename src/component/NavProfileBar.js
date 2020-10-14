import React from 'react'
import {
  Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Input, Form, Button, ButtonGroup
} from 'reactstrap'

// import style
import '../assets/style/style.css'

//import assets
import logo from '../assets/image/logo.svg'
import cart from '../assets/image/shoppingCart.svg'
import search from '../assets/image/Search.svg'
import filter from '../assets/image/filter.svg'
import mail from '../assets/image/mail.svg'
import bell from '../assets/image/bell.svg'
import user from '../assets/image/user.png'

class NavSearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarOpen: false
    }
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
              <Input className="search-box" placeholder="search..."></Input>
              <Button className="bg-white btn-src" type="submit"><img src={search} alt="search" /></Button>
            </ButtonGroup>
          </Form>
          <Nav>
            <NavItem className="ml-2">
              <NavLink href="#"><img src={filter} alt="bell logo" /></NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler className="navbar-light" onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })} />
          <Collapse navbar isOpen={this.state.navbarOpen} >
            <Nav navbar className="ml-auto">
              <NavItem className="mr-3">
                <NavLink href="/cart"><img src={cart} alt="bell logo" /></NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink href="/cart"><img src={bell} alt="bell logo" /></NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink href="/cart"><img src={mail} alt="bell logo" /></NavLink>
              </NavItem>
              <NavItem className="mr-3">
                <NavLink href="/cart"><img className="rounded-circle" src={user} alt="bell logo" /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavSearchBar
