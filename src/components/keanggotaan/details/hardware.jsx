import React from 'react'
import { useState } from 'react';

function Hardware () {

  const [cards] = useState([
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Agus Ardiyanto',
      jabatan : 'Kepala Bidang'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Dhea Puspitasari',
      jabatan : 'Sekretaris Bidang'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Ikhsan Nur Huda',
      jabatan : 'staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'M. Maulana Maghribi',
      jabatan : 'staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Naufal Ilham Ramadhani',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Dalilo Yogi Essy P.',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Dimas Arif Mutaqi',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:"M. Umar Syarifudin",
      jabatan : 'Staff'
    },
    {
        img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
        nama:"Ferdy Setianto",
        jabatan : 'Staff'
    },
    {
        img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
        nama:"Akmal Fikri",
        jabatan : 'Staff'
    },
  ])

  return (
    <div className='container psdm__container'>
      <div className='title__anggota'>
        <h3>Bidang Hardware</h3>
        <p>Bidang Hardware Electrical Science Club 2023.</p>
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

export default Hardware