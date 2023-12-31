import React from 'react'
import Esct from '../../assets/esc-transparent.png'

const content1 = () => {
  return (
    <div>
      <div className='container text__content1'>
        <h3>ELECTRICAL SCIENCE CLUB</h3>
        <p>Electrical Science Club (ESC) merupakan sebuah organisasi yang bergerak dalam bidang riset keilmiahan dibawah naungan Himponan Mahasiswa Teknik Elektro Fakultas Teknik Universitas Negeri Semarang.</p>
      </div>
      <div className='container about__container'>
        <div className='text__about'>
          <div className='text__container'>
          <h3>Tentang <span>Kami</span></h3>
          <p>Electrical Science Club (ESC) merupakan sebuah organisasi yang bergerak dalam bidang riset keilmiahan dibawah naungan Himponan Mahasiswa Teknik Elektro Fakultas Teknik Universitas Negeri Semarang.</p>
          <a href="#" className='btn btn-primary'>Selengkapnya</a>
          </div>
        </div>
        <div className='image__about'>
          <img src={Esct} alt="" />
        </div>
      </div>
    </div>
  )
}

export default content1