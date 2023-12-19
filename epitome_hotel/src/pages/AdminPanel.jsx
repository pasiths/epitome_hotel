import React from "react";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/adminpanel.jpg";
import "../styles/home.css";
import Header from "../components/Header/AdminHeader";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
    <Header/>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <h1>
                <span className="highlight"> Epitome's </span>
                Order <br /> management <br /> System <br /><span className="highlight">Admin's Panel</span>
              </h1>
              <div className="nav__btns d-flex align-items-center gap-4">
              <button className="btn2">
                  <Link to={"/addfooditem"}style={{color:"white"}} >Items</Link>
                </button>

                <button className="btn2" >
                  <Link to={"/Register"} style={{color:"white"}}>User</Link>
                </button>
              </div>
              <br />
              <br />
              <p>
                The Epitome, located in the heart of Kurunegala, is a
                distinguished city hotel that offers an unparalleled luxury
                experience. this venue has been meticulously designed to
                encapsulate the epitome of opulence, providing a truly
                exceptional setting for a wide range of events and unforgettable
                experiences.
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default AdminPanel;
