import React from 'react';
import "./Card.css";

const Card = ({review}) => {
  
    const  {name,  img,  comment, rate, star}= review

    return (
        <div class="mt-3">
                   <div class="card " className="cardwidth">
  <img src={img} class="card-img  img-fluid  ima" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{comment}</p>
    <p class="card-text mt-3 "> Ratings: {rate} <span>{star}</span></p>

  
  </div>
</div>
        </div>
    );
};

export default Card;