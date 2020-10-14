import React, { Component } from 'react'
import { Col, Input, Row, Media, Label, Button } from 'reactstrap'
import { FaPencilAlt } from 'react-icons/fa'

import Navbar from '../component/NavProfileBar'
//import style
import '../assets/style/style.css'

export default function Profile() {
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
                                        <Input type="text" />
                                    </Col>
                                    <Col className="text-right" md={4}>Email</Col>
                                    <Col className="mb-3" md={8}>
                                        <Input type="email" />
                                    </Col>
                                    <Col className="text-right" md={4}>Phone Number</Col>
                                    <Col className="mb-3" md={8}>
                                        <Input type="number" />
                                    </Col>
                                    <Col className="text-right" md={4}>Gender</Col>
                                    <Col className="mb-3" md={8}>
                                        <div className="pl-3">
                                            <Label>
                                                <Input type="radio" />
                                                <span>Male</span>
                                            </Label>
                                            <Label className="ml-5">
                                                <Input type="radio" />
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
