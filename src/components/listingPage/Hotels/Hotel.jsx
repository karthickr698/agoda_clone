import React from "react";
import Perk from "./Perk.jsx";
import BestsellerFlag from "./BestsellerFlag.jsx";

var Hotel = props => (
  <li className="hotel">
    <img
      src={props.hotel[5]}
      alt="hotel main entrance"
      className="hotel__image"
    />
    <div className="hotel__text">
      <div className="hotel__header">
        <h3 className="hotel__name">{props.hotel[1]}</h3>
        <span className="hotel__rating">{props.hotel[2]}</span>
      </div>
      <div className="hotel__main">
        <div>
          <span>{props.hotel[3]} reviews</span>
          <Perk
            perk="Free cancellation"
            hasPerk={props.hotel[7] === '1' ? true : false}
          />
          <Perk
            perk="Breakfast included"
            hasPerk={props.hotel[8] === '1' ? true : false}
          />
          <Perk perk="Onsite parking" hasPerk={props.hotel[9] === '1' ? true : false} />
          <Perk perk="Pet friendly building" hasPerk={props.hotel[10] === '1' ? true : false} />
          <Perk
            perk="Order food to your room"
            hasPerk={props.hotel[11] === '1' ? true : false}
          />
          <Perk
            perk="Fitness center access"
            hasPerk={props.hotel[12] === '1' ? true : false}
          />
        </div>
        <div className="hotel__main--right">
          <span>
            <span className="hotel__price">Rs.{props.hotel[4]}</span>{" "}
            per night
          </span>
          <span>Includes taxes and charges</span>

        </div>
      </div>
    </div>
    <BestsellerFlag isBestseller={props.hotel[14] === '1' ? true : false} />
  </li>
);

export default Hotel;