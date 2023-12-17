import React from "react";

import "../styles/cafe.css";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../components/SearchBar/SearchBar";
import FoodCard from "../components/Card/FoodCard";
import KitchenCart from "../components/Cart/KitchenCart";
import OrderCard from "../components/Card/OrderCard";

const Kitchen = () => {

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
                      <Row lg='12'>
                        <OrderCard />
                      </Row>
                      <div><br /></div>
                      <Row lg='12'>
                        <OrderCard />
                      </Row>
                      <div><br /></div>
                      <Row lg='12'>
                        <OrderCard />
                      </Row>
                      <div><br /></div>
                      <Row lg='12'>
                        <OrderCard />
                      </Row>
                    </Row>
                  </Container>
                </section>
              </div>
              <div>

              </div>
            </Col>

          </Col>
          <Col className="">
            <KitchenCart/>
          </Col>

        </Row>
      </Container>

    </>
  );
};

export default Kitchen; export const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/cafe",
    display: "Cafe",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

