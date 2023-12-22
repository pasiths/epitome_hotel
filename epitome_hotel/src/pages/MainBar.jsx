import React from "react";
import { Col, Container, Row } from "reactstrap";
import mainbar from "../assets/images/mainbar.png";
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
                                <img src={mainbar} alt="" style={{ marginTop: -50 }} />
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="hero__content">
                                <h1>
                                    Welcome To <br />
                                    <span className="highlight" style={{ color: "red" }}> Main BAR </span>

                                </h1>

                                <div className="nav__btns d-flex align-items-center gap-4">
                                    <button className="btn2" style={{ color: "white", backgroundColor: "rosybrown" }}>
                                        <Link to={"/kitchen"}><span style={{ color: "white" }}>Go to Outlet</span></Link>
                                        <i class="icon ri-arrow-right-s-line" style={{ marginLeft: 20 }}></i>

                                    </button>
                                </div>
                                <br /><br />
                                <p>
                                    Welcome to the heartbeat of conviviality, where sophistication meets spirited enjoyment.
                                     Our expert mixologists curate a menu that transcends the ordinary, offering an array of craft cocktails,
                                      premium spirits, and fine wines. Immerse yourself in the stylish ambiance as you unwind with signature concoctions and classic favorites.
                                    <br />
                                </p>
                            </div>
                        </Col>



                    </Row>
                    <p> Whether you prefer the allure of a well-aged whiskey or the effervescence of a perfectly shaken cocktail, 
                        our Main Bar invites you to indulge in the art of libation. Cheers to an unforgettable experience at the epicenter 
                        of our hotel's social charm.
                    </p>
                </Container>
            </section>
        </>
    );
};

export default ColdKitchen;
