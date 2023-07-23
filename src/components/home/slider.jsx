import React from 'react'

import img1 from '../../assets/esc-img-2.png'
import img2 from '../../assets/esc-img-1.png'


const slider = () => {
  return (
    <div>
        <div className='slider'>
            <img src={img1} alt="img1" id='slide1' />
        </div>
        <div className='gradient'>
            <h2 className='text__header'></h2>
        </div>
    </div>
  )
}

export default slider