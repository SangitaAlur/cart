// src/Components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions/cartActions';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const getTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Your cart is empty.
        </div>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {items.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                   <img src={item.image} alt={item.name} className="img-thumbnail mr-3" style={{ width: '100px', height: '100px' }} />
                   <div>
                     <h5 className="mb-1">{item.name}</h5>
                     <p className="mb-1">Rs. {item.price}</p>
                      <div className="d-flex justify-content-center align-items-center">
                       <button className="btn btn-secondary btn-sm mx-2" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                       <span>{item.quantity}</span>
                       <button className="btn btn-secondary btn-sm mx-2" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                     </div>
                   </div>
                 </div>
                 <i
                //fa-lg, fa-2x, fa-3x, fa-4x,fa-5x
                  className="fas fa-trash-alt text-danger fa-2x"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleRemoveFromCart(item.id)}></i>
              </li>
            ))}
          </ul>
          <div className="text-right">
            <strong>Total Amount: Rs. {getTotalAmount().toFixed(2)}/-</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
