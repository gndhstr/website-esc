import React from 'react'
import { useState } from 'react';

function Software () {

  const [cards] = useState([
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Marenda Iqbal M.',
      jabatan : 'Kepala Bidang'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'sufiyatun Nada',
      jabatan : 'Sekretaris Bidang'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Tri Agus Wahyudi',
      jabatan : 'staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Naufal Musyafadani',
      jabatan : 'staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Haikal Eksa Abu Bakar A.',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Devina Ayu Septariza',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:'Gopreto Mongolitan',
      jabatan : 'Staff'
    },
    {
      img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
      nama:"Farid Akhwan",
      jabatan : 'Staff'
    },
    {
        img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
        nama:"M. Hazim Putra Pratama",
        jabatan : 'Staff'
    },
    {
        img : 'https://drive.google.com/uc?export=view&id=19jmsgM_yXQvbzi6kEpVq6hSW8elGx0tS',
        nama:"Alifian",
        jabatan : 'Staff'
    },
  ])

  return (
    <div className='container psdm__container'>
      <div className='title__anggota'>
        <h3>Bidang Software</h3>
        <p>Bidang Softwaree Electrical Science Club 2023.</p>
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

export default Software