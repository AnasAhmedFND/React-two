import React from 'react'
import './form.css'
const form = () => {
  return (
    <div className="from">
      <div className="card-item">
        <div className="row-item1">
            <h1 className="level">Select Your</h1>
              <select name="year" id="select1">
                  <option value="year">Year</option>
                  <option value="year">Year</option>
                  <option value="year">2045</option>
                  <option value="year">2044</option>
                  <option value="year">2043</option>
              </select>
            <h1 className="level">Body Style</h1>
              <select name="select" id="select1">
                <option value="#">Style</option>
                <option value="#">Sedan</option>
                <option value="#">Van</option>
                <option value="#">Raadster</option>
              </select>            
          </div>

          <div className="row-item2">
            <h1 className="level">Select Make</h1>
              <select name="make" id="select1">
                <option value="#">Make</option>
                <option value="#">Toyota</option>
                <option value="#">Holden</option>
                <option value="#">Maecedes-Benz.</option>
              </select>
            <h1 className='lavel-car'>Car Condition</h1>
              <select name="make" id="select1">
                <option value="#">Condition</option>
                <option value="#">Something</option>
                <option value="#">Something</option>
                <option value="#">Something.</option>
              </select>
          </div>

          <div className="row-item3">
            <h1 className='lavel-car'>Select Model</h1>
            <select name="model" id="select1">
                <option value="#">Model</option>
                <option value="#">Kia-Rio</option>
                <option value="#">Mitsubishi</option>
                <option value="#">Fard</option>
              </select>
            <h1 className="level">Select Price</h1>
            <select name="price" id="select1">
                <option value="#">price</option>
                <option value="#">$0.00</option>
                <option value="#">$0.00</option>
                <option value="#">$0.00</option>
              </select>
          </div>

         <div className="but">
         <button className='button'>Search</button>
         </div>
        </div>
       
    </div>
  )
}

export default form
