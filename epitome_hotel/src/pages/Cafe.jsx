import React from "react";

import "../styles/cafe.css";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../components/SearchBar/SearchBar";
import FoodCard from "../components/Card/FoodCard";
import Cart from "../components/Cart/Cart";

const Cafe = () => {

  return (
    <>
      <Container>
        <Row lg="">
          <Col className="">
            <Col>
              <div>
                <section id="foods">
                  <Container>
                    <Row>
                      <SearchBar />
                    </Row>
                  </Container>
                </section>
                <section className="pt-0">
                  <Container>
                    <Row >
                      <Col lg='3'>
                        <FoodCard />
                      </Col>
                    </Row>
                  </Container>
                </section>
              </div>
              <div>

              </div>
            </Col>

          </Col>
          <Col className="">
            <Cart/>
          </Col>

        </Row>
      </Container>

    </>
  );
};

export default Cafe; export const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/cafe",
    display: "Cafe",
  },
  {
    path: "/kitchen",
    display: "Kitchen",
  },
  {
    path: "/addfooditem",
    display: "Item",
  },
];

