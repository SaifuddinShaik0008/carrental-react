import React from 'react'



import PIC2 from '../ASSETS/IMAGES/PIC2.jpg';
import image from '../ASSETS/IMAGES/img1.jpg';

import PIC6 from '../ASSETS/IMAGES/PIC7.jpg';

import PIC5 from '../ASSETS/IMAGES/PIC5.jpg';
import { Carousel } from 'bootstrap';

const Home = () => {


 

 

  return (
    <div>
      <div className='container-fluid p-0 vh-100'>
        <div id="carouselExampleFade" class="carousel slide carousel-fade vh-100" data-bs-ride="carousel">
          <div className="carousel-inner ">
            <div class="carousel-item active h-75">
              <img src={PIC2} className="d-block w-100 vh-100" alt="..." />
            </div>
            <div class="carousel-item h-75">
              <img src={PIC6} className="d-block w-100 vh-100 " alt="..." />
            </div>
            <div class="carousel-item h-75">
              <img src={PIC5} className="d-block w-100 vh-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      <div className='container mt-3 p-5'>
        <h1 className='text-center text-bg-primary rounded p-3'>Welcome to RideAway Website</h1>
        <p>
          Welcome to RideAway Rentals, your ultimate destination for seamless and affordable car and bike rentals. Whether you're planning a weekend getaway, a business trip, or simply need a ride around town, we offer a diverse fleet of vehicles to suit every need. From compact cars and luxury sedans to rugged SUVs and efficient motorcycles, our selection ensures you'll find the perfect ride. Our user-friendly website makes booking a breeze, with real-time availability and instant confirmation. Plus, enjoy the convenience of flexible rental options tailored to fit your schedule, all backed by our commitment to exceptional service and quality.

        </p>
        <p>At RideAway Rentals, we prioritize your safety and satisfaction above all else. Our vehicles undergo rigorous maintenance and are thoroughly inspected to ensure top performance and reliability. With transparent pricing and no hidden fees, you can rent with confidence, knowing you're getting the best value for your money. Our dedicated customer support team is always here to assist with any questions or special requests, ensuring a smooth and enjoyable rental experience. Discover the freedom of the open road with RideAway Rentals—your journey starts here.</p>
      </div>
      <div className='container-fluid bg-body-tertiary bg-danger-subtle ps-0 '>
        <div className='row'>
          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center pt-2 '>
            <div>
            <h2>Why RideAway Rentals?</h2>
            <ul>
              <li>Unlimited rentals</li>
              <li>Flexible pricing options</li>
              <li>Real-time availability</li>
              <li>Transparent pricing</li>
              <li>No hidden fees</li>
              <li>24/7 customer support</li>
            </ul>
            </div>
          </div>  
          <div className='col-12 col-lg-6 pe-0 '>
            <img src={PIC2} className='img-fluid ' alt='...'/>
          </div>

          
        </div>

      </div>
      <div className='container-fluid bg-body-tertiary bg-info-subtle '>
      <div className='row'>
          <div className='col-12 col-lg-6 ps-0  '>
          <img src={PIC5} className='img-fluid  ' alt='...'/>
          </div>  
          <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center '>
           <div>
            <h2>Our Fleet</h2>
            <ul>
              <li>100+ compact cars</li>
              <li>50+ luxury sedans</li>
              <li>30+ SUVs</li>
              <li>20+ motorcycles</li>
              <li>10+ off-road vehicles</li>
              <li>500+ vehicles on loan</li>
            </ul>
            
           </div>
            

            
            
          </div>

          
        </div>
        

      </div>
      <div className="container-fluid p-5 text-center bg-secondary-subtle">
        <h2 className='text-center '>Our Services</h2>
        <div className="row">
          <div className='col-12 col-lg-3 p-5  '>
            <button type="button" className="btn btn-danger">Rentals</button>
          </div>
          <div className='col-12 col-lg-3 p-5 '>
            <button type="button" className="btn btn-success">Racings</button>
          </div>
          <div className='col-12 col-lg-3 p-5'>
            <button type="button" className="btn btn-info">Tournments</button>
          </div>
          <div className='col-12 col-lg-3 p-5 '>
            <button type="button" className="btn btn-warning">Sales</button>
          </div>
        </div>
      </div>
      <div className='container p-5'>
        <h2 className='text-center'>Contact Us</h2>
        <div className='row'>
          <div className='col-12 col-lg-6 mb-3'>
            <img src={image} className='w-100  rounded shadow' alt='jof'/>
          </div>
          <div className='col-12 col-lg-6'>
            <form className='border p-4 rounded'>
              <div className="mb-3">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label for="phone">Phone number</label>
                <input type="tel"  className="form-control" id="phone" required />
                <div id="phoneHelp" className="form-text">We'll only display your last four digits.</div>
              
              </div>


              <div className="mb-3">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email" required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className='mb-3'>
                <label for="date">Date</label>
                <input type='date'  className="form-control" id="date"  required/>
              </div>
              <div className="mb-3">
                <label for="time">Time</label>
                <input type='time'  className="form-control" id="time"  required/>
              </div>
             
              <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home