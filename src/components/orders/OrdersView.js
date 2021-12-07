import React, {useState} from 'react'
import OrderScrollComponent from './OrderScrollComponent.js'
import './OrdersView.css'
import Button from 'react-bootstrap/Button'
import { Col, Collapse, Container, Row, Stack } from 'react-bootstrap'


const OrdersView = (props) => {
    const goBackToMainWindow = () => {          
        props.onGoBack('Main window')
    }

    return(
        <div>
            <div className="orders">
            <Container>
            <Row>
                <Col>
                    <OrderScrollComponent title="Pending payment" titleColor="#FFB17A"></OrderScrollComponent>
                </Col>
                <Col>
                    <OrderScrollComponent title="Not sent" titleColor="#FCE762"></OrderScrollComponent>
                </Col>
                <Col>
                    <OrderScrollComponent title="Returns" titleColor="#4F4789"></OrderScrollComponent>
                </Col>
            </Row>
        </Container>
            </div>
        <Button
            className='secondary-button main-menu-button'
            onClick={goBackToMainWindow}
        >
            MAIN MENU
        </Button>
    </div>
    )
}

export default OrdersView