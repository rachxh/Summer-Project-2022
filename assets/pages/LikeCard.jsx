import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";


const LikeCard = (props) => {
  
  return (
    <>
      <div className="card">
        <Link to={`/myFav/${props.id}`} className="card-link">
          <img className="plant-img" src={props.img} alt={props.name} />
          <p className="fav-card-name">{props.name}</p>
        </Link>
        <div className="btn-container">
          <button className="btn-delete" onClick={() => props.onClick(props.id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default LikeCard;
