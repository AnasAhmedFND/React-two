import React from 'react'
import './nav.css'
import Cars from '../assets/cars1.png'

const Navbar = () => {
  return (
    <div className="main">
         <div className="bot">
             <img className='img' src={Cars} alt="" />
         </div>
        
       <div className="top">
       <nav className='navbar'>
            <div className="">
                <h1>CARVILLA</h1>
            </div>
            <ul className='link'>
                <li className='home'>HONE </li>
                <li className='list'>SRVICEE </li>
                <li className='list'>FEATURED CARS </li>
                <li className='list'>NEW CARS </li>
                <li className='list'>BRANNDS</li>
                <li className='list'>CONTACT</li>
            </ul>
        </nav>


        <div className="hero">
            <h1>GET YOUR DESIRED CAR IN RESONABLE PRICE</h1>
            <p className='hero-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='hero-but'>Contact Us</button>
        </div>
       </div>
    </div>
  )
}

export default Navbar
