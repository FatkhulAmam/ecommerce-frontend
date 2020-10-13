import React, { Component } from 'react'
import Navbar from '../component/NavSearchBar'
import { Container, Row, Button } from 'reactstrap'

import bgDefault from '../assets/image/bgProduct.png'

export default class CategoryDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container>
                    <Row>
                        <div className="product-img mt-4">
                            <div>
                                <img className='one' src={bgDefault} />
                                <img className='two ml-3' src={bgDefault} />
                            </div>
                            <div>
                                <img className='three mt-3' src={bgDefault} />
                                <img className='four ml-3 mt-3' src={bgDefault} />
                            </div>
                        </div>
                        <div className="product-detail mt-4 ml-3">
                            <h2>Name Product</h2>
                            <p>toko</p>
                            <p>rating</p>
                            <p>harga</p>
                            <h3>nominal</h3>
                            <p>color</p>
                            <Row className="ml-2">
                                <h3>size </h3>
                                <h3 className="ml-3">count</h3>
                            </Row>
                            <Row>
                                <Button className="btn-chat rounded-pill ml-2">chat</Button>
                                <Button className="btn-add rounded-pill ml-2">add to cart</Button>
                                <Button className="btn-buy-now rounded-pill ml-2">buy now</Button>
                            </Row>
                        </div>
                    </Row>
                    <h4 className="mt-5">Informasi Product</h4>
                    <h5 className="mt-5">condition</h5>
                    <h5 className="text-danger">New</h5>
                    <h4 className="mt-4">description</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                    <h4>Product Review</h4>
                    <hr/>
                    <h4>You can also like this</h4>
                </Container>
            </React.Fragment>
        )
    }
}
