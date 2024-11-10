import React from 'react'
import './cars.css'
import Car from '../assets/img/car1.png'
const Cars = () => {
  return (
   <div className="cars-slider">
    <h3 className='checkout'>checkout the latest cars</h3>
    <h1 className='newest'>Ne<span className='underline'>west C</span>ars</h1>
   <div className="car-model">
        <div className="car-img">
        <img src={Car} alt="" />
        </div>

        <div className="right">
            <h1 className='bmw'>BMW Series-3 Wagon</h1>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit <br />esse cillum dolore eu fugiat nulla pariatur. Excepteur <br /> sint occaecat cupidatat non proident, sunt, in culpa <br /> qui offcia deserunt mollit anim id est laborum. </p>
            <p>sed ut pers unde omnis iste nats error sit <br />voluptatem occusantium doloremque laudantium.</p>
            <button className='button'>View Details</button>
        </div>
   </div>

   </div>
  )
}

export default Cars
