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
    <center><h2>Order Items</h2></center>
  <MDBContainer className="py-5 pt-0 h-100 pb-1">
    <MDBRow className=" h-100">
      <MDBCol md="12">
        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">

            <MDBRow className="justify-content-between align-items-center">
            <p className="lead fw-normal mb-2">Basic T-shirt</p>
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={foodimg}
                  alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3"
                className="d-flex align-items-center justify-content-around">
                <MDBInput min={0} defaultValue={2} type="number" size="sm" />
              </MDBCol>

              <MDBCol lg="3" className="offset-lg-1">
                <MDBTypography tag="h6" className="mb-0">
                  $499.00
                </MDBTypography>
              </MDBCol>

              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>

          </MDBCardBody>
        </MDBCard>


        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">

            <MDBRow className="justify-content-between align-items-center">
            <p className="lead fw-normal mb-2">Basic T-shirt</p>
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={foodimg}
                  alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3"
                className="d-flex align-items-center justify-content-around">
                <MDBInput min={0} defaultValue={2} type="number" size="sm" />
              </MDBCol>

              <MDBCol lg="3" className="offset-lg-1">
                <MDBTypography tag="h6" className="mb-0">
                  $499.00
                </MDBTypography>
              </MDBCol>

              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>

          </MDBCardBody>
        </MDBCard>



        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">

            <MDBRow className="justify-content-between align-items-center">
            <p className="lead fw-normal mb-2">Basic T-shirt</p>
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={foodimg}
                  alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3"
                className="d-flex align-items-center justify-content-around">
                <MDBInput min={0} defaultValue={2} type="number" size="sm" />
              </MDBCol>

              <MDBCol lg="3" className="offset-lg-1">
                <MDBTypography tag="h6" className="mb-0">
                  $499.00
                </MDBTypography>
              </MDBCol>

              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>

          </MDBCardBody>
        </MDBCard>


        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">

            <MDBRow className="justify-content-between align-items-center">
            <p className="lead fw-normal mb-2">Basic T-shirt</p>
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src={foodimg}
                  alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3"
                className="d-flex align-items-center justify-content-around">
                <MDBInput min={0} defaultValue={2} type="number" size="sm" />
              </MDBCol>

              <MDBCol lg="3" className="offset-lg-1">
                <MDBTypography tag="h6" className="mb-0">
                  $499.00
                </MDBTypography>
              </MDBCol>

              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>

          </MDBCardBody>
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
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
);
}