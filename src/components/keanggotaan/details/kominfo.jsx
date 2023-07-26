import React from 'react'
import { useState } from 'react';

function Kominfo () {

  const [cards] = useState([
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Gandhi Satria Mukti',
      jabatan : 'Kepala Bidang'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Ikfal Ramadhan',
      jabatan : 'Sekretaris Bidang'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'M. Abyan Nizar M.',
      jabatan : 'staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Dimas Alfarizky Ilham',
      jabatan : 'staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:"Ro'uf Aufalin Al-G.",
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'M. Farrel Ekaputra',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Afriani Fajar N.',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:"Mohammad Idrus",
      jabatan : 'Staff'
    },
  ])

  return (
    <div className='container psdm__container'>
      <div className='title__anggota'>
        <h3>Divisi Komp-Info</h3>
        <p>Komunikasi, Publikasi, Informasi.</p>
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

export default Kominfo