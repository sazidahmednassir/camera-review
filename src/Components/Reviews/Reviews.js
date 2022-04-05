import React from 'react';
import Card from '../Card/Card';
import useReviews from '../hooks/useReviews';

const Reviews = () => {
    const [reviews ]=useReviews();
    return (
        <div>

            
           <div class="container">
               <div class="row">
                   <div class="column-md-12 mt-4">
                       <div class="container d-flex flex-wrap justify-content-md-between ms-4 ">
                       {
                   reviews.map(review => <Card  key={review.id}   review={review}></Card>)
               }
                       </div>
             
                   </div>
               </div>
               
           </div>
        </div>
    );
};

export default Reviews;