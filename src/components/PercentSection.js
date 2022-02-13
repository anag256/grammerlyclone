import React, { useEffect, useState } from 'react'
import '../styles/PercentSection.css'
import ProgressBar from './CircularProgressWithLabel'
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import CircularProgressWithLabel from './CircularProgressWithLabel';
function PercentSection() {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);
    useEffect(() => {
       
        const timer = setInterval(() => {
            if(window.scrollY>1200){
            setProgress1((prevProgress) => (prevProgress >= 76 ? 76 : prevProgress + 5));
            setProgress2((prevProgress) => (prevProgress >= 85 ? 85 : prevProgress + 5));
            setProgress3((prevProgress) => (prevProgress >= 70 ? 70 : prevProgress + 5));
        }
          }, 300);
    
          return () => {
           
            clearInterval(timer);
         
          };
    }, [])
    
    return (
    <div className='percentSection_container'>
    <div className='percentSection'>
        <div className='d-flex text_percent_sec'>
            <h3>Premium Customers Report Better Results</h3>
            <p>We routinely survey Grammarly users and have found that:</p>
        </div>
        <div className='d-flex percent_num'>
            <div className='d-flex indiv_percent'>
            <CircularProgressWithLabel  value={progress1} />
                <p>76% of Grammarly users find writing more enjoyable.</p>
            </div>
            <div className='d-flex indiv_percent'>
            <CircularProgressWithLabel value={progress2} />
                <p>85% of Grammarly users find writing more enjoyable.</p>
            </div>
            <div className='d-flex indiv_percent'>
               
            <CircularProgressWithLabel value={progress3} />
                
                <p>70% of Grammarly users find writing more enjoyable.</p>
            </div>
        </div>
    </div>    
    </div>
  )
}

export default PercentSection