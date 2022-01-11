import LandingPage from "./LandingPage";
import App from './App';
import {
    Routes,
    Route,
    Link
  } from 'react-router-dom';

const Nextpage =()=>{ 
    return(
        <Routes>
            <Route exact path ='/' element={<LandingPage/>}/>
            <Route exact path='/insta' element= {<App/>}/>
        </Routes> 

    )
}
export default Nextpage
