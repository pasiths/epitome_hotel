import React from "react";
import { Col, Container, Row } from "reactstrap";
import hotk from "../assets/images/hotkitchen.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Header from "../components/Header/AdminHeader";


const ColdKitchen = () => {

    return (
        <>
            <Header />
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className="hero__img-box">
                                <img src={hotk} alt="" style={{ marginTop: -50 }} />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="hero__content">
                                <h1>
                                    Welcome To <br />
                                    <span className="highlight" style={{ color: "red" }}> HOT Kitchen </span>

                                </h1>

                                <div className="nav__btns d-flex align-items-center gap-4">
                                    <button className="btn2" style={{ color: "white", backgroundColor: "rosybrown" }}>
                                        <Link to={"/kitchen"}><span style={{ color: "white" }}>Go to Outlet</span></Link>
                                        <i class="icon ri-arrow-right-s-line" style={{ marginLeft: 20 }}></i>

                                    </button>
                                </div>
                                <br /><br />
                                <p>
                                    Step into the heart of culinary passion, where sizzling sensations and aromatic wonders come to life.
                                    Our skilled chefs craft a symphony of flavors, presenting a menu that showcases the artistry of hot cuisine.
                                    From savory, mouthwatering entrees to comforting, piping-hot dishes, every creation is a testament to our commitment to culinary excellence.

                                    <br />
                                </p>
                            </div>
                        </Col>



                    </Row>
                    <p>Let the enticing aromas guide you through an experience of unparalleled taste and warmth. 
                        At the Hot Kitchen, we turn every meal into a culinary celebration, inviting you to savor the richness of our meticulously prepared,
                         hot culinary offerings.

                    </p>
                </Container>
            </section>
        </>
    );
};

export default ColdKitchen;
