import React from 'react'
import axios from 'axios'
import Navbar from '../component/NavigationBar'
import { Container, Table, Button} from 'reactstrap'

class Items extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          data: {},
        }
      }

    async componentDidMount(){
        const {data} = await axios.get('http://localhost:8180/items')
        this.setState({data})
    }

    render(){
        const {data} = this.state
        return(
            <React.Fragment>
                <Navbar />
            <Container className="mt-3">
                <h1>List Product</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product</th>
                            <th>price</th>
                            <th>Description</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).length && data.data.map(item=>{
                            return(
                                <>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    
                                    <td>
                                        <Button size="sm" color="success" onClick={()=>this.editUser(item.id)}>Edit</Button> &nbsp;
                                        <Button size="sm" color="danger" onClick={()=>this.deleteUser(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                                </>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
            </React.Fragment>
        )
    }
}

export default Items