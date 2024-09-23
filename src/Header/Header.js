import React from 'react'
import logo from '../ASSETS/IMAGES/logo1.webp';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light head">
         <div className="container-fluid">
           <NavLink className="navbar-brand" href="#">
           <img src={logo}   alt="logo"/>
           </NavLink>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
             <ul className="navbar-nav   mb-lg-0">
               <li className="nav-item">
                 <NavLink className="nav-link active" aria-current="page"to="/">HOME</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link active" to="/Detail">MODELS</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link active" to="/booking">BOOK NOW</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link active" to="/Contact">CONTACT</NavLink>
               </li>
               
             
               
             </ul>
            
           </div>
           <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
             <ul className="navbar-nav   mb-lg-0">
                
               <li className='line' > <a href=''><span className='bi bi-instagram me-3 text-danger icons'></span></a></li>
               <li className='line'> <a href=''><span className='bi bi-facebook me-3 icons'></span></a></li> 
               <li className='line'> <a href=''><span className='bi bi-twitter me-3 icons'></span></a></li>
               
            
             
               
             </ul>
            
           </div>
         </div>
       </nav>

    </div>
  )
}

export default Header