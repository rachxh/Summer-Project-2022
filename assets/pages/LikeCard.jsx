import React from "react";
import { Link } from "react-router-dom";
// import Calendar from "./Calendar";

const LikeCard = (props) => {
  return (

    <div className="card" >
    <Link to={`/myFav/${props.id}`} className="card-link" >
      <img className="plant-img" src={props.img} alt={props.name} />
      <p className="card-name">{props.name}</p>
      <button>Set reminder</button>
   </Link>
    </div>
  );
};

export default LikeCard;
