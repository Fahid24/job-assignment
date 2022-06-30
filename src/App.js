import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Tasks from './components/pages/Tasks';
import ToDo from './components/pages/ToDo';
import Calandar from './components/pages/Calander';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="bg-blue-200 h-screen ">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tasks' element={<Tasks></Tasks>}></Route>
        <Route path='/to-do' element={<ToDo></ToDo>}></Route>
        <Route path='/calendar' element={<Calandar></Calandar>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
