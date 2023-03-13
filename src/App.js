import {React} from 'react'
import './App.css';
import AdminLogin from './component/AdminLogin';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element={<AdminLogin />} />
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
    </div>
  );
}

export default App;
