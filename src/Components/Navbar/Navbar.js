import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Reviews</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Chart</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Blog</a>
  </li>
</ul>
            
        </div>
    );
};

export default Navbar;