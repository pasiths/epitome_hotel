import React from "react";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon
  } from 'mdb-react-ui-kit';
  import foodimg from "../../assets/images/food-4.jpg";
import "./card.css";
import { Col, Row } from "reactstrap";


const OrderCard = () => {
  return (
    <MDBCard >
    <MDBRow className='g-0' style={{borderRadius:10,height:60}}>
      <MDBCol md='1'>
        <MDBCardImage src={foodimg} alt='...' style={{borderRadius:10,width:65,marginTop:4}} fluid />
      </MDBCol>
      <MDBCol md='11'>
        <MDBCardBody>
            <Row>
                <Col md='6'>
                <MDBCardTitle>Order 00001</MDBCardTitle>
                </Col>
                <Col md='3'>
                <MDBCardTitle>Cafe</MDBCardTitle>
                </Col>
                <Col md='2'>
                <MDBCardTitle>New</MDBCardTitle>
                </Col>
                <Col md='1'>
                <MDBCardTitle><MDBIcon fas icon="circle" style={{background:"",color:"green"}}/></MDBCardTitle>
                </Col>
            </Row>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>
  );
};

export default OrderCard;