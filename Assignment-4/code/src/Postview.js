import React,{ useEffect, useState } from 'react';
import './Postview.css';
import Header from './Header';
import Body from './Body';

const Postview=()=> {
  const [data,usedata]=useState([])

  const getData = async () => {
    const res = await fetch("http://localhost:3004/user")
    const actualData = await res.json();
    usedata(actualData)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <div className='main-container'>
      <Header />
      {
        data.map((Elem,ind)=>{
          return (<Body Elem = {Elem}/>)
        })
      }
    </div>
    </>
  );
}

export default Postview;
