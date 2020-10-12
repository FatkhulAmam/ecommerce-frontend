import React, { Component } from 'react'
import Navbar from '../component/NavProfileBar'
import {Container} from 'reactstrap'

export default class CategoryDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Container>
                    <h1>Category Detail page</h1>
                </Container>
            </React.Fragment>
        )
    }
}
