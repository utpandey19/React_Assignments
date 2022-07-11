
import React from 'react';

import ReactDOM from 'react-dom';
import './index.css'
ReactDOM.render(
    <>
    <header class="head">
      <h1>E-Shopping</h1>
      <ul class="nav">
      <li class="active">Home</li>
      <li>Search</li>
      <li>Shop</li>
      <li>About</li>
      </ul>
    <button>Sign In</button>
    </header>
    <section class="sectionCards">
    
    <div class="cat">
    <h1>Fasion</h1>
    <div class="cardContainer">
    <div class="card">
      <img src="./images/image1.png" alt=""/>
      <p>Blue Printed</p>
      <h3>₹494 <strike>₹1,481</strike> 67% off</h3>
    </div>
    <div class="card">
      <img src="./images/image2.png" alt=""/>
      <p>white gown Party Dress</p>
      <h3>₹4940 <strike>₹11,499</strike> 67% off</h3>
    </div>
    
    <div class="card">
      <img src="./images/image3.jpg" alt=""/>
      <p> Bridal Dress</p>
      <h3>₹11,000 <strike>₹19,000</strike> 67% off</h3>
    </div>
    
    </div>
    </div>
    
    
    
    </section>
    </>
    ,document.getElementById('root'))
    