import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const electronicsItems = [
  { id: 1, name: 'Laptop', price: 50000, image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/TQ/OL/RI/125962096/hp-laptop.jpg' },
  { id: 2, name: 'Headphones', price: 2500, image: 'https://techcommerce.in/wp-content/uploads/2023/06/boAt-Rockerz-550_558-Bluetooth-Wireless.png' },
  { id: 3, name: 'Smartphone', price: 102800, image: 'https://www.guidingtech.com/wp-content/uploads/Top-Clear-Cases-for-iPhone-15-Pro-Max5-1024x640.jpg' },
  { id: 4, name: 'TV', price: 10800, image: 'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/02e77962-b170-11ea-9203-1a0a8a61af59.jpg' },
  { id: 5, name: 'Iron', price: 1800, image: 'https://rukminim2.flixcart.com/image/850/1000/kvzkosw0/iron/y/h/a/best-quality-non-stick-iron-750w-press-look-stunning-and-exude-original-imag8rm6wgwgn4qk.jpeg?q=20&crop=false' },
  { id: 6, name: 'SmartWatch', price: 3800, image: 'https://cdn.thewirecutter.com/wp-content/media/2023/10/smartwatches-2048px-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024' }
];

const Electronics = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h2 className="mb-4">Electronics</h2>
      <div className="row">
        {electronicsItems.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" 
              alt={item.name} style={{ width: '350px', height: '350px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Rs.{item.price}/-</p>
                <button className="btn btn-outline-dark"onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Electronics;
