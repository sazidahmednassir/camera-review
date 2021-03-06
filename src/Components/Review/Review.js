import React from 'react';
import "./Review.css";

const Review = ({review}) => {
    const  {name,  img,  comment, rate, star}= review
    return (
        <div>
          <div class="card" className="cardwidth">
  <img src={img} class="card-img  img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{comment}</p>
    <p class="card-text mt-3 "> Ratings: {rate} <span>{star}</span></p>

  
  </div>
</div>


        </div>
    );
};

export default Review;