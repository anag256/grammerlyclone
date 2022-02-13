import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import '../styles/SubscribeSection.css'
import Button from '@mui/material/Button';
import { ToolTipSecLeftData } from './ToolTipSecLeftData';
import { ToolTipSecRightData } from './ToolTipSecRightData';
import { useState } from 'react';
function SubscribeSection() {
  const [leftModal,setLeftModal]=useState();
  const [rightModal,setRightModal]=useState();
  return <div className='sub_section_container'>
    <div className='sub_section_title'>
     <h3>Up-Level Your Communication</h3>
     <h4>Unlock Grammarly Premium’s advanced features and suggestions.</h4>
    </div>
    <div className='sub_section_bottom'>
    <div className='sub_section sub_section_left'>
       <p>FOR CASUAL WRITING</p> 
       <h3>Free</h3>
       <h4>Basic writing suggestions.</h4>
       <Button style={{textTransform:'initial',padding:'10px 72px',marginTop:'39px',borderRadius:'5px'}} variant="contained" disabled>
      Included in Premium
      </Button>
       <div className='suggestions'>
           {/* {ToolTipSecLeftData.map((res,index)=><><p onMouseOver={() => setLeftModal(index)} onMouseOut={()=>setLeftModal(null)}><div className={`border_image ${leftModal==index?' active':''}`}><img src={res.tooltipImg}/><br/>{res.tooltipheader}</div><div><CheckIcon style={{color:'#11a683'}}/><span>{res.headerone}</span></div></p></>)} */}
           {ToolTipSecLeftData.map((res,index)=><div className='encl' key={index}><p onMouseOver={() => setLeftModal(index)} onMouseOut={()=>setLeftModal(null)}><CheckIcon style={{color:'#11a683'}}/><span>{res.headerone}</span></p><div className={`border_image ${leftModal==index?' active':''}`}><img src={res.tooltipImg}/><br/>{res.tooltipheader}</div></div>)}
       </div>
    </div>
    <div className='sub_section sub_section_right'>
    <p>FOR WORK OR SCHOOL</p> 
       <h3>Premium</h3>
       <h4>Style, tone, and clarity improvements for writing at work and school.</h4>
       <button className='btn headerSection__btn'>Upgrade to Grammarly Premium</button>
       <div className='suggestions'>
    
       {/* <div className={`outer_div ${setShowModal(!modal)}`}><div className='inner_div'></div></div> */}
       {/* {ToolTipSecRightData.map((res,index)=>{return <>
       <p onMouseOver={() => setRightModal(index)} onMouseOut={()=>setRightModal(null)} className={res.tool=='none' && 'notxtdec'}><div className={`border_image ${rightModal==index && res.tool!='none' ?' active':''}`}><img className={res.tool=='spcl' && 'dispnone'} src={res.tooltipImg}/><br/>{res.tooltipheader}</div><div><CheckIcon style={{color:'#11a683'}}/><span>{res.headerone}</span></div></p>
       </>
       })}
        */}
        {ToolTipSecRightData.map((res,index)=>{return (
          <div className='encl' key={index}> <p onMouseOver={() => setRightModal(index)} onMouseOut={()=>setRightModal(null)} className={res.tool=='none' ? 'notxtdec':''}><CheckIcon style={{color:'#11a683'}}/><span>{res.headerone}</span></p><div className={`border_image ${rightModal==index && res.tool!='none' ?' active':''}`}><img className={res.tool=='spcl' ? 'dispnone':''} src={res.tooltipImg}/><br/>{res.tooltipheader}</div>
       </div>)
       })}
        
       </div>
    </div>
</div>
  </div>;
}

export default SubscribeSection;
