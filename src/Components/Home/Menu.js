import React from 'react';
import img1 from '../../conven/10018.png'
import img2 from '../../conven/10019.png'
import img3 from '../../conven/10020.png'
import Dish from './Dish';
const Menu = () => {
    return (
        <div>
            <h1 className='text-center text-6xl sp-style mt-10 text-[#D69900]'>Our Packages</h1>
            <div className="">
        <div  className='ml-10 mr-10 grid grid-cols-1 md:grid-cols-3 gap-5 py-10 rounded-md'>

            <div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
                <img className="pt-2 rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img1} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold text-[#314993]'> Pre-Plate Menu</h1>
                    <p><span className='font-bold'>Starts from</span> </p>
                    <p><span className='font-bold'>TK 650.00 Per Guest</span> </p>
                    

                </div>
                
            </div>
           
            <div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
                <img className="pt-2 rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img2} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold text-[#314993]'> Buffet Menu</h1>
                    <p><span className='font-bold'>Starts from</span> </p>
                    <p><span className='font-bold'>TK  1249.00 Per Guest</span> </p>
                    

                </div>
                
            </div>
            <div style={{ border: "none" }} className="custom-shadow max-w-sm  rounded-lg border text-center">
                <img className="pt-2 rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img3} alt="" />
                <div className='card-border  mt-5  ml-5 mr-5 bg-[#2e0099] '>

                </div>
              
                <div className="p-5">
                    <h1 className='font-bold text-[#314993]'> Venue Charge</h1>
                    <p><span className='font-bold pb-2'>Complementary</span> </p>
                    <p><span className='font-bold pb-2'>for 100+ Guests*</span> </p>
                    

                </div>
                
            </div>

                </div>
            </div>
            <Dish/>
        </div>
        
    );
};

export default Menu;