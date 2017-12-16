import React from "react";
import "./SpaceCard.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>
  </div>	
);

export default Card;
