import React from 'react'
import './futtar.css'
import Fb from '../assets/t-img/fb.png'
import Ln from '../assets/t-img/ln.png'
import In from '../assets/t-img/in.png'
const Futtar = () => {
  return (
   <div className="fmain">
     <div className="futter">
        <div className="carvillar">
            <h1>CARVILLA</h1><br />
            <p>Ased do eiusm tempor incidi ut <br /> labore et dolore magnaian aliqua. Ut <br /> enim ad minim veniam.</p>
            <p>name@domain.com <br />+1 (222) 1234567890</p>                        
        </div>

        <div className="devloon">
            <h2>ABOUT DEVLOON</h2><br />
            <p>About Us</p>
            <p>Career</p>
            <p>Terms of service</p>
            <p>Privacy Policy</p>
        </div>

        <div className="brands">
            <h2>TOP BRANDS</h2><br />
            <p>BMW</p>
            <p>Lamborghini</p>
            <p>Camaro</p>
            <p>Audi</p>
            <p>Infiniti</p>
            <p>Nissan</p>
        </div>

        <div className="ferrari">
            <p >Ferrari</p>
            <p>Parsche</p>
            <p>Land Rover</p>
            <p>Aston Martin</p>
            <p>Mersees</p>
            <p>Opel</p>
        </div>

        <div className="lerrer">
            <h2>NEWS LETTER</h2><br />
            <p>Subscribe to get latest news update <br /> and informations</p>
            <input type="text" placeholder='Add Email' />
        </div>
    </div>
    <div className="butt">
        <p>© copyright. designed and developed by themesine.</p>
        <div className="social-img">
            <img src={Fb} alt="" />
            <img src={Ln} alt="" />
            <img src={In} alt="" />
        </div>
    </div>
   </div>
  )
}

export default Futtar
