import React from 'react'
import "./productList.css"
import Product from "../product/product"

import {products} from "../../data"

 const ProductList = () => {
  return (
    <div className = "pl">
      <div className ="pl-texts" >
        <h1 className ="pl-title">Projects </h1>
        <p className="pl-desc">
         Here are the list of projects made by me. 
        </p>
        </div>
        <div className="pl-list">
          {products.map((item=> (
          <Product key = {item.id} img = {item.img} link = {item.link}/>) 
          
          ))}
          
          
        </div>




    </div>
  )
} ;

export default ProductList ; 
