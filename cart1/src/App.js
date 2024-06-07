import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/CustomNavbar';
import ShoppingList from './Components/ShoppingList';
import Electronics from './Components/Electronics';
import Fashion from './Components/Fashion';
import HomeAndKitchen from './Components/HomeAndKitchen';
import Cart from './Components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CustomNavbar />
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<ShoppingList />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/home-and-kitchen" element={<HomeAndKitchen />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
