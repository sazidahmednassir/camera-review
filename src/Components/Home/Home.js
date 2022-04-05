import { useNavigate } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import "./Home.css";

const Home = () => {
  const [reviews, setReview ]=useReviews();
  const navigate = useNavigate();
    return (
        <div className="container mt-4">
        <div class="row">
  <div class="col-sm-6">
    <div class="card border-0">
      <div class="card-body ">
        <h5 class="card-title fs-1 mt-5">DSLR cameras are the perfect way to capture memories that will last a lifetime.</h5>
        <p class="card-text fs-5 mt-3">DSLR cameras are great for photography enthusiasts who want to take their hobby to the next level. They offer manual controls that give you more flexibility and control over your photos, and they produce better.</p>
       
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card border-0">
      <div class="card-body">
      <img src="https://m.media-amazon.com/images/I/81pz06ySqrL._AC_SX569_.jpg" class="card-img img-fluid" alt="..."></img>
        
      </div>
    </div>
  </div>

 
</div>
<div class="row">
  <div class="column-md-12">
  <h1 class="text-center m-4">Our Customer Reviews</h1>
  <div class="container  d-flex flex-wrap justify-content-md-between  " >
    
   {
     reviews.slice(0,3).map(review =>  <Review key={review.id}  review={review}></Review>)
   }
  </div>

 
  </div>
  <div class="row">
  <div class="column-md-12 text-center">
  <button onClick={()=> navigate('/reviews')}  class="btn btn-dark m-4">See More Reviews Here!</button>
  </div>
  </div>
  
</div>
        </div>
    );
};

export default Home;