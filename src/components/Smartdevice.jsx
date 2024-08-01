
import Product from './Product'
import "./Product.css";
import { useNavigate } from 'react-router-dom';
const Smartdevice = () => {
  const navigate=useNavigate()

  function handleClick1(){
    navigate('/Home')
  }
  return (
    <div>
    <div className="home__row">
      <Product
        id="12345678"
        title="Redmi Note 13 Pro+"
        price={30999}
        rating={5}
        description="Redmi Note 13 Pro+ features the world's first Mediatek 7200 Ultra 5G processor, a stunning 1.5K curved AMOLED display, and a powerful 200MP camera."
        image="https://m.media-amazon.com/images/I/819sWoSDFRL.AC_UY218.jpg"
      />
      <Product
        id="23456789"
        title="Redmi Note 13 Pro"
        price={24999}
        rating={4}
        description="Redmi Note 13 Pro offers a vibrant 1.5K AMOLED display, flagship Snapdragon 7s Gen 2 processor, and a versatile 200MP camera with 67W TurboCharge."
        image="https://m.media-amazon.com/images/I/71XQD0wtMPL.AC_UY218.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="34567890"
        title="Apple iPhone 12 (64GB) - Green"
        price={49999}
        rating={5}
        description="Apple iPhone 12 boasts a sleek design, A14 Bionic chip, and a stunning Super Retina XDR display, delivering powerful performance and exceptional photography."
        image="https://m.media-amazon.com/images/I/71cQWYVtcBL.AC_UY218.jpg"
      />
      <Product
        id="45678901"
        title="Redmi A3 "
        price={8999}
        rating={4}
        description="Redmi A3 combines a premium halo design with a smooth 90Hz display and powerful G36 processor, offering an immersive mobile experience at an affordable price."
        image="https://m.media-amazon.com/images/I/71dJSabHYiL.SX569.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="56789012"
        title="OnePlus 12"
        price={59999}
        rating={5}
        description="OnePlus 12 features a stunning Flowy Emerald design, powerful specifications including 12GB RAM and 256GB storage, delivering a premium smartphone experience."
        image="https://m.media-amazon.com/images/I/717Qo4MH97L.AC_UY218.jpg"
      />
      <Product
        id="67890123"
        title="iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage) | 3D Curved AMOLED Display | 4nm MediaTek Dimesity 7200 5G Processor | 64MP Aura Light OIS Camera | Segment's Slimmest & Lightest Smartphone"
        price={21998}
        rating={4}
        description="iQOO Z7 Pro 5G is known for its 3D curved AMOLED display, powerful MediaTek Dimesity 7200 5G processor, and advanced 64MP camera, offering a sleek and feature-rich mobile experience."
        image="https://m.media-amazon.com/images/I/61Id6WJDWqL.SX522.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="78901234"
        title="Samsung Galaxy S24 Ultra 5G"
        price={129999}
        rating={5}
        description="Samsung Galaxy S24 Ultra 5G combines AI capabilities with a powerful processor, stunning display, and exceptional camera system, setting new standards for smartphone technology."
        image="https://m.media-amazon.com/images/I/71RVuBs3q9L.AC_UY218.jpg"
      />
      <Product
        id="89012345"
        title="Apple iPad Pro"
        price={180799}
        rating={5}
        description="Apple iPad Pro 12.9″ (6th generation) features the powerful M2 chip, stunning Liquid Retina XDR display, and advanced camera system, offering exceptional performance and versatility."
        image="https://m.media-amazon.com/images/I/814P0ojHArL.SX679.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="90123456"
        title="Samsung Galaxy Tab S9 FE"
        price={36998}
        rating={4}
        description="Samsung Galaxy Tab S9 FE features a large display, expandable storage, and includes an S Pen for enhanced productivity, making it an ideal tablet for work and entertainment."
        image="https://m.media-amazon.com/images/I/61M4gkurLUL.SX569.jpg"
      />
      <Product
        id="12345679"
        title="OnePlus Nord CE4 Lite 5G "
        price={19999}
        rating={4}
        description="OnePlus Nord CE4 Lite 5G offers fast 5G connectivity, reliable performance with 8GB RAM and 128GB storage, and a sleek design, perfect for daily use and multitasking."
        image="https://m.media-amazon.com/images/I/61Io5-ojWUL.AC_UY218.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="23456780"
        title="Apple iPad Pro 11"
        price={97900}
        rating={5}
        description="Apple iPad Pro 11″ (M4) features an Ultra Retina XDR display, powerful M4 chip, advanced camera system, and all-day battery life, offering unmatched performance and versatility in a compact form."
        image="https://m.media-amazon.com/images/I/61G6WfvA9vL.AC_UY218.jpg"
      />
      <Product
        id="34567891"
        title="OnePlus Pad Go "
        price={17999}
        rating={4}
        description="OnePlus Pad Go offers a stunning 2.4K ReadFit Eye Care LCD display, Dolby Atmos Quad Speakers, and ample storage options, ensuring immersive multimedia experiences and efficient multitasking."
        image="https://m.media-amazon.com/images/I/51oj5gE7P+L.AC_UY218.jpg"
      />
    </div>
    <button className="product__button" onClick={handleClick1}>Go to Home Page</button>

 </div>

  )
}

export default Smartdevice