import React, { useState } from 'react';
import '../styles/HeaderSection.css';
import Button from '@mui/material/Button';
import Slider from './Slider';
function HeaderSection(props) {
  //  const [currentslider,setCurrentSlider]=useState(0);
  
  return <div className='headerSection'>
  <div className='headerSection__topdiv d-flex'>
  <div className='d-flex header__title'>
    <h2>Aim High With Brilliant Writing</h2>    
    <button className='btn headerSection__btn'>Upgrade to Grammarly Premium</button>
    {/* <Button className={classes.root} variant="outlined">Outlined</Button> */}
    <Slider/>
</div>
</div>
  </div>;
}

export default HeaderSection;
