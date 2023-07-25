import React from 'react'
import './keanggotaan.css'

import heroimg from '../../assets/heroimg-contact.png'

const keanggotaan = () => {
  return (
    <div className='container container__anggota'>
      <div className='hero__anggota'>
        <div className='heroa__left'>
          <h1>Keanggotaan Electrical Science Club</h1>
          <p>Electrical Science Club memiliki beberapa divisi seperti Hardware, Software, Kominfo, PH, BRT, dan PSDM.</p>
        </div>
        <div className='heroa__right'>
          <img src={heroimg} alt="contact-icon" />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default keanggotaan