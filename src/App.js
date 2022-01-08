import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Feature from './components/Feature';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="about">ABOUT</Link>
          </li>
          <li>
            <Link to="feature">FEATURES</Link>
          </li>
          <li>
            <Link to="contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      
      <div className="main">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='features' element={<Feature/>}/>
          <Route path='contact' element={<Contact/>}/>
      </Routes>
      </div>
      
      
    </div>
  );
}

export default App;
