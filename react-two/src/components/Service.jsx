import React from 'react'
import './service.css'
import Car from '../assets/img/car.jpg'
import Seting from '../assets/img/car-set.jpg'
import File from '../assets/img/file-car.jpg'
const service = () => {
  return (
   <div className="service">
    <div className="card1">        
        <img className='image' src={Car} alt="" />
        <h1 className='heading'>Largest Dealership of Cars</h1>
        <p className='discription'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
        <p className='mark'>_</p>
    </div>

    <div className="card1">
        <img className='image' src={Seting} alt="" />
        <h1 className='heading'>Unlimited Repair Warranty</h1>
        <p className='discription'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
        <p className='mark'>_</p>
    </div>

    <div className="card1">
        <img className='image' src={File} alt="" />
        <h1 className='heading'>Insurance Suppot</h1>
        <p className='discription'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
        <p className='mark'>_</p>
    </div>
   </div>
  )
}

export default service
