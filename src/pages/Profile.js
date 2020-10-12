import React, { Component } from 'react'
import Navbar from '../component/NavProfileBar'
import { Container, Col, Card, Row } from 'reactstrap'

//import style
import '../assets/style/style.css'

export default class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container className="themed-container" fluid={true}>
                    <Row>
                        <Col className="user-opt shadow" sm="3">22</Col>
                        <Col className="form-edit" sm="9">
                            <Card className="edit-user"></Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
