import React  from "react";
import { FaCamera ,FaInstagram} from "react-icons/fa"

const Header=()=>{
    return (
        <>
       <header className='Heading'>
        <span className="logo"><FaInstagram/></span>
         <span className='insta'>instaclone</span> 
         <span className='camera'><FaCamera/></span>
        </header>
        </>
    )
}       

export default Header