import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import foodimg from "../../assets/images/food-4.jpg";

import "./card.css";

const FoodCard = () => {
  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={foodimg} alt="food-img" />
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> 
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i class="ri-star-s-fill"></i>
              
            </span>
          </div>

          <h5 className="tour__title">
            <Link to=''></Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
             <span> price</span>
            </h5>

            <button className="btn booking__btn">
              <Link to={`/tours/`}>Add to Cart</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FoodCard;