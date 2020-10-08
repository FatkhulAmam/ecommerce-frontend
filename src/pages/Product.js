import React, { Component } from 'react'
import {connect} from 'react-redux'
import { 
    Container,
    Row, Col,
    Card, CardBody, CardTitle, CardSubtitle, CardImg,
    Modal, ModalBody, ModalHeader, ModalFooter,
    Button 
} from 'reactstrap'
import suit from '../assets/image/suit.png'

import productAction from '../redux/actions/product'

class Episode extends Component {
  componentDidMount() {
    this.props.getProduct()
  }
  
  render() {
    const {isLoading, data, isError, alertMsg} = this.props.product
    return (
      <>
        <Container className="mt-4">
        <h1>My Product</h1>
        <Row>
        {!isLoading && !isError && data.length!==0 && data.map(item=>{
            return(
            <Col sm={6} md={3} className="mt-4">
                <Card className="shadow-sm">
                    <CardImg src={suit}/>
                    <CardBody>
                        <CardTitle><h4>{item.name}</h4></CardTitle>
                        <CardSubtitle><h6>{item.category_name}</h6></CardSubtitle>
                        <CardSubtitle>{item.price}</CardSubtitle>
                        <Button onClick={()=>this.showingData(item.id)} className="bg-success mt-2">Detail</Button>
                    </CardBody>
                </Card>
            </Col>
        )})}
        </Row>
        </Container>
        {isLoading&& !isError && (
          <div>Loading</div>
        )}
        {isError&& alertMsg!=='' && (
          <div>{alertMsg}</div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Episode)