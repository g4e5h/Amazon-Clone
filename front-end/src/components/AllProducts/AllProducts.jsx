import React from 'react'
import "./style.css"
import allproducts from '../ProductsList'
import Card from './Card/Card'

export default function AllProducts(props) {
   let setMainCart=props.cartupdater;            //cart updater method
   
  return (<>  
   <div id="super-parent"> 
    {/* <div id="left-box">
     All Products 
    </div> */}

    <div id="right-box">
     {allproducts.map((singleProduct)=> <Card details={singleProduct} key={singleProduct.id} setMainCart={setMainCart} mainCart={props.mainCart} /> ) }
    </div>

    </div>

    </>
  )
}
