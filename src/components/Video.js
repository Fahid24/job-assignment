import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
const Video = () => {
    return (
        <div className='bg-base-200 p-5'>
            <div className=' flex justify-center '>
                <ReactPlayer
                    playing={true}
                    controls={true}
                    width="90%"
                    url='https://youtu.be/w6I2wNVEb34?t=54'
                />
            </div>
            <div className='px-12 py-5'>
                <small>Enter subtitles which {' '}<Link className='text-blue-700' to=''>keyboard shortcuts</Link></small><br />
                <small className='flex gap-2'>
                    <input type="checkbox" className="checkbox rounded-none checkbox-sm border border-1 border-gray-400 " /><p> pause while typing</p>
                </small>
            </div>
        </div>
    );
};

export default Video;