import React from 'react'
import { useState } from 'react';

function Ph () {

  const [cards] = useState([
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'M. Zidan Maali',
      jabatan : 'Ketua ESC 2023'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Nur Fitri Sukrina',
      jabatan : 'Wakil Ketua ESC 2023'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Amalia Septiani',
      jabatan : 'Sekretaris I'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Pradika Candra A.',
      jabatan : 'Sekretaris II'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Lenita Cahya A.',
      jabatan : 'Bendahara I'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Hana Aeni Mustahibah',
      jabatan : 'Bendahara II'
    },
  ])

  return (
    <div className='container psdm__container'>
      <div className='title__anggota'>
        <h3>Pengurus Harian</h3>
        <p>Pengurus Harian Electrical Science Club 2023.</p>
      </div>
      <div className='cardsection__detail'>
        { cards.map((card, i) => (

          <div key={i} className='card__anggota card__detail'>
            <div className='card__header'>
              {/* left this empty! */}
            </div>
            <div className='card__profile'>
              <img src={card.img} alt="profile-img" className='img__profile'/>
            </div>
            <div className='card__text'>
              <h3>{card.nama}</h3>
              <p>{card.jabatan}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Ph