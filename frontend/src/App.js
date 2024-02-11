import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from './component/Auth.js';
import PasswordReset from './component/PasswordReset.js';
import Dashboard from './component/Dashboard.js';
import Unauthorized from './component/Unauthorized.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path='/password_reset'  element={<PasswordReset/>} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/unauthorized' element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
