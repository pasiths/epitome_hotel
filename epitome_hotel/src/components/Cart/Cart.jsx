import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
}
from "mdb-react-ui-kit";
import { useSelector,useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { addtoCart, removefromCart } from "../../Redux/cartSlice";



export default function ProductCards() {
  const cartItems = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()
  return (
    <section className="mt-5" style={{ backgroundColor: "white", borderRadius: 10 }}>
      {cartItems.map(item => {
        return (
            <MDBRow className=" h-100">
              <MDBCol md="12">
                <MDBCard className="rounded-3 mb-4">
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <p className="lead fw-normal mb-2">{item.foodname}</p>
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage className="rounded-3" fluid
                          src={item.image}
                          alt="Food-img" />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3"
                        className="d-flex align-items-center justify-content-around">
                        <MDBInput min={0} defaultValue={1} type="number" size="sm" />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3" className="text-end">
                        <Button className="text-danger" onClick={()=>dispatch(removefromCart({id: item.id}))}>
                          <MDBIcon fas icon="trash text-danger" size="lg" />
                        </Button>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
        )
      })
      }
    </section>
  );
}