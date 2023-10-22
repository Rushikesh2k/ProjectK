import React from 'react';
import './App.css';
import DrawerAppBar from "./Navbar";
import Home from "./Home"
import Footer from "./Footer"
import DashBoard from './DashBoard';
import From from "./From"
import form2 from "./form2"
import AdInsights from "./AdsInsights"
import Submited from './Submited';
import { Router, Routes, Link, Route, BrowserRouter} from 'react-router-dom';


function App() {
  
  return (
      <div>
       <DrawerAppBar />
       {/* <Home/>  */}
      
       
       
       
       {/* <DashBoard/> */}
       <From/>
       
       
       <Footer/>
       {/* <Submited/> */}
    
    </div>
    
    
      
    

    
   
        

    
    
    
 
    
  );
}

export default App;
