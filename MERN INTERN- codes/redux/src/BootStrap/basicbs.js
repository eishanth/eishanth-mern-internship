import React from 'react'
import {Button,Alert,Breadcrumb,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Basic = () => {
  return (
    <div>
        <Alert>I am Alert</Alert>
        <Alert variant="primary">I am Alert</Alert>
        <Alert variant="secondary">I am Alert</Alert>
        <Alert variant="success">I am Alert</Alert>
        <Button>BUTTON FROM BOOTSTRAP</Button>
        <Breadcrumb.Item >Home</Breadcrumb.Item>
        <Breadcrumb.Item>About</Breadcrumb.Item>
        <Breadcrumb.Item>Contact</Breadcrumb.Item>

        <Card style={{ background: 'red' }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Card Text</Card.Text> 
        </Card>
        
        <button 
                type="button"
                class="btn btn-success btn-lg btn-block"

                aria-pressed="false"
                autocomplete="off"
                disabeled >click button</button>
    </div>
  )
}