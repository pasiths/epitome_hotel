import React from "react";
import { Col, Container, Row } from "reactstrap";
import cold from "../assets/images/coldkitchen.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import KitchenHeader from "../components/Header/KitchenHeader";


const ColdKitchen = () => {

    return (
        <>
            <KitchenHeader/>
            <section>
                <Container>
                    <Row>
                    <Col lg="6">
                            <div className="hero__img-box">
                                <img src={cold} alt="" style={{ marginTop: -50, width:500}} />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="hero__content">
                                <h1>
                                    Welcome To <br />
                                    <span className="highlight" style={{ color: "blue" }}> Cold Kitchen </span>

                                </h1>

                                <div className="nav__btns d-flex align-items-center gap-4">
                                    <button className="btn2" style={{ color: "white", backgroundColor: "skyblue" }}>
                                        <Link><span style={{ color: "white" }}>Go to Outlet</span></Link>
                                        <i class="icon ri-arrow-right-s-line" style={{ marginLeft: 20 }}></i>

                                    </button>
                                </div>
                                <br /><br />
                                <p>
                                    Welcome to our Cold Kitchen, where culinary craftsmanship meets refreshing innovation.
                                    Immerse yourself in a world of chilled delights, expertly curated to tantalize your taste buds.
                                    From crisp salads bursting with vibrant flavors to artisanal sandwiches and gourmet cold platters, our chefs skillfully transform the freshest ingredients into culinary masterpieces.

                                    <br />
                                </p>
                            </div>
                        </Col>

                        

                    </Row>
                    <p>Quench your thirst with our array of chilled beverages, from freshly squeezed juices to signature cold brews.
                        Discover a symphony of cool, culinary perfection at our Cold Kitchen, where every dish and drink is a refreshing
                        journey for your senses.
                    </p>
                </Container>
            </section>
        </>
    );
};

export default ColdKitchen;
