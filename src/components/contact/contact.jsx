import React from 'react'
import './contact.css'

const contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='container contact__container'>
        <div>
        </div>
        <div className='contact__right'>
          <div className='form__section'>
            <h2>Kirimkan kami pesan!</h2>
            <form className=' form' action="">
              <input name='name' type="text" placeholder='Nama Lengkap' className='form_text' required/>
              <input name='email' type="text" placeholder='Alamat Email' className='form_text' required/>
              <textarea name="message" placeholder='Tuliskan pesan anda...' rows="7" className='form_text' required></textarea>
              <button type='submit' className='btn btn-primary btn__submit'>Kirim</button>
            </form>
          </div>
        </div>
      </div>
      <div className='contact__left2'>
        <div className='container left__2'>
          <div className='left__bot'>
            <h3>ELECTRICAL SCIENCE CLUB</h3>
            <p>Gedung E6, Ruang ESC, Teknik Elektro, Fakultas Teknik, Universitas Negeri Semarang, Sekaran, Gunung Pati, Semarang, Indonesia, 50229</p>
            <ul>
              <li><b>Narahubung</b> : +62 58-0110-3672 (Zidan)</li>
              <li><b>Email</b> : esc.elektrounnes@gmail.com</li>
              <li><b>Instagram</b> : @esc.elektrounnes</li>
            </ul>
          </div>
          <div className='gird'>
          </div>
        </div>
        <footer>
          <p>&copy; 2023 Electrical Science Club.</p>
        </footer>
      </div>
    </div>
  )
}

export default contact