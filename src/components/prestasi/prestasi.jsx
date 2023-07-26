import React from 'react'
import './prestasi.css'

import heroimg from '../../assets/heroimg-prestasi.png'

const prestasi = () => {
  return (
    <div className='container prestasi__container'>
      <div className='hero__anggota'>
        <div className='heroa__left'>
          <h1>Prestasi Electrical Science Club</h1>
          <p>Electrical Science Club memfasilitasi para mahasiswa Teknik Elektro untuk bergerak dalam bidang riset dan keilmiahan.</p>
        </div>
        <div className='heroa__right'>
          <img src={heroimg} alt="anggota-icon" />
        </div>
      </div>
    </div>
  )
}

export default prestasi