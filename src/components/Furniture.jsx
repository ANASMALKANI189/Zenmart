// import React from 'react'
import Product from './Product'
import "./Product.css";
import { useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar';


const Furniture = () => {
  const navigate=useNavigate()

  function handleClick1(){
    navigate('/Home')
  }
  return (
    <div>

    <div className="home__row">
      <Product
        id="11111111"
        title="Classic Leather Recliner Sofa with Cup Holders"
        price={1099.99}
        rating={5}
        description="Relax in style with this classic leather recliner sofa featuring built-in cup holders, perfect for your living room or entertainment area."
        image="https://m.media-amazon.com/images/I/51vV9nPUo7L.AC_SR180,120_QL70.jpg"
      />
      <Product
        id="22222222"
        title="Modern Glass Coffee Table with Wooden Legs"
        price={299.99}
        rating={4}
        description="Enhance your living space with this modern glass coffee table, accented with wooden legs for a stylish and functional addition to any room."
        image="https://m.media-amazon.com/images/I/61S8TISs7dL.AC_UL320.jpg"
      />
      <Product
        id="33333333"
        title="Elegant Dining Table with 6 Chairs"
        price={1499.99}
        rating={4}
        description="Host elegant dinners with this spacious dining table set, complete with six chairs, designed for both comfort and sophisticated dining experiences."
        image="https://m.media-amazon.com/images/I/718YuPNB8vL._AC_UY327_FMwebp_QL65_.jpg"
      />
      <Product
        id="44444444"
        title="Luxury King Size Bed with Upholstered Headboard"
        price={1999.99}
        rating={5}
        description="Create a luxurious bedroom retreat with this king-size bed featuring an upholstered headboard, offering comfort and style for a restful night's sleep."
        image="https://m.media-amazon.com/images/I/71x9Rs5L0LL.AC_UL320.jpg"
      />
      <Product
        id="55555555"
        title="Compact Home Office Desk with Storage"
        price={499.99}
        rating={4}
        description="Maximize your productivity with this compact home office desk equipped with ample storage, perfect for organizing your workspace efficiently."
        image="https://m.media-amazon.com/images/I/512mpqbbcXL.AC_UL320.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="66666666"
        title="Rustic Wooden Bookshelf with Adjustable Shelves"
        price={599.99}
        rating={4}
        description="Organize your books and display decorative items with this rustic wooden bookshelf featuring adjustable shelves, ideal for adding charm to any room."
        image="https://m.media-amazon.com/images/I/61Fufgr1q5L.AC_UL320.jpg"
      />
      <Product
        id="77777777"
        title="Vintage Armchair with Velvet Upholstery"
        price={799.99}
        rating={5}
        description="Add a touch of vintage elegance to your living space with this armchair featuring velvet upholstery, designed for comfort and timeless style."
        image="https://m.media-amazon.com/images/I/61E7ffFU70L.AC_UL320.jpg"
      />
      <Product
        id="88888888"
        title="Modern TV Stand with Storage Cabinets"
        price={2899.99}
        rating={4}
        description="Upgrade your entertainment area with this modern TV stand featuring storage cabinets, designed to accommodate your media devices and accessories."
        image="https://m.media-amazon.com/images/I/71upF2JoOLL.AC_UL320.jpg"
      />
      <Product
        id="99999999"
        title="Contemporary Sideboard Buffet Table"
        price={899.99}
        rating={4}
        description="Enhance your dining room decor with this contemporary sideboard buffet table, offering ample storage and a sleek design for storing dining essentials."
        image="https://m.media-amazon.com/images/I/81PUZzvDEXL.AC_UL320.jpg"
      />
      <Product
        id="1010101010"
        title="Industrial Style Bar Stools (Set of 2)"
        price={249.99}
        rating={4}
        description="Add industrial flair to your kitchen or bar area with this set of two bar stools featuring an adjustable height and sturdy construction for durability."
        image="https://m.media-amazon.com/images/I/716+TS-li3S.AC_UL320.jpg"
      />
    
    </div>
    <button className="product__button" onClick={handleClick1}>Go to Home Page</button>

</div>

  )
}

export default Furniture;