import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Calander = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className=''>
            <Calendar className='mx-auto m-12' onChange={onChange} value={value} />
        </div>
    );
};

export default Calander;