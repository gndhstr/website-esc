import React from 'react'
import { useState } from 'react';

function Brt () {

  const [cards] = useState([
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Angelica Cahyaningtyas',
      jabatan : 'Kepala Bidang'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Alfina Najwa',
      jabatan : 'Sekretaris Bidang'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Ahmad Fakih A.',
      jabatan : 'staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Annisa Sekar Banowati',
      jabatan : 'staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Bayu Ariya Mukti',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Naufal Muhammad',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:"Sya'ban Prasetyo",
      jabatan : 'Staff'
    },
  ])

  return (
    <div className='container psdm__container'>
      <div className='title__anggota'>
        <h3>Divisi BRT</h3>
        <p>Biro Rumah Tangga</p>
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

export default Brt