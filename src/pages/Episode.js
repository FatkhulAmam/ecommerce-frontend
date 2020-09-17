import React from 'react';
import {default as axios} from 'axios';

//import style from Reacstrap
import {
  Container, Jumbotron, 
  Row, Col, Card, CardBody, CardText
} from 'reactstrap'

import Navbar from '../component/NavigationBar'

class Episode extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: {},
    }
  }

  // getData = async (url) => {
  //   const data = await fetch(url)
  //   const result = data.json()
  //   return result
  // }

  async componentDidMount(){
    //const data = await this.getData('https://rickandmortyapi.com/api/episode')
    const {data} = await axios.get('https://rickandmortyapi.com/api/episode')
    this.setState({data})
  }

  render(){
    const {data} = this.state
    return(
      <React.Fragment>
         <Navbar />
        <Container>
          <Jumbotron className="my-5">
            <h1>Rick and Morty</h1>
          </Jumbotron>
          <Row>
          {Object.keys(data).length && data.results.map(item => {
            return(
              <Col md={3}>
                <Card className="mt-3 shadow">
                  <CardBody>
                    <CardText>{item.episode}: {item.name}</CardText>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Episode;
