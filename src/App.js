import './App.css';
import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
  // useNavigate,
  Navigate,
  // Link,
} from 'react-router-dom';


function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar/>

        
        
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          
        </Routes>
        
        
       
      </BrowserRouter>

    </>

  );
}

export default App;