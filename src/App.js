import './App.css';
import Navbar from './components/Navbar';

import BodyPart from './components/BodyPart';
import FooterPart from './components/FooterPart';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('')

  console.log(text);


  return (
    <div className="bg-base-200 ">
      <div className='bg-white lg:m-40'>
        <Navbar></Navbar>
        <hr className='text-xl p-0' />
        <BodyPart setText={setText} />
        <hr className='text-xl p-0' />
        <FooterPart text={text} />
      </div>
    </div>
  );
}

export default App;
