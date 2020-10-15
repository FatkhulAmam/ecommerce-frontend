import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Col, Input, Row, Media, Label, Button } from 'reactstrap'
import { FaPencilAlt } from 'react-icons/fa'

import Navbar from '../component/NavProfileBar'
//import style
import '../assets/style/style.css'

import profileAction from '../redux/actions/profile'

export default function Profile() {
    const [user_name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birth, setBirth] = useState('');
    const token = useSelector(state=>state.auth.token)
    const { data } = useSelector((state) => state.profile);
    const dispatch = useDispatch()

    useEffect(() => {
        if (data.length) {
            setName(data[0].user_name)
            setEmail(data[0].email)
            setPhone(data[0].phone)
            setGender(data[0].gender)
            setBirth(data[0].birth)
        }
    }, [data])

    useEffect(()=>{
        dispatch(profileAction.getProfile(token))
    },[dispatch, token])

    return (
        <React.Fragment>
            <Navbar />
            <div className="d-flex">
                <div className="sidebar">
                    <Media className="align-items-center">
                        <Media left>
                            <Media className="rounded-circle m-3" object src="https://via.placeholder.com/50" />
                        </Media>
                        <Media body>
                            <div className="strong">
                                Media heading
                            </div>
                            <div className="text-muted small"><FaPencilAlt />Edit profile</div>
                        </Media>
                    </Media>
                </div>
                <div className="d-flex content p-5" sm="9">
                    <div className="profile-edit shadow p-3">
                        <div className="heading h3">My profile</div>
                        <div className="text-muted small">manage your profile information</div>
                        <hr />
                        <Row>
                            <Col md={8}>
                                <Row>
                                    <Col className="text-right mt-3" md={4}>Name</Col>
                                    <Col className="mb-3 mt-2" md={8}>
                                        <Input type="text" value={user_name}/>
                                    </Col>
                                    <Col className="text-right" md={4}>Email</Col>
                                    <Col className="mb-3" md={8}>
                                        <Input type="email" value={email}/>
                                    </Col>
                                    <Col className="text-right" md={4}>Phone Number</Col>
                                    <Col className="mb-3" md={8}>
                                        <Input type="number" value={phone}/>
                                    </Col>
                                    <Col className="text-right" md={4}>Gender</Col>
                                    <Col className="mb-3" md={8}>
                                        <div className="pl-3">
                                            <Label>
                                                <Input type="radio" value={gender}/>
                                                <span>Male</span>
                                            </Label>
                                            <Label className="ml-5">
                                                <Input type="radio" value={gender}/>
                                                <span>Female</span>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col className="text-right" md={4}>Date of Birth</Col>
                                    <Col className="mb-3" md={8}>
                                        <Input type="date" />
                                    </Col>
                                    <Col md={4} />
                                    <Col md={8}>
                                        <Button className="rounded-pill" color="success">save</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Media className="flex-column align-items-center">
                                    <Media top>
                                        <Media className="rounded-circle" src="https://via.placeholder.com/125" />
                                    </Media>
                                    <Media body>
                                        <Button className="rounded-pill border px-4 mt-3" color="white">select image</Button>
                                    </Media>
                                </Media>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
