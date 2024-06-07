// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/" Component={Cart}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
