import React from 'react';
import './Postview.css';
import { FaHeart,FaComment } from "react-icons/fa";


const Postview=(props)=> {
  return (
    <>
    
    <div className="site-container">
      <div className="content">
          <b className='name'>{props.name}  </b>
          <p className='location'>{props.location}</p>
          <img className='imgsrc' src={props.imgsrc} alt="upload" />
          <div className='heart'>
            <p className='like'><FaHeart/></p>
            <p className='comment'><FaComment/></p> 
            <p className='date'>{props.date}</p>
          </div>
            <p className='likesCount'>{props.count} Likes</p>
          <div className='description'><b>{props.description}</b></div>
      </div>
    </div>
    </>
  );
}


export default Postview;
