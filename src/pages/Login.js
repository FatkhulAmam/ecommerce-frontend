import React from 'react'
import {Container, Row, Button, ButtonGroup , Col, Form, Input, FormText, Alert} from 'reactstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import '../assets/style/style.css'

import logo from '../assets/image/logo.svg'

// import action dispatch
import auth from '../redux/actions/auth'

class login extends React.Component{
    state ={
        email: '',
        password: ''
    }
    login = (e)=>{
        e.preventDefault()
        const {email, password} = this.state
        const data = {
          email,
          password
        }
        this.props.login(data)
    }
    onChangeText = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    componentDidUpdate(){
        if(this.props.auth.isLogin){
          this.props.history.push('/')
        }
    }

    render(){
        const {isError, message} = this.props.auth
        return(
            <React.Fragment>
                <div className="vh-100 d-flex">
                <Container className="d-flex align-items-center justify-content-center">
                    <Form onSubmit={this.login} className="text-center col-sm-4 col-12">
                    <Alert color={isError?'danger':'success'} isOpen={isError || message!==''}>{message}</Alert>
                        <img src={logo}/>
                        <FormText className="text-center mb-5 mt-4"><h6>Please Login with your account</h6></FormText>
                            <ButtonGroup className="col-sm-8">
                                <Button className="btn btn-custommer" style={{width:100}}>custommer</Button>
                                <Button className="btn btn-seller" style={{width:100}}>seller</Button>
                            </ButtonGroup>
                        <Input className="mt-5" onChange={this.onChangeText} name='email' type='email' placeholder="email" />
                        <Input className="mt-3" onChange={this.onChangeText} name='password' type='password' placeholder="password" />
                        <div className="text-right mb-4">
                            <Link to='/'>forgot password?</Link>
                        </div>
                        <Button className="col-sm-12 col-12 mb-4" style={{width: 370}}>Sign Up</Button>
                        <p>make a login blanja account<Link to='/signup'> sign up</Link></p>
                    </Form>
                </Container>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
const mapDispatchToProps = {
    login: auth.loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(login)