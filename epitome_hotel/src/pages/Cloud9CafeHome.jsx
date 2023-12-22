import React from "react";
import { Col, Container, Row } from "reactstrap";
import c9 from "../assets/images/cloud9cafe.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Header from "../components/Header/AdminHeader";


const Cloud9CafeHome = () => {

    return (
        <>
            <Header />
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="hero__content">
                                <h1>
                                    Welcome <br />To
                                    <span className="highlight"> Cloud 9<br /> Cafe </span>

                                </h1>

                                <div className="nav__btns d-flex align-items-center gap-4">
                                    <button className="btn2">
                                        <Link to={"/cafe"} style={{color:"white"}}>Go to Outlet</Link>
                                        <i class="icon ri-arrow-right-s-line" style={{ marginLeft: 20 }}></i>

                                    </button>
                                </div>
                                <br /><br />
                                <p>
                                    Indulge in Cloud 9's Weekend Breakfast Buffet, a unique Saturday and Sunday treat featuring a carefully curated spread.
                                    Elevate your mornings with comforting classics and chef-inspired creations in our cozy café ambiance.

                                    <br />
                                </p>
                            </div>
                        </Col>

                        <Col lg="6">
                            <div className="hero__img-box">
                                <img src={c9} alt="" style={{ marginTop: -50 }} />
                            </div>
                        </Col>

                    </Row>
                    <p>Join us every Friday, Saturday, and Sunday for an opulent Afternoon Tea Buffet, a celebration of fine teas, delectable pastries, and savory bites
                        . Add sweetness to your special occasions with Cloud 9 Café's enchanting cake selection. Explore a range of meticulously prepared,
                        freshly blended coffees, making every sip a journey of perfection in our welcoming space.</p>
                </Container>
            </section>
        </>
    );
};

export default Cloud9CafeHome;
