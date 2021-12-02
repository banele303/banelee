

import  './AboutM.css';
import imag from '../images/img-6.jpg'
import { Container,Row,Col,Image, } from 'react-bootstrap';
import React from 'react'
import styled from "styled-components";

 
const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border-radius: 10px;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
@media only screen and (max-width: 480px) {
  margin-bottom: 20px;
}
`;

const AboutM = () => {
    return (
        
        <Container style={{margin:'40px'}}>
          <div className='header'><h1>About Me</h1></div>  
            
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={10} md={5}>
          <Image className="img" src={imag} rounded thumbnail />
          </Col>
          <Col xs={10} md={7}>
          <h3 className='header-3'>-<span className='header-4'>What I Do</span>-</h3>
          <p>lorem Welcome To BlecoX Welcome To BlecoX Welcome To BlecoX  Welcome To BlecoX
     lorem Welcome To BlecoX Welcome To BlecoX Welcome To BlecoX  Welcome To BlecoX
     lorem Welcome To BlecoX Welcome To BlecoX Welcome To BlecoX  Welcome To BlecoX
     Welcome To BlecoX</p>
     <Button>Hire Me</Button>
          </Col>
        </Row>
      
       
      </Container>
       
    )
}

export default AboutM










