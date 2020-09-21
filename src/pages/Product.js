import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Navbar from '../component/navSearchBar'
import { 
    Container,
    Row, Col,
    Card, CardBody, CardTitle, CardSubtitle, CardImg,
    Modal, ModalBody, ModalHeader, ModalFooter,
    Button 
} from 'reactstrap'
import suit from '../assets/image/suit.png'

class Product extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            modalOpen: false,
            openDetail:'',
            showData:{
                id: '',
                name:'',
                price:'',
                category:'',
                description:''
            }
        }
    }

    async componentDidMount(){
        await this.getData()
    }

    getData = async() =>{
        const{data} = await axios.get('http://localhost:8180/items')
        this.setState({data: data.data})
    }

    showingData = async (id) => {
        const {data} = await axios.get(`http://localhost:8180/items/${id}`)
        this.setState({modalOpen: true, showData: data.data},async()=>{
            await this.getData()
        })
    }

    searchData = async (key) => {
        const {data} = await axios.get(`http://localhost:8180/items/?search=${key}`)
        this.setState({showData: data.data})
    }

    deleteProduct = async (id)=>{
        await axios.delete(`http://localhost:8180/items/${id}`)
        this.setState({modalOpen: false},() =>{
            this.getData()
        })
    }

    openModal = () =>{
        this.setState({modalOpen: true})
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Container className="mt-4">
                    <h1>My Product</h1>
                    <Row>
                    {this.state.data.map(item=>{
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
                        )
                    })}
                    </Row>
                </Container>
                <Modal isOpen={this.state.modalOpen} className="modal-lg">
                    <ModalHeader><h2>Detail My Product</h2></ModalHeader>
                    <ModalBody>
                        <h4>{this.state.showData.name}</h4>
                        <p>{this.state.showData.price}</p>
                        <p>{this.state.showData.description}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={()=>this.setState({modalOpen: false})}>cencel</Button>
                        <Link to={"/product"}><Button onClick={()=>this.deleteProduct(this.state.showData.id)} className="bg-danger">Delete</Button></Link>
                        <Link to={"/edit/" + this.state.showData.id}><Button className="bg-success">Edit</Button></Link>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }   
}

export default Product