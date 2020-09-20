import React from 'react'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap'

//import assets
import logo from '../assets/image/logo.svg'
import bell from '../assets/image/bell.svg'
import mail from '../assets/image/mail.svg'
import user from '../assets/image/user.png'

class NavigationBar extends React.Component{
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
            <NavbarBrand><img src={logo} alt="logo brand"/></NavbarBrand>
            <NavbarToggler className="navbar-light" onClick = {()=>this.setState({navbarOpen: !this.state.navbarOpen})} />
            <Collapse navbar isOpen = {this.state.navbarOpen} >
              <Nav navbar className="ml-auto">
                <NavItem className="mr-5">
                  <NavLink href="#"><img src={bell} alt="bell logo"/></NavLink>
                </NavItem>
                <NavItem className="mr-5">
                  <NavLink href="#"><img src={mail} alt="mail logo"/></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><img className="rounded-circle" src={user} alt="userpict"/></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        )
    }
}

export default NavigationBar
