import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import "./card.css";

const FoodCard = (props) => {
  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={props.image} alt="food-img"/>
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> 
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-s-fill"></i>
              
            </span>
          </div>

          <h6 className="tour__title">
          {props.id}
          </h6>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
             <span>{props.foodname}</span>
            </h5>

            <button className="btn booking__btn">
              <Link>Add</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FoodCard;