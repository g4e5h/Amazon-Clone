import React from 'react'
import "../Slider/sliderStyle.css"

function Slider(props) {
  return (
    <div id='single-slider-image'>
    <img src={props.src} alt="*" />
    </div>
  )
}

export default Slider;