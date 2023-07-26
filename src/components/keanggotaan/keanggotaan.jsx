import React from 'react'
import { useState } from 'react';
import './keanggotaan.css'

import heroimg from '../../assets/heroimg-contact.png'

function Keanggotaan () {

  const [cards] = useState([
    {
      link : '/Keanggotaan/PSDM',
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      text:'PSDM',
    },
    {
      link : '/Keanggotaan/PH',
      img : 'https://drive.google.com/uc?export=view&id=1JSvKInXb5HtV-XyCU2c-cd9egho77Lvc',
      text:'Pengurus Harian',
    },
    {
      link : '/Keanggotaan/BRT',
      img : 'https://drive.google.com/uc?export=view&id=14rXaEBoGmFLFC4ZFyQuOC3_wLNEUkiOK',
      text:'BRT',
    },
    {
      link : '/Keanggotaan/Software',
      img : 'https://drive.google.com/uc?export=view&id=11LbdDwn8E4WyAX1ORSf0RqVTcKRlIINX',
      text:'Software',
    },
    {
      link : '/Keanggotaan/Komp-Info',
      img : 'https://drive.google.com/uc?export=view&id=1VIw-dp3YURWdgPQtTJzdWsn7DqQFk7mW',
      text:'Komp-Info',
    },
    {
      link : '/Keanggotaan/Hardware',
      img : 'https://drive.google.com/uc?export=view&id=1nBHiJ0aXyCzmVd02y2KuSN3SdClQzsgB',
      text:'Hardware',
    },
  ])

  return (
    <div className='container container__anggota'>
      <div className='hero__anggota'>
        <div className='heroa__left'>
          <h1>Keanggotaan Electrical Science Club</h1>
          <p>Electrical Science Club memiliki beberapa divisi seperti Hardware, Software, Kominfo, PH, BRT, dan PSDM.</p>
        </div>
        <div className='heroa__right'>
          <img src={heroimg} alt="anggota-icon" />
        </div>
      </div>
      <div className='cardsection__anggota'>
        { cards.map((card, i) => (

          <a href={card.link} key={i} className='card__anggota'>
          <div className='card__header'>
            {/* left this empty! */}
          </div>
          <div className='card__profile'>
            <img src={card.img} alt="profile-img" className='img__profile'/>
          </div>
          <div className='card__text'>
            <h3>{card.text}</h3>
          </div>
          </a>

        ))}
      </div>
    </div>
  )
}

export default Keanggotaan