import React, { useEffect, useState } from 'react';
import { sliderData } from './SliderData';
import LinearProgress from '@mui/material/LinearProgress';
import '../styles/Slider.css'
function Slider() {
  const [currentSlide,setCurrentSlide]=useState(0);
  const [progress, setProgress] = React.useState(0);
  const nextSlide=()=>{
      if(currentSlide !== sliderData.length){
        setCurrentSlide(currentSlide+1);
      }
      else {
        setCurrentSlide(0);
      }
  }
  const prevSlide=()=>{
    if(currentSlide !== 1){
      setCurrentSlide(currentSlide-1);
    }
    else if(currentSlide===1){
      setCurrentSlide(sliderData.length-1);
    }
  }
  const moveDot=(index)=>{
    if(index==sliderData.length){
      setCurrentSlide(sliderData.length-1);
    }
    else{
    setCurrentSlide(index);
    }
  }
  useEffect(() => {

    setTimeout(()=>{
      setCurrentSlide((slide)=> {
        if(slide==sliderData.length-1){
          return 0;
        }
        else{
          return slide+1;
        }
      });
    },4000)
    
   const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          
          return 0;
        }
        // const diff = Math.random() * 100;
        const diff=45;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1300);  
  
    
    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);
  
  return <div className='slider__container'>
    <div className='slider__leftSection'>
    {sliderData.map((obj,index)=>{
        return (
            <div className={`left_section ${index==currentSlide && 'active'}`} key={index}>
                <img className={`left__section__img1  ${index==currentSlide && 'active'}`} src={obj.img1}/>
                <img className={`left__section__img2  ${index==currentSlide && 'active'}`} src={obj.img2}/>
            </div>
        )
    })}
  </div>
  <div className='slider__rightSection'>
  {sliderData.map((obj,index)=>{
    return (
    <div key={index} className={`right__section`} onClick={()=>moveDot(index)}>
      <h3 className='font_big'>{obj.headerone}</h3>
      <h3 className='font_small'>{obj.headertwo}</h3>
      <LinearProgress  className={`prog ${index==currentSlide && 'active'}`} variant="determinate" value={progress} />
    </div>
    )
  })}
  </div>
  </div>
}

export default Slider;
