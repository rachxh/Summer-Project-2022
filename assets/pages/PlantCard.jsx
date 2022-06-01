import React from "react";
import { Link } from "react-router-dom";

const PlantCard = (props) => {
  return (
    <div className="card">
      <img className="plant-img" src={props.img} alt={props.name} />
      <h4 className="card-name">{props.name}</h4>
      <Link to={`plant/${props.id}`} style={{ color: "green" }}>
        See more
      </Link>
    </div>
  );
};

export default PlantCard;
