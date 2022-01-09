import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Product01 from './Product01';
import Product02 from './Product02';
import Product03 from './Product03';

const Feature = () => {
    return (
    <div>
       <h2>Feature</h2> 
       <ul>
           <li> <Link to="" activeClassName="active" end>Product 01</Link> </li>
           <li> <Link to="product02" activeClassName="active">Product 02</Link> </li>
           <li> <Link to="product03" activeClassName="active">Product 03</Link> </li>
       </ul>
       <div>
           <Routes>
               <Route path="/" element={<Product01/>}/>
               <Route path="product02" element={<Product02/>}/>
               <Route path="product03" element={<Product03/>}/>

           </Routes>
       </div>
    </div>

    );
}
 
export default Feature;