import React from "react";
import { Col, Container, Row } from "reactstrap";
import f365 from "../assets/images/Feast365.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Cloud from "../components/Header/OutletHeader";


const Cloud9CafeHome = () => {

    return (
        <>
            <Cloud />
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="hero__content">
                                <h1>
                                    Welcome To
                                    <span className="highlight"> Feast 365 </span>
                                    Restaurent
                                </h1>

                                <div className="nav__btns d-flex align-items-center gap-4">
                                    <button className="btn2">
                                        <Link>Go to Outlet</Link>
                                        <i class="icon ri-arrow-right-s-line" style={{ marginLeft: 20 }}></i>

                                    </button>
                                </div>
                                <br /><br />
                                <p>
                                    Feast 365, our exquisite all-day dining restaurant, is dedicated to providing an exceptional culinary journey from afternoon to night.
                                    With a wide selection of mouthwatering choices for lunch and dinner, our menu is designed to fulfill your every craving.

                                    <br />
                                </p>
                            </div>
                        </Col>

                        <Col lg="6">
                            <div className="hero__img-box">
                                <img src={f365} alt="" style={{ marginTop: -50 }} />
                            </div>
                        </Col>

                    </Row>
                    <p>
                        Indulge in our unique offerings, tailored to elevate your dining experience
                        <br />
                        Lunch Buffet with Infinity Pool:
                        <br />
                        Multi-cuisine Dinner Buffet:
                        <br />
                        International High Tea Buffet:
                    </p>
                </Container>
            </section>
        </>
    );
};

export default Cloud9CafeHome;
