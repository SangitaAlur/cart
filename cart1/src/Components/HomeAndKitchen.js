import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const homeAndKitchenItems = [
  { id: 1, name: 'Blender', price: 1999, image: 'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/3cbba532-5f03-43af-9a8c-d29c8528933a._SL480_.png' },
  { id: 2, name: 'Microwave', price: 3999, image: 'https://www.hindustantimes.com/ht-img/img/2023/12/11/550x309/oven_1702285600024_1702285613171.jpg' },
  { id: 3, name: 'Vacuum Cleaner', price: 6999, image: 'https://shop.ttkprestige.com/media/catalog/product/4/2/42661-IMG1_1.jpg' },
  { id: 4, name: 'Sofa', price: 59999, image: 'https://images-cdn.ubuy.co.in/633feb347b66e31542762e27-elegant-curved-sofa-modern-couch-for.jpg' },
  { id: 5, name: 'Curtains', price: 45999, image: 'https://m.media-amazon.com/images/I/71ign7Zp18L._AC_UF894,1000_QL80_.jpg' },
  { id: 6, name: 'Tea Set', price: 1999, image: 'https://m.media-amazon.com/images/I/81YtOuWqGzL.jpg' }
];

const HomeAndKitchen = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <h2 className="mb-4">Home & Kitchen</h2>
      <div className="row">
        {homeAndKitchenItems.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} style={{ width: '350px', height: '350px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Rs{item.price}/-</p>
                <button className="btn btn-outline-dark" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAndKitchen;
