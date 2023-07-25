import React from 'react'
import './navigation.css'

import esc from '../../assets/esc_white.png'

import { Button} from 'react-bootstrap';

const navigation = () => {
  return (
    <nav className='navi'>
      <div className='navi__img'>
      <img src={esc} alt="" />
      </div>
      <div className='navi__txt'>
          <Button className='nav__btn' href="/">Home</Button>
          <Button className='nav__btn' href="/Kegiatan">Kegiatan</Button>
          <Button className='nav__btn' href="/Keanggotaan">Keanggotaan</Button>
          <Button className='nav__btn' href="/Prestasi">Prestasi</Button>
          <Button className='nav__btn' href="#contact">Contact</Button>
      </div>
    </nav>
  )
}

export default navigation