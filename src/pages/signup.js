import React from 'react'
import {Container, Row, Button, ButtonGroup , Col, Form, FormGroup, Input, FormText} from 'reactstrap'
import {Link} from 'react-router-dom'

import logo from '../assets/image/logo.svg'

class login extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="vh-100 d-flex">
                <Container className="d-flex align-items-center justify-content-center">
                    <Form className="text-center col-sm-4 col-12">
                        <img src={logo}/>
                        <FormText className="text-center mb-5 mt-4"><h6>Please Sign up with your account</h6></FormText>
                            <ButtonGroup className="col-sm-8">
                                <Button style={{width:100}}>custommer</Button>
                                <Button style={{width:100}}>seller</Button>
                            </ButtonGroup>
                        <Input className="mt-5" name="name" placeholder="name" />
                        <Input className="mt-3" name="email" placeholder="email" />
                        <Input className="mt-3 mb-4" name="password" placeholder="password" />
                        <Button className="col-sm-12 col-12 mb-4" style={{width: 370}}>Sign Up</Button>
                        <p>already have an account?<Link to='/login'> login</Link></p>
                    </Form>
                </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default login