import React from 'react';
import upperArrow from '../../upper_arrow_512x512.png'
import message from '../../messenger.png'
const Arrow = () => {
    return (
        <div className="z-50 flex justify-between mt-10 mb-10 mr-10 ">
        
        <button><a href="#">
            {/* <FontAwesomeIcon
               style={{borderRadius:"50px"}}
            className='text-4xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /> */}
        <img src={message} alt="arrow" className="w-44 "/>
            </a></button>

            <button><a href="#">
            {/* <FontAwesomeIcon
               style={{borderRadius:"50px"}}
            className='text-4xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /> */}
        <img src={upperArrow} alt="arrow" className="w-10 h-10"/>
            </a></button>
     
            

           </div>
    );
};

export default Arrow;