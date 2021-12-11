import React from "react";
import "./formpage.css";

function Formpage() {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-header">
          <img src="/images/XMLID 34.png" alt="" className="img-logo" />
        </div>
        <div className="payment-text">
          <span className="payment-means">Or pay with card</span>
          </div>
        <div className="form-input">
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <span className="input-field">
            <input type="text" />
            </span>
          </div>
          <div className="email-input">
            <label htmlFor="Country">Country or region</label>
            <div className="country-input">
              <input type="text" placeholder="1234 1234 1234 1234" />
              <span className="card-images">
                <img className="a" src="/images/Visa.png" alt="" />
                <img className="a" src="/images/Mastercard.png" alt="" />
                <img className="a" src="/images/American Express.png" alt="" />
                <img className="a" src="/images/Discover.png" alt="" />
              </span>
            </div>
            <div className="sub-input">
            <div className="i-field">
              <input type="text" placeholder="MM/YY" />
              </div>
              <div className="i-field">
              <input type="text" placeholder="CVC" />
              <span className="cvc-image">
              <img className="b" src="/images/CVC Card.png" alt="" />
              </span>
                
              </div>
              
            
            </div>
          </div>

          <div className="email-input">
            <label htmlFor="email">Name on card</label>
            <span className="input-field">
            <input type="text" />
            </span>
            
          </div>
          <div className="email-input">
            <select name="country" id="" className="country-list">
              <option value="US">United State</option>
            </select>
            <div className="sub-input">
            <span className="country-zip">
              <input type="text" placeholder="ZIP" />
              </span>
            </div>
          </div>
        </div>
        <button className="btn-price">Pay $65.00</button>
      </div>
    </div>
  );
}

export default Formpage;
