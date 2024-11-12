import React from 'react'
import './fcar.css'
import F1c from '../assets/img/fc1.png'
import F2c from '../assets/img/fc2.png'
import F3c from '../assets/img/fc3.png'
import F4c from '../assets/img/fc4.png'
const Fcars = (props) => {
  return (
   <div className="all-car">
        <div className="cardses">
           <div className="car-item">
           <img   src={F1c} alt="" />
                <div className="dis1">
                    <p >Model 2017  3100 Mi 240HP </p>
                    <p>automatic </p>
                </div>
           </div>
           <h2>BMW 6-Series Gran Coupe</h2>
           <p>$66.575</p>
           <p>Neque porro quisquam est, qui doliorem <br />ipsum quia dolor sit amet.consectetur,<br /> adipsci velit sed quia non</p>
        </div>

        <div className="cardses">
           <div className="car-item">
           <img className='pik'  src={F4c} alt="" />
                <div className="dis1">
                    <p >Model 2017  3100 Mi 240HP </p>
                    <p>automatic </p>
                </div>
           </div>
           <h2>Chevrolet Camaro WMV20</h2>
           <p>$66.575</p>
           <p>Neque porro quisquam est, qui doliorem <br />ipsum quia dolor sit amet.consectetur,<br /> adipsci velit sed quia non</p>
        </div>

        <div className="cardses">
           <div className="car-item">
           <img   src={F1c} alt="" />
                <div className="dis1">
                    <p >Model 2017  3100 Mi 240HP </p>
                    <p>automatic </p>
                </div>
           </div>
           <h2>Lamborghini V520</h2>
           <p>$66.575</p>
           <p>Neque porro quisquam est, qui doliorem <br />ipsum quia dolor sit amet.consectetur,<br /> adipsci velit sed quia non</p>
        </div>

        <div className="cardses">
           <div className="car-item">
           <img className='pik'  src={F4c} alt="" />
                <div className="dis1">
                    <p >Model 2017  3100 Mi 240HP </p>
                    <p>automatic </p>
                </div>
           </div>
           <h2>Audi A3 Sedan</h2>
           <p>$66.575</p>
           <p>Neque porro quisquam est, qui doliorem <br />ipsum quia dolor sit amet.consectetur,<br /> adipsci velit sed quia non</p>
        </div>
        
       
   </div>

  )
}

export default Fcars
