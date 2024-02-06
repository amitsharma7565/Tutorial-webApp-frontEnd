import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import RegisterDone from './RegisterDone';
import { Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/RegisterDone" element={<RegisterDone/>}/>
      </Routes>
    </div>
  );
}

export default App;