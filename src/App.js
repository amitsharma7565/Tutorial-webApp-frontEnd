import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import RegisterDone from './RegisterDone';
import Dashboard from './Dashboard';
import Logout from './Logout';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/RegisterDone" element={<RegisterDone/>}/>
        <Route path="/dashborad" element={<Dashboard/>}/>
        <Route path="/Logout" element={<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App;