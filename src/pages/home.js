import React, { Component } from 'react'
import {connect} from 'react-redux'
import Navbar from '../component/NavSearchBar'
import '../assets/style/style.css'
import { 
    Container,
    Row, Col,
    Card, CardBody, CardTitle, CardSubtitle, CardImg
} from 'reactstrap'
import bgProduct from '../assets/image/bgProduct.png'

import productAction from '../redux/actions/product'

class Product extends Component {
  componentDidMount() {
    this.props.getProduct()
  }
  render() {
    const {isLoading, data, isError, alertMsg} = this.props.product
    return (
      <>
        <Navbar />
        <Container className="mt-4">
        <h3>New</h3>
        <Row>
        {!isLoading && !isError && data.length!==0 && data.map(item=>{
            return(
            <Col className="mt-4">
                <Card className="card-home shadow-sm">
                    <CardImg className='default-img' src={bgProduct}/>
                    <CardBody>
                        <CardTitle><h5>{item.name}</h5></CardTitle>
                        <CardSubtitle className="text-danger mb-2">{item.price}</CardSubtitle>
                        <CardSubtitle><h6>{item.category_name}</h6></CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
        )})}
        </Row>
        {isLoading&& !isError && (
          <div>Loading</div>
        )}
        {isError&& alertMsg!=='' && (
          <div>{alertMsg}</div>
        )}
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product
})

const mapDispatchToProps = {
  getProduct: productAction.getData
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)