import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleSubmit = (event) => {
    event.preventDefault()
    const tasks = event.target.text.value;
    console.log(tasks);
    fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(tasks)
    })
        .then(res => res.json())
        .then(data => {
            if (data?.insertedId) {
                toast.success('Thanks for your review')

                document.getElementById('form').reset()
            }
            else (
                toast.error('Something went wrong. Please try once again')
            )
        })

}
const Home = () => {
    return (<div>

        <h1 className='text-3xl font-bold text-center mt-[15%]'>Add the daily tasks:</h1>
        <div className='flex justify-center mt-5 items-center '>
            <form onSubmit={handleSubmit} action="">
                <textarea name='text' class="textarea w-full textarea-primary" placeholder="Bio"></textarea>

                <br /> <input className='btn w-full bg-green-500' type="submit" value='enter' />
            </form>
        </div>

    </div>

    );
};

export default Home;