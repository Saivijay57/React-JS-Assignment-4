import React,{ useState} from "react";
import {useEffect} from "react";
import Postview from './Postview';
import Header from './Header'




const App=()=>{
  const [Data,setData]=useState([]);
  const getAPIData= async ()=>{
    const url ="http://localhost:3000/user"
    let response=await fetch(url)
    let data=await response.json()
    console.log(data)
    setData(data)
  };
useEffect(()=>{getAPIData()},[]);

function insta(values,index){
  console.log(values)
  return(
    
    <Postview 
    key={index}
    name={values.name}
    location={values.location}
    imgsrc={values.PostImage}
    date={values.date}
    count={values.likes}
    description={values.description}
    />
  );
}
  return(
  <>
    <Header/>
    { Data.map(insta)}
  </>)
}
export default App



