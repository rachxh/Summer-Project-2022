import React from "react";
import { Link } from "react-router-dom";

const PlantCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <Link to={`${props.name}`} style={{ color: "purple" }}>
        See more
      </Link>
    </div>
  );
};

export default PlantCard;
