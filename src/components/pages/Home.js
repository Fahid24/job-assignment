import React from 'react';
import Calendar from 'react-calendar';

const handleSubmit = (event) => {
    event.preventDefault()


}
const Home = () => {
    return (<div>

        <h1 className='text-3xl font-bold text-center mt-[15%]'>Add the daily tasks:</h1>
        <div className='flex justify-center mt-5 items-center '>
            <form onSubmit={handleSubmit} action="">
                <textarea class="textarea w-full textarea-primary" placeholder="Bio"></textarea>

                <br /> <input className='btn w-full bg-green-500' type="submit" value='enter' />
            </form>
        </div>

    </div>

    );
};

export default Home;