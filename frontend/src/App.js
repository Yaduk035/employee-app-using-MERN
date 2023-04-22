
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Update from './components/Update/Update';
import AddEmployeeForm from './components/AddEmployee/AddEmployeeForm';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/updateEmp' element={<Update/>} />
          <Route path='/addEmp' element={<AddEmployeeForm/>} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
