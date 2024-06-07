import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import AllProducts from './AllProducts';
import { useState } from 'react';


const ShoppingList = () => {
  const [cardData, setcardData] = useState(AllProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h2 className="mb-4">Home</h2>
      <div className="row">
        {cardData.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name}  style={{ width: '350px', height: '350px', objectFit: 'cover'}}/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Rs.{item.price}/-</p>
                <button className="btn btn-outline-dark" onClick={() => handleAddToCart(item)}> Add to Cart </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
