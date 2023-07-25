import React from 'react'
import './home.css'

import Slider from './slider'
import Content1 from './content1'
import Vimi from './visi-misi'


const home = () => {
  return (
    <div id='home'>
      <Slider />
      <Content1 />
      <div className='content2'>
        <div className=''>
        </div>
      </div>
      <Vimi />
    </div>
  )
}

export default home