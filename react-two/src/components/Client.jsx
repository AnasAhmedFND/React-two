import React from 'react'
import './client.css'
import C1 from '../assets/img/c1.png'
import C2 from '../assets/img/c2.png'
import C3 from '../assets/img/c3.png'
const Client = () => {
  return (
    <div className="our-cliens">
        <h2 className='client-head'>What Ou<span className='und'>r Cli</span>ents Say</h2>
        <div className="client-item">
            <div className="client1">
                <img src={C1} alt="" />
                <p>Sed ut pers unde omnis isfte natus <br />error sit voluptatem accusantium <br />dolor laudan rem aperiam, eaque <br /> ipsa quae ab illo inventore verit</p>
                <h3>John Doe </h3>
                <h3>Washington</h3>               
            </div>

            <div className="client1">
                <img src={C2} alt="" />
                <p>Sed ut pers unde omnis isfte natus <br />error sit voluptatem accusantium <br />dolor laudan rem aperiam, eaque <br /> ipsa quae ab illo inventore verit</p>
                <h3>John Doe </h3>
                <h3>Washington</h3>
               
            </div>

            <div className="client1">
                <img src={C3} alt="" />
                <p>Sed ut pers unde omnis isfte natus <br />error sit voluptatem accusantium <br />dolor laudan rem aperiam, eaque <br /> ipsa quae ab illo inventore verit</p>
                <h3>John Doe </h3>
                <h3>Washington</h3>
               
            </div>
            
        </div>
    </div>
  )
}

export default Client
