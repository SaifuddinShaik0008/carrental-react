import React from 'react'
import innerstyles from './Innerpages.module.css'

const Contact = () => {
  return (
    <div>
       <div className={innerstyles.breadcrumb}>
         <h1>Contact us</h1>
      </div>
      <div className='container-fluid'>
        
        <p className='text-center'>Feel free to contact us for any inquiries or booking.</p>
        <div className='row'>
         <div className='col-12 col-lg-6 '>
        <form className='p-3 border rounded carrace'>
          <h3 className='text-center text-white'>Contact Form</h3>
          <div className="mb-3">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label for="phone">Phone</label>
            <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
          </div>
          <div className="mb-3">
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Contact Us</button>
        </form>
        </div>
        <div className='col-12 col-lg-6 p-5'>
          <h3>Address</h3>
          <p>123 Main St, Anytown, USA</p>
          <h3>Hours</h3>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <h3>Email</h3>
          <p>info@example.com</p>
          <h3>Phone</h3>
          <p>123-456-7890</p> 


        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact