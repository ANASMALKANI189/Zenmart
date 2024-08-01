import "./Product.css";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Product = ({ title, image, price, description }) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Added to cart');
  };
  return (
    <>
    <div className="product1">
      <img src={image} alt="Product" className="product__image" />
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__description">-{description}</p>
        <p className="product__price">
          <strong>₨{price}</strong>
        </p>
<button className="product__button" onClick={handleClick}>
Add to Cart
</button>

{message && <p className="product__message">{message}</p>}
      </div>

    </div>
    </>
  );
};
export default Product


