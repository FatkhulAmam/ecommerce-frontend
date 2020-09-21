import React from 'react'
import {Container, Row, Button, Col, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

import logo from '../assets/image/logo.svg'

class login extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Container>
                    <Form>
                        <img src={logo}/>
                        <div>Please Login with your account</div>
                        <Row md={5}>
                            <Col md={3}>
                            <Button>custommer</Button>
                            <Button>seller</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </React.Fragment>
        )
    }
}

export default login