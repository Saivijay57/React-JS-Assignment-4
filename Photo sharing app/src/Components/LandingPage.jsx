import React from 'react'
import App from './App' 
import {
    Routes,
    Route,
    Link
  } from 'react-router-dom';




const LandingPage=()=>{
  
    return(
        <>
        <div className='container'>
            <div className='imgsrc1'>
                <img src='https://picsum.photos/500/500' alt='LandingImage'/>
            </div>
            <div className='passing'>
                <p>10X team 04</p>
                <Link to='/insta' >Enter</Link>
            </div>  

            

        </div>
        
        
        </>
    )
}
export default LandingPage