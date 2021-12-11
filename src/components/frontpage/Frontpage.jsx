import React from 'react'
import "./frontpage.css"

function Frontpage() {
    return (
        <div className="front-page-container">
            <div className="front-page-wrapper">
                <div className="front-page-logo"></div>
                <div className="front-page-details">
                    <div className="front-page-first-section">
                        <div className="arrow-icon-wrapper">
                            <span className="arrow-icon">&#8592;</span> <span className="arrow-text">Back Powdur</span>
                        </div>
                        <div className="price-section">
                            <p className="price-text">Pure set</p>
                            <span className="product-price"> $ 65.00</span>
                        </div>
                    </div>
                    <div className="product-img-and-sponsor">
                        <div className="product-img">
                            <img src="/images/img_avatar.png" alt="" className="powder-image"/>
                        </div>
                        <div className="product-sponsor">
                            <span className="sponsor-name">Powered by Stripe</span>
                            <span className="vertical-line"></span>
                            <span className="product-terms">Terms</span>
                            <span className="product-privacy">Privacy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontpage
