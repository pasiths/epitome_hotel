import React from "react";
import { Col, Container, Row } from "reactstrap";
import rooftop from "../assets/images/rooftop.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import RooftopPoolbarHeader from "../components/Header/OutletHeader";


const RooftopPoolbarHome = () => {
    
    return (
        <>
        <RooftopPoolbarHeader/>
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="hero__content">
                            <h1>
                                Welcome To
                                <span className="highlight"> Roof-top <br /> Poolbar </span>

                            </h1>

                            <div className="nav__btns d-flex align-items-center gap-4">
                                <button className="btn2">
                                    <Link>Go to Outlet</Link>
                                    <i class="icon ri-arrow-right-s-line" style={{marginLeft:20}}></i>

                                </button>
                            </div>
                            <br /><br />
                            <p>
                                Our Sky Lounge is a breathtaking rooftop bar and restaurant offering a panoramic view of the open sky.
                                Our rooftop oasis provides a unique and unforgettable dining and drinking experience.
                                <br />
                            </p>
                        </div>
                    </Col>

                    <Col lg="6">
                        <div className="hero__img-box">
                            <img src={rooftop} alt="" style={{ marginTop: 60 }} />
                        </div>
                    </Col>

                </Row>
                <p>By day, you can unwind and bask in the sun at our pool bar while indulging in delectable bar snacks.As the sun sets,
                    the atmosphere transforms into a romantic setting, ideal for intimate dinners or socializing
                    with friends. Additionally, our venue is the perfect choice for outdoor functions, accommodating up to 300 guests.</p>
            </Container>
        </section>
        </>
    );
};

export default RooftopPoolbarHome;
