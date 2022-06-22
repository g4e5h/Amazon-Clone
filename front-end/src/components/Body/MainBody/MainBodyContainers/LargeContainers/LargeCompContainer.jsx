
import React from 'react'
import './style.css'
import allproducts from '../../../../ProductsList'
import SmallContainer from '../SmallContainers/SmallContainer';

export default function LargeCompContainer(props) {
  let allfiltered=null;
  let requiredfour=null;
  if(props.filter!=null){
  allfiltered=allproducts.filter((singleProduct) => {
   
     return props.filter[0]===singleProduct.type;
  
  } );

  requiredfour=allfiltered.filter((item,index)=>index<4);
  }

  return (
    <div id='large-comp-container-main'>
     <span id='large-comp-container-heading'>{props.heading}</span>


     <div id='large-comp-container-elementholder'> 
      
     {allfiltered===null && props.center}
     

     
     {requiredfour!=null &&

      requiredfour.map((eachFilteredProduct) =>
      <SmallContainer imagesrc={`/${eachFilteredProduct.image.slice(1)}`} imagealt={eachFilteredProduct.image.slice(15)} description={eachFilteredProduct.description} key={eachFilteredProduct.id} / >
      )
     } 
   


     </div>


     <a id='large-comp-container-bottom-anchor' href='/{}'>{props.bottomAnchor}</a>
    </div>
  )
}
