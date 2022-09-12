import React from 'react';
import { IoMdUndo, IoMdRedo, IoMdMusicalNote } from 'react-icons/io';
import { GrZoomIn, GrZoomOut } from 'react-icons/gr';
import { FaNewspaper } from 'react-icons/fa';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import audio from "../Audio/viseo task.m4a"



const FooterPart = ({ text }) => {
    const [Zoom, setZoom] = useState(0);
    const [redoUndo, setRedoUndo] = useState(true);


    const handleZoomIn = () => {
        setZoom(Zoom + 10);
    }

    const handleZoomOut = () => {
        setZoom(Zoom - 10);
    }

    const handleUndo = () => {

        setRedoUndo(false)
    }
    const handleRedo = () => {

        setRedoUndo(true)
    }

    return (
        <>
            <div className='lg:flex justify-between font-semibold p-5'>
                <div className='flex  gap-5'>
                    <input className='border input-sm w-20  border-gray-400 rounded-md input-primary' value={'00:00:00'} type="text" /><br />
                    <IoMdUndo onClick={handleUndo} className='text-2xl cursor-pointer' />
                    <p>UNDO</p>
                    <IoMdRedo onClick={handleRedo} className='text-2xl cursor-pointer' />
                    <p>REDO</p>
                </div>
                <div className='flex gap-4 mt-3 lg:mt-0 '>
                    <GrZoomOut className='cursor-pointer' onClick={handleZoomOut} />
                    <input type="range" min="0" max="100" value={Zoom} className="range cursor-pointer range-xs w-40" />
                    <GrZoomIn onClick={handleZoomIn} className="cursor-pointer" />
                </div>

            </div>
            <div className="overflow-x-auto border-b">
                <table className="table w-full">


                    <tr className=" flex justify-around">

                        <td className='border-l'>00:00:00</td>
                        <td className='border-l'>00:30:00</td>
                        <td className='border-l'>00:60:00</td>
                        <td className='border-l'>00:90:00</td>
                        <td className='border-l'>00:12:00</td>

                    </tr>
                    <hr className='text-xl p-0' />

                    <tr className='grid grid-cols-12'>
                        <td className='col-span-2 border-l-4 border-r  border-l-indigo-500'>
                            <FaNewspaper className=' text-2xl  text-blue-700 ' />
                        </td>
                        <td className='col-span-10'>
                            <p className={` 
                            

                            ${redoUndo
                                    ? "text-white m-3 bg-blue-700 transition-left duration-500 "
                                    : " hidden"}`}
                            >{text}</p>
                        </td>
                    </tr>
                    <hr className='text-xl p-0' />
                    <tr className='grid grid-cols-12'>
                        <td className='border-r col-span-2'>
                            <IoMdMusicalNote className='text-2xl  text-blue-700' />
                        </td>
                        <td className='col-span-10'>
                            <div className='w-20'>
                                <ReactAudioPlayer
                                    src={audio}
                                    autoPlay
                                    controls

                                />
                            </div>
                        </td>
                        <hr className='text-xl p-0' />

                    </tr>
                </table>
            </div>


        </>
    );
};

export default FooterPart;