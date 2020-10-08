import React from 'react'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Input, Col, Button, ButtonGroup } from 'reactstrap'

//import assets
import logo from '../assets/image/logo.svg'
import cart from '../assets/image/shoppingCart.svg'
import search from '../assets/image/Search.svg'
import '../assets/style/style.css'

class NavSearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          navbarOpen: false
        }
    }
    render(){
        return(
        <Navbar expand="md" className="shadow-sm">
          <Container>
            <NavbarBrand><img className="logo" src={logo} alt="logo brand"/></NavbarBrand>
                <ButtonGroup>
                  <Input className="search-box" placeholder="search..."></Input>
                  <Button className="bg-white btn-src"><img src={search} alt="search"/></Button>
                </ButtonGroup>
            <NavbarToggler className="navbar-light" onClick = {()=>this.setState({navbarOpen: !this.state.navbarOpen})} />
            <Collapse navbar isOpen = {this.state.navbarOpen} >
              <Nav navbar className="ml-auto">
                <NavItem className="mr-3">
                  <NavLink href="#"><img src={cart} alt="bell logo"/></NavLink>
                </NavItem>
                <NavItem className="mr-">
                <NavLink href="#">
                      <Button className="rounded-pill">login</Button>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                      <Button className="rounded-pill">sigin</Button>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        )
    }
}

export default NavSearchBar
