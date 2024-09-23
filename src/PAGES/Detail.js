import React from 'react'
import fig1 from '../ASSETS/IMAGES/img1.jpg';
import fig2 from '../ASSETS/IMAGES/img2.webp';
import fig3 from '../ASSETS/IMAGES/img3.jpg';
import fig4 from '../ASSETS/IMAGES/img4.jpg';
import PIC2 from '../ASSETS/IMAGES/PIC2.jpg';
import fig5 from '../ASSETS/IMAGES/img5.jpg';
import PIC6 from '../ASSETS/IMAGES/PIC7.jpg';
import fig6 from '../ASSETS/IMAGES/img6.png';

import fig7 from '../ASSETS/IMAGES/img7.webp';

import fig8 from '../ASSETS/IMAGES/img8.jpg';

import fig9 from '../ASSETS/IMAGES/img8.webp';
import innerstyles from './Innerpages.module.css'




const Detail = () => {
  return (
    <div>
      <div className={innerstyles.breadcrumb}>
         <h1>Details</h1>
      </div>
      <div className='container-fluid p-5'>
        <h1 className=''>RENTALS:</h1>
        <div className='row'>
          <h2 className='text-center p-3 border rounded'>Available BMWS</h2>
          <div className='col-12 col-lg-3 mb-3 '>
            <div className='card'>
              <img className='card-img-top' src={fig1} />
              <div className='card-body'>
                <h5 className='card-title'>BMW QW15</h5>
                <p className='card-text'>Rent:$140/day</p>
                <a href='#' className='btn btn-primary'>BOOK NOW</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-3 mb-3 '>
            <div className='card'>
              <img className='card-img-top' src={fig2} />
              <div className='card-body'>
                <h5 className='card-title'>BMW X15</h5>
                <p className='card-text'>Rent:$300/day</p>
                <a href='#' className='btn btn-primary'>BOOK NOW</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-3 mb-3 '>
            <div className='card'>
              <img className='card-img-top' src={fig3} />
              <div className='card-body'>
                <h5 className='card-title'>BMW SX6</h5>
                <p className='card-text'>Rent:$400/day</p>
                <a href='#' className='btn btn-primary'>BOOK NOW</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-3  mb-3'>
            <div className='card'>
              <img className='card-img-top' src={fig4} />
              <div className='card-body'>
                <h5 className='card-title'>BMW Z12</h5>
                <p className='card-text'>Rent:$500/day</p>
                <a href='#' className='btn btn-primary'>BOOK NOW</a>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div className='row'>
            <h2 className='text-center p-3 border rounded '>Available OODIES</h2>
            <div className='col-12 col-lg-3 mb-3'>
              <div className='card'>
                <img className='card-img-top' src={fig5} />
                <div className='card-body'>
                  <h5 className='card-title'>OODIE WE12</h5>
                  <p className='card-text'>Rent:$345/day</p>
                  <a href='#' className='btn btn-primary'>BOOK NOW</a>
                </div>
              </div>

            </div>
            <div className='col-12 col-lg-3 mb-3'>
              <div className='card'>
                <img className='card-img-top' src={fig6} />
                <div className='card-body'>
                  <h5 className='card-title'>OODIE R45</h5>
                  <p className='card-text'>Rent:$234/day</p>
                  <a href='#' className='btn btn-primary'>BOOK NOW</a>
                </div>
              </div>

            </div>
            <div className='col-12 col-lg-3 mb-3'>
              <div className='card'>
                <img className='card-img-top' src={fig7} />
                <div className='card-body'>
                  <h5 className='card-title'>OODIE D45</h5>
                  <p className='card-text'>Rent:$346/day</p>
                  <a href='#' className='btn btn-primary'>BOOK NOW</a>
                </div>
              </div>

            </div>
            <div className='col-12 col-lg-3 mb-3'>
              <div className='card'>
                <img className='card-img-top' src={fig8} />
                <div className='card-body'>
                  <h5 className='card-title'>OODIE G67</h5>
                  <p className='card-text'>Rent:$564/day</p>
                  <a href='#' className='btn btn-primary'>BOOK NOW</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid p-5'>
        <h1 className=''>SALES:</h1>
        <div className='row'>
          <h2 className='text-center p-3 border rounded'>Ready to Selling </h2>
          <div className='col-12 col-lg-3 mb-3'>
            <div className='card'>
              <img className='card-img-top' src={fig9} />
              <div className='card-body'>
                <h5 className='card-title'>Mercedes GLE</h5>
                <p className='card-text'>Sales:$656453</p>
                <a href='#' className='btn btn-primary'>BOOK NOW</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-3 mb-3'>
            <div className='card'>
              <img className='card-img-top' src={fig1} />
              <div className='card-body'>
                <h5 className='card-title'>Volkswagen Tiguan</h5>
                <p className='card-text'>Sales:$856453</p>
                <a href='#' className='btn btn-primary'>BOOK NOW</a>
              </div>
            </div>

          </div>
          <div className='col-12 col-lg-3 mb-3'>
            <div className='card'>
              <img className='card-img-top' src={fig2} />
              <div className='card-body'>
                <h5 className='card-title'>BMW X5</h5>
                <p className='card-text'>Sales:$356453</p>
                <a href='#' className='btn btn-primary'>BOOK NOW</a>
              </div>
            </div>

          </div>
          <div className='col-12 col-lg-3 mb-3'>
            <div className='card'>
              <img className='card-img-top' src={fig3} />
              <div className='card-body'>
                <h5 className='card-title'>Ford Mustang</h5>
                <p className='card-text'>Sales:$256453</p>
                <a href='#' className='btn btn-primary'>BOOK NOW</a>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="container-fluid p-5">
        <h1>TOURNMENTS:</h1>
        <div className='row'>
          <h2 className='text-center p-3 border rounded'>Up Coming Tournments </h2>
          <div className='col-12 col-lg-6 mb-3'>
            <div className='card'>
              <img className='card-img-top w-100' src={PIC2} />
              <div className='card-body'>
                <h5 className='card-title'>BMW Series 5</h5>
                <p className='card-text'>Date: 20th April 2022</p>
                <p className='card-text'>Location: BMW Stadium</p>
                <a href='#' className='btn btn-primary'>Details</a>
              </div>
            </div>


          </div>
          <div className='col-12 col-lg-6 mb-3'>
            <div className='card'>
              <img className='card-img-top w-100' src={PIC6} />
              <div className='card-body'>
                <h5 className='card-title'>Mercedes GLE</h5>
                <p className='card-text'>Date: 25th April 2022</p>
                <p className='card-text'>Location: Mercedes Stadium</p>
                <a href='#' className='btn btn-primary'>Details</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container-fluid p-5'>
        <h1>RACING:</h1>
        <div className='row'>
          <h2 className='text-center p-3 border rounded'>Recent Races </h2>
          <div className='col-12 col-lg-4 mb-3'>
            <div className='card'>
              <img className='card-img-top w-100' src={fig1} />
              <div className='card-body'>
                <h5 className='card-title'>Volkswagen Tiguan</h5>
                <p className='card-text'>Date: 15th April 2022</p>
                <p className='card-text'>Location: Volkswagen Stadium</p>
                <a href='#' className='btn btn-primary'>Details</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-3 '>
            <div className='card'>
              <img className='card-img-top w-100' src={fig3} />
              <div className='card-body'>
                <h5 className='card-title'>Ford Mustang</h5>
                <p className='card-text'>Date: 18th April 2022</p>
                <p className='card-text'>Location: Ford Stadium</p>
                <a href='#' className='btn btn-primary'>Details</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 mb-3'>
            <div className='card'>
              <img className='card-img-top w-100' src={fig2} />
              <div className='card-body'>
                <h5 className='card-title'>BMW X5</h5>
                <p className='card-text'>Date: 22nd April 2022</p>
                <p className='card-text'>Location: BMW Stadium</p>
                <a href='#' className='btn btn-primary'>Details</a>
              </div>
            </div>
          
          </div>


        </div>
      </div>

    </div>
   
  )
}

export default Detail