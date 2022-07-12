import { faArrowUp, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Arrow from '../Home/Arrow.js';
import Leaflet from '../Leaflet/Leaflet.js';
import './Contact.css'


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-head text-center text-6xl text-gray-400">
        <h1>Contact Address</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="mt-10 mx-auto">
          <h5 className='text-2xl '>
            <FontAwesomeIcon className="" icon={faLocationDot} />
            <span style={{marginLeft:'10px'}}>Patiya,Chittagong</span>
          </h5>
          <h5 className="mt-5 text-2xl">
            <FontAwesomeIcon className="" icon={faEnvelope} />
            <span style={{marginLeft:'10px'}}>Official: Royal@gmail.com</span>   
            <a href="#"></a>
          </h5>
          <h5 className="mt-5 text-2xl">
            <FontAwesomeIcon className="" icon={faPhone} />
            <span style={{marginLeft:'10px'}}>Helpline :
            01300000000,01700000000</span>    
          </h5>
        </div>
        <Leaflet style={{ marginLeft: "20%" }}></Leaflet>
      </div>
      {/* <div className="  mt-10 mb-10 text-right mr-10">
            <button><a href="#"> <FontAwesomeIcon
               style={{borderRadius:"10px"}}
                className='text-6xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /></a></button>
           </div> */}
      <Arrow/>
    </div>
  );
};

export default Contact;