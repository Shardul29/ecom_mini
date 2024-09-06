import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProducts from './AddProducts';
import UpdateProducts from './UpdateProducts';


function App() {
  return (
    <div className="App">
      <Header />
      E-commerce mini project
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/add" element={<AddProducts/>} />
      <Route path="/update" element={<UpdateProducts/>} />
      </Routes>
    </div>
  );
}

export default App;
