import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaNewspaper } from 'react-icons/fa';



const Navbar = () => {
    return (
        <div className="navbar font-semibold flex justify-between   ">
            <div className='gap-2'>
                <FaNewspaper className='text-xl text-blue-700' />
                <h1>English {'(India)'}</h1>
            </div>


            <div className='flex gap-10'>
                <div className='flex gap-5'>
                    <button className="btn btn-ghost btn-sm text-blue-700 rounded-none border-none">save draft</button>
                    <button className="btn btn-sm bg-blue-700 rounded-none border-none"> publish</button>

                </div>
                <AiOutlineClose />
            </div>

        </div>

    );
};

export default Navbar;
