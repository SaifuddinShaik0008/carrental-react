import React from 'react'
import innerstyles from './Innerpages.module.css'


const Booking = () => {
  return (
    <div>
       <div className={innerstyles.breadcrumb}>
         <h1>Book Now</h1>
      </div>
      <div className='container-fluid p-5 '>
        <h2 className='text-center py-2 mb-3 border rounded shadow'>Why Choose Rideway Car Rentals</h2>
        <div className='row'>
          <div className='col-12 col-lg-6 bg-primary-subtle p-3 mb-3'>
            <p>Rideway Car Rentals offers a seamless and convenient experience for travelers looking to explore their destinations with ease. With a diverse fleet of well-maintained vehicles, customers can choose from compact cars for city driving to spacious SUVs for family adventures. Rideway prioritizes customer satisfaction, providing flexible rental options and competitive pricing. Their user-friendly website makes booking a car simple, and their dedicated support team is available to assist with any questions or needs. Whether you're on a business trip or a leisurely getaway, Rideway Car Rentals ensures that your journey is both comfortable and memorable.</p>
            <p>Rideway Car Rentals stands out in the competitive car rental market by emphasizing reliability and exceptional service. Their commitment to customer care is evident in every aspect of the rental process, from easy online reservations to a quick pickup and drop-off experience. With a range of eco-friendly vehicles alongside popular models, Rideway caters to diverse preferences while promoting sustainability. Each vehicle undergoes rigorous maintenance checks to ensure safety and performance on the road. Whether you're exploring a new city or returning home, Rideway Car Rentals makes transportation hassle-free, allowing you to focus on enjoying your journey.</p>

          </div>
          <div className='col-12  col-lg-6 '>
            
            <form className='border p-5 rounded shadow carrace'>
              <h2 className='text-white'>Book Now</h2>
              <div className='form-group'>
                <label htmlFor='inputEmail'>Name</label>
                <input type='text' className='form-control text-white' id='inputEmail' placeholder='Enter Name' />
              </div>
              <div className='form-group'>
                <label htmlFor='inputEmail'>Phone Number</label>
                <input type='tel' className='form-control' id='inputEmail' placeholder='Enter Phone Number' />
              </div>

              <div className='form-group'>
                <label htmlFor='inputEmail'>Email address</label>
                <input type='email' className='form-control' id='inputEmail' placeholder='Enter email' />
              </div>
             
              <div className='form-group'>
                <label htmlFor='inputAddress'>Address</label>
                <input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St' />
              </div>
              <div className='form-group'>
                <label htmlFor='inputCity'>City</label>
                <input type='text' className='form-control' id='inputCity' placeholder='City' />
              </div>
              <div className='form-group'>
                <label htmlFor='inputState'>State</label>
                <select id='inputState' className='form-control'>
                  <option selected>Choose...</option>
                  <option>TEXAS</option>
                  <option>HOUSTON</option>
                  <option>SEATLE</option>
                  <option>CHIKAGO</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='inputZip'>Zip</label>
                <input type='text' className='form-control' id='inputZip' placeholder='Zip' />
              </div>
              <button type='submit' className='btn btn-primary mt-3'>Book Now</button>
              
            </form>
          </div>

        </div>

      </div>
      <div className="container-fluid">
        <div className='row'>

        </div>

      </div>

    </div>
  )
}

export default Booking