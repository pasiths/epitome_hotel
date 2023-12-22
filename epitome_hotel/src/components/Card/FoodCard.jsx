import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../Redux/cartSlice";
import "./card.css";

const FoodCard = (props) => {
  const dispatch =useDispatch()

  const handleAddToCart = () => {
    const { id, image, foodname } = props;
    dispatch(addtoCart({ id, image, foodname }));
  };

  return(
    <div className="card__card">
      <Card>
        <div className="card__img">
          <img src={props.image} alt="food-img"/>
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="card__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> 
            </span>
            <span className="card__rating d-flex align-items-center gap-1">
              <i className="ri-star-s-fill"></i>
              
            </span>
          </div>

          <h6 className="card__title">
          {props.id}
          </h6>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
             <span>{props.foodname}</span>
            </h5>

            <button className="btn booking__btn" onClick={handleAddToCart}>
              <Link>Add</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
};

export default FoodCard;