import React, { Component } from 'react'
import Navbar from '../component/NavProfileBar'
import { Container, Card, Row } from 'reactstrap'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Navbar />
                    <Container>
                        <Row>
                        <div>
                            <Card className='shadow-sm mt-5'>hallo word</Card>
                            <Card className='shadow-sm mt-3'>hallo word</Card>
                            <Card className='shadow-sm mt-3'>hallo word</Card>
                        </div>
                        <div>
                            <Card className='shadow-sm mt-5 ml-4'>hallo word</Card>
                        </div>
                        </Row>
                    </Container>
                </React.Fragment>
            </div>
        )
    }
}
