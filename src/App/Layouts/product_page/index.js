/* 
      Product Page

*/

import React, { useState } from 'react';





const Product = ({
  name,
  description,
  images,
  text1,
  text2,
  price1,
  price2
}) => {

  return (    
    <div className="product-container container row">
      <div className="panel border-right-grey col-centered col-12 col-lg-6">

        <div className="product-panel">
          <a href="#">
            <span className="color-lg">&#8592;</span>
            <span className="color-dg">All products</span>
          </a>
        </div>

        <div className="border-bottom-grey product-panel">
          <div className="product-title">
              <h1>{name}</h1>
              <div className="product-title-award-text">
                <span>{ name }</span>
              </div>
          </div>
          <ul className="nav nav-tabs">
            <li className="product-nav-item nav-item active">
              <div 
                // onClick={() => props.handleTextChange("description")}
              >
                <span>DESCRIPTION</span>
              </div>
            </li>
            <li className="product-nav-item nav-item">
              <div 
                // onClick={() => props.handleTextChange("details")}
              >
                <span>DETAILS</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="border-bottom-grey product-panel">
          <div className="product-text">
            <span>PRODUCT TEXT</span>
            {
              // this.state.text === 'description'
              //   ? this.renderDescription()
              //   : this.renderDetails()
            }
          </div>
          <div className="product-price">
              <span className="discount-price"> { price1 }</span>
              <span className="retail-price">{ price2 }</span>
          </div>

          <div>Colors</div>
          
          <div className="dropdown show">
            <a className="color-options-dropdown btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>{ images[0].color }</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <span>options</span>
            </div>
          </div>
        </div>


        <div className="product-cart-block">
          <div className="product-panel">
              <button onClick={(e) => {}} className="cart-btn btn btn-primary" />
          </div>
        </div>
      </div>     

      <div className="panel col-centered col-12 col-lg-6">
          <img src={ images[0].src } alt={name} />
      </div>

    </div>
  );

  
}


export default Product
