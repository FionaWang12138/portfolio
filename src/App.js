import './App.css';
import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import AboutMe from './Components/AboutMe';
import Animation from './Components/Animation';

import {
  BrowserRouter,
  Routes,
  Route,
  // useNavigate,
  Navigate,
  Switch, 
  useLocation
  // Link,
} from 'react-router-dom';


function App () {

  
  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <Projects/>
        <AboutMe/>
        <Contact/>
        
        
        
      </BrowserRouter>
      <Animation/>
    </>

  );
}

export default App;