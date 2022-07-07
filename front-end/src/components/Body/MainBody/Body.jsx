import React from 'react'
import './style.css'
import LargeCompContainer from './MainBodyContainers/LargeContainers/LargeCompContainer'
import arr from './MainBodyContainers/LargeBoxArray'
import Slider from '../Slider/Slider'
import imageSrcArray from '../Slider/sliderimages'

export default function Body() {
   
  let val=0;
  function handler(change){

    let images=document.querySelectorAll('#single-slider-image');
    images.forEach((value)=>{value.style.display="none"});

    if(val===0 && change===-1) val=images.length-1; 
    else val=(val+change)%images.length;
    images[val].style.display="block";
  }

  return (
    <div id="main-body">
    <div id='image-slider'>
      <div id='single-slider-image' style={{display:"block"}}>
      <img src="/body-images-background/0.jpeg" alt="*" />
      </div>
       {imageSrcArray.map((obj)=><Slider key={obj.id} src={obj.src} />)}
       <button id='left-slider-button' onClick={()=>handler(+1)}>&#10094;</button>
       <button id='right-slider-button' onClick={()=>handler(-1)}>&#10095;</button>
      </div>
  
      <div id='above-slider-absolute-container'>

          <div id="main-container">
            
            {
              arr.map(obj => 

            <LargeCompContainer  key={obj.id} heading={obj.heading} center={obj.center} bottomAnchor={obj.bottomAnchor} filter={obj.filter}  / >

             ) 
            }

          </div>

      </div>

    </div>
  )
}
