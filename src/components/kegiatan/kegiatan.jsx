import React from 'react';

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, Button, CardActions, Typography, CardContent} from '@mui/material'

import carImage from '../../assets/image1.jpg'
import kegiatanImage from '../../assets/group1.png'

import './kegiatan.css'
import { useState } from 'react';

function Kegiatan() {
  const [cards] = useState([
    {
      title:'Sekolah Programing',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacus orci, ullamcorper vitae ante ut, scelerisque dignissim nulla. Fusce tristique nulla id massa sodales, vitae consectetur mi euismod.'
    },
    {
      title:'Sekolah Sistem Kontrol',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacus orci, ullamcorper vitae ante ut, scelerisque dignissim nulla. Fusce tristique nulla id massa sodales, vitae consectetur mi euismod.'
    },
    {
      title:'Upgrading ESC 2023',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacus orci, ullamcorper vitae ante ut, scelerisque dignissim nulla. Fusce tristique nulla id massa sodales, vitae consectetur mi euismod.'
    },
  ]) 
  return(
    <div>
          
        <div className="container">
        <br/> 
        <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div class="wrapper">
          <img className="topimage" src={kegiatanImage}/>
            
          </div>
          <div className="text-box">
              <h2>Kegiatan Electrical Science Club</h2>
              <p>Electrical Science Club memiliki berbagai macam program kerja pada masing - masing divisi / bidang.</p>
            </div>
          <br/>
          <br/>

          
          <div className="cards">

            {
              cards.map((card, i) => (
            <div key={i} className="card">
                 <Card sx={{ maxWidth: 345 }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="140"
      image={carImage}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {card.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {card.text}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Share
    </Button>
  </CardActions>
</Card>
            </div>
              ))  
            }
            </div>
        </div>
      
    </div>
  );
}

export default Kegiatan;