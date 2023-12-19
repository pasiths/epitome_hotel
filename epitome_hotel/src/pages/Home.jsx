import React from "react";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img01.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const Home = () => {
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
                Order <br /> management <br /> System
              </h1>
              <div className="nav__btns d-flex align-items-center gap-4">
              <button className="btn1">
                  <a href="/login">Login</a>
                </button>

                <button className="btn2">
                  <a href="/register">Register</a>
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

export default Home;
