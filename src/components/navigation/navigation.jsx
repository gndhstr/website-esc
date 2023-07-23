import React from 'react'
import './navigation.css'

import esc from '../../assets/esc_white.png'

import {Link} from 'react-scroll'

const navigation = () => {
  return (
    <nav className='navi'>
      <div className='navi__img'>
      <img src={esc} alt="" />
      </div>
      <div className='navi__txt'>
          <Link activeClass='active' spy to="home" >Home</Link>
          <Link activeClass='active' spy to="kegiatan" >Kegiatan</Link>
          <Link activeClass='active' spy to="keanggotaan">Keanggotaan</Link>
          <Link activeClass='active' spy to="prestasi" >Prestasi</Link>
          <Link activeClass='active' spy to="contact" >Contact</Link>
      </div>
    </nav>
  )
}

export default navigation