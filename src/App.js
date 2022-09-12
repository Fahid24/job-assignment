import './App.css';
import Navbar from './components/Navbar';

import { ToastContainer } from 'react-toastify';
import BodyPart from './components/BodyPart';

function App() {
  return (
    <div className="bg-base-200 ">
      <div className='bg-white lg:m-40'>
        <Navbar></Navbar>
        <hr className='text-xl p-0' />
        <BodyPart />
        <hr className='text-xl p-0' />
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default App;
