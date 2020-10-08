import React from 'react'
import {Container, Row, Button, ButtonGroup , Col, Form, Input, FormText} from 'reactstrap'
import { Link } from 'react-router-dom';

import logo from '../assets/image/logo.svg'

class login extends React.Component{
    state ={
        email: '',
        password: '',
    }
    render(){
        return(
            <React.Fragment>
                <div className="vh-100 d-flex">
                <Container className="d-flex align-items-center justify-content-center">
                    <Form className="text-center col-sm-4 col-12">
                        <img src={logo}/>
                        <FormText className="text-center mb-5 mt-4"><h6>Please Login with your account</h6></FormText>
                            <ButtonGroup className="col-sm-8">
                                <Button style={{width:100}}>custommer</Button>
                                <Button style={{width:100}}>seller</Button>
                            </ButtonGroup>
                        <Input className="mt-5" name="email" placeholder="email" />
                        <Input className="mt-3" name="password" placeholder="password" />
                        <div className="text-right mb-4">
                            <Link to='/'>forgot password?</Link>
                        </div>
                        <Button className="col-sm-12 col-12 mb-4" style={{width: 370}}>Sign Up</Button>
                        <p>make a login blanja account<Link to='/signup'> sign up</Link></p>
                    </Form>
                </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default login