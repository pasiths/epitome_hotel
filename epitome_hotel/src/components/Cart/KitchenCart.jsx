import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import foodimg from "../../assets/images/food-4.jpg";
export default function ProductCards() {
return (
<section className="h-100 mt-5" style={{ backgroundColor: "#eee", borderRadius:10 }}>
    <center><h2>Order 00001</h2></center>
  <MDBContainer className="py-5 pt-0 h-100 pb-1">
    <MDBRow className=" h-100">
      <MDBCol md="12">
        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">

            <MDBRow className="justify-content-between align-items-center">
            <p className="lead fw-normal mb-2">Food Name</p>
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={foodimg}
                  alt="img" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3"
                className="d-flex align-items-center justify-content-around">
                <MDBInput min={0} defaultValue={2} type="number" size="sm" />
              </MDBCol>
            </MDBRow>

          </MDBCardBody>
        </MDBCard>




        <MDBCard>
          <MDBCardBody>
          <MDBBtn className="" color="warning" block size="lg">
              Accept
            </MDBBtn>
            <br />
            <br />
            <MDBBtn className="" color="danger" block size="lg">
              Deliver
            </MDBBtn>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
);
}