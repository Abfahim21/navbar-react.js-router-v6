import React from 'react';
import img1 from '../images/Night-view-Dhaka-Bangladesh.jpg';

const Address = () => {
    return (
    <div className='address-main'>
       <h2>Address: Dhaka, Bangladesh</h2>
       <div className="img1">
       <img src={img1} alt="Dhaka,Bangladesh." />
       </div>
    </div>

    );
}
 
export default Address;