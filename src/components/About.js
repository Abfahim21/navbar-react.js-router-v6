import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Name from './Name';
import Address from './Address';
const About = () => {
    return (
    <div className='aboutSection'>
        <h2>About</h2>
        <nav>
            <ul>
                <li>
                    <Link to=''>Name</Link>
                    <Link to="address">Address</Link>
                </li>
                <li></li>
            </ul>
        </nav>
        <div className='dashboard'>
            <Routes>
                <Route path="/" element={<Name/>}/>
                <Route path="address" element={<Address/>}/> 
            </Routes>
        </div>
    </div>

    );
}
 
export default About;