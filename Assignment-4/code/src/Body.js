import React from 'react'

export default function Body(props) {
    return (
        <>
            <div className='post'>
              <div className='heading'>
                <div className='details'>
                  <div > <h1>{props.Elem.name}</h1></div>
                  <div ><p className='location'><b> {props.Elem.location}</b></p></div>
                </div>
                <div className='dots'><b>...</b></div>
              </div>
              <div>
                <img className='post-image' src={props.Elem.PostImage} alt="" />
              </div>
              <div className='likesandshares'>
                <div className='likesandshares1'>
                  <img className='like' src="https://p.kindpng.com/picc/s/169-1694264_computer-icons-like-button-heart-symbol-heart-svg.png" alt="" />
                </div>
                <div className='likesandshares2'>
                  <img className='share' src="https://www.pinclipart.com/picdir/middle/173-1731168_paperplane-instagram-share-icon-png-clipart.png" alt="" />
                </div>
                <div className='likesandshares3'>
                  <p><b>{props.Elem.Date}</b></p>
                </div>
              </div>
              <div className='likes'>
                <p><b>{props.Elem.likes} likes</b></p>
              </div>
              <div className='description'>
              <p>{props.Elem.description}</p>
              </div>
              
            </div>
            </>
    )
}
