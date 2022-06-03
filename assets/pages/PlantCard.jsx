import React from "react";
import { Link } from "react-router-dom";

const PlantCard = (props) => {
  return (


    <div className="card" >
    <Link to={`plant/${props.id}`} className="card-link" >
      <img className="plant-img" src={props.img} alt={props.name} />
      <p className="card-name">{props.name}</p>
    
   </Link>
    </div>
  );
};

export default PlantCard;
