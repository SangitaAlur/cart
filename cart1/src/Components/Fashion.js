import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const fashionItems = [
  { id: 1, name: 'T-shirt', price: 8299, image: 'https://images.meesho.com/images/products/320666519/qoqfk_512.webp' },
  { id: 2, name: 'Jeans', price: 1999, image: 'https://assets.ajio.com/medias/sys_master/root/20230503/5wsB/645256de42f9e729d764abe7/-473Wx593H-466122759-blue-MODEL.jpg' },
  { id: 3, name: 'Tops', price: 1799, image: 'https://assets.ajio.com/medias/sys_master/root/20230602/cjc0/647936f5d55b7d0c633760bd/-473Wx593H-461351793-pink-MODEL.jpg' },
  { id: 4, name: 'Traditional Dress', price: 1599, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/kurta/n/h/0/l-kurta-new-set-1-traditional-fashion-original-imagmxjutefa6nej.jpeg?q=90&crop=false' },
  { id: 5, name: 'Sarees', price: 2899, image: 'https://global.karagiri.com/cdn/shop/products/silk-saree-bumblebee-yellow-silk-saree-silk-saree-online-32253998465217_cf7d08e8-61a1-43a1-a3f2-aa2477763f0e.jpg?v=1668169695&width=1200' },
  { id: 6, name: 'Kurti', price: 1499, image: 'https://assets.ajio.com/medias/sys_master/root/20230628/TXCu/649be94ba9b42d15c90dcc7c/-473Wx593H-465859234-white-MODEL.jpg' }
];

const Fashion = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h2 className="mb-4">Fashion</h2>
      <div className="row">
        {fashionItems.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} style={{ width: '350px', height: '350px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Rs.{item.price}/-</p>
                <button className="btn btn-outline-dark" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fashion;
