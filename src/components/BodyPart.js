import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import Video from './Video';

const BodyPart = ({ setText }) => {
    const [captionBarActive, setCaptionBarActive] = useState(false);

    const handleOpenCaptionInput = () => {
        setCaptionBarActive(true);
    };
    const handleCloseCaptionInput = () => {
        setCaptionBarActive(false);
    };

    const handleText = (event) => {
        const inputText = event.target.value
        setText(inputText)
    }

    return (

        <div className='lg:grid p-3  lg:grid-cols-12 gap-2 justify-between'>

            <div className='col-span-6 border-r'>
                <nav className='flex  justify-between mx-auto'>

                    <button
                        onClick={() => handleOpenCaptionInput()}
                        className='flex justify-between gap-2 text-blue-700 font-semibold'><AiOutlinePlus className='mt-1' />CAPTION</button>
                    <span className='flex gap-3 justify-between font-semibold text-gray-500'><p>EDIT AS TEXT</p> <FiMoreVertical className='mt-1' /></span>
                </nav>
                <div className={`

                         ${captionBarActive
                        ? "lg:grid lg:grid-cols-12 gap-3 transition-left duration-500 "
                        : " hidden"}`}
                >

                    <input onChange={handleText} className="col-span-8 w-full h-20 mt-3 textarea-primary border border-gray-400 rounded-md" placeholder="" name='text'></input>
                    <MdDelete onClick={() => handleCloseCaptionInput()} className='cursor-pointer text-3xl col-span-1 mx-auto lg:my-auto' />
                    <div className='flex flex-col col-span-3 mt-3'>
                        <input value={'00:00:00'} className='border input-sm   border-gray-400 rounded-md input-primary' type="text" /><br />
                        <input value={'00:50:06'} className='border input-sm  border-gray-400 rounded-md input-primary' type="text" />
                    </div>
                </div>
            </div>
            <div className='col-span-6'>
                <Video />
            </div>
        </div>

    );
};

export default BodyPart;