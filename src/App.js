import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Feature from './components/Feature';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end>HOME</Link>
          </li>
          <li>
            <Link to="about"  activeClassName="active">ABOUT</Link>
          </li>
          <li>
            <Link to="feature" activeClassName="active">FEATURES</Link>
          </li>
          <li>
            <Link to="contact" activeClassName="active">CONTACT</Link>
          </li>
        </ul>
      </nav>
      
      <div className="main">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about/*' element={<About/>}/>
          <Route path='feature/*' element={<Feature/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='/*' element={<NotFound/>}/>
         
      </Routes>
      </div>
      
      
    </div>
  );
}

export default App;
