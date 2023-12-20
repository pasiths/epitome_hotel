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
import Cart from "./Cart";

export default function ProductCards() {
  return (
    <section className="h-100 mt-5" style={{ backgroundColor: "white", borderRadius: 10 }}>
      <center><h2>Order Items</h2></center>
          <MDBContainer className="py-5 pt-0 h-100 pb-1">
                <MDBCard className="rounded-3 mb-4">
                  <Cart/>
                </MDBCard>
                <MDBCard>
                  <MDBCardBody>
                    <MDBBtn className="" color="danger" block size="lg">
                      Cancel
                    </MDBBtn>
                    <br />
                    <br />
                    <MDBBtn className="" color="warning" block size="lg">
                      Order
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
          </MDBContainer>
    </section>
  );
}