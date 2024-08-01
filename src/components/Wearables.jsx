import Product from './Product'
import "./Product.css";
import { useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar';
const Wearables = () => {
  const [message, setMessage] = useState('');
  const navigate=useNavigate()

  function handleClick1(){
    navigate('/Home')
  }
  return (
    <div>
    <div className="home__row">
      <Product
        id="45678912"
        title="Apple Watch SE (2nd Gen, 2023) Smartwatch "
        price={47999}
        rating={5}
        description="Experience the convenience and versatility of the Apple Watch SE with advanced health and fitness features, GPS, and Retina display."
        image="https://m.media-amazon.com/images/I/61rTufzD1zL.SX679.jpg"
      />
      <Product
        id="56789023"
        title="Titan Celestor Smartwatch "
        price={19995}
        rating={4}
        description="Smartwatch with AMOLED display, advanced GPS, and durable design, perfect for outdoor adventures and daily use."
        image="https://m.media-amazon.com/images/I/61ofV82kMKL.SX425.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="67890134"
        title="Heart Health Hybrid Smartwatch for Men & Women"
        price={4249}
        rating={5}
        description="Withings ScanWatch Nova combines ECG, SPO2, and temperature monitoring with stylish design and long battery life for comprehensive health tracking."
        image="https://m.media-amazon.com/images/I/71Lfwkepk+L.SX425.jpg"
      />
      <Product
        id="78901245"
        title="OnePlus Nord Buds 2 TWS in Ear Earbuds "
        price={2499}
        rating={4}
        description="OnePlus Nord Buds 2 with ANC, dynamic drivers, and fast charging provide high-quality audio and clear calls with long-lasting comfort."
        image="https://m.media-amazon.com/images/I/61-ZYvldY+L.AC_UY218.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="89012356"
        title="Boult Audio Z40 Gaming in Ear Earbuds "
        price={2046}
        rating={4}
        description="Earbuds with long battery life, low latency, and high-quality audio provide immersive gaming experiences and clear communication."
        image="https://m.media-amazon.com/images/I/61bN8LdPLLL.SX425.jpg"
      />
      <Product
        id="90123467"
        title="Mivi DuoPods i2 True Wireless Earbuds"
        price={798}
        rating={4}
        description="Mivi DuoPods i2 true wireless earbuds with long battery life, HD call clarity, and IPX4 rating offer a comfortable and immersive audio experience."
        image="https://m.media-amazon.com/images/I/61b8STGCCxL.AC_UY218.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="12345680"
        title="Apple AirPods (3rd generation) with Lightning Charging Case"
        price={35099}
        rating={5}
        description="Apple AirPods (3rd generation) with easy setup, seamless connectivity, and high-quality sound deliver a superior wireless listening experience."
        image="https://m.media-amazon.com/images/I/61CVih3UpdL.AC_UY218.jpg"
      />
      <Product
        id="23456791"
        title="Carlington Premium Watch for Men"
        price={18048}
        rating={4}
        description="Carlington premium watch for men with a stylish black chain, stainless steel build, and scratch-resistant design offers durability and elegance."
        image="https://m.media-amazon.com/images/I/71euM6LMwfL.SX679.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="34567802"
        title="Titan Neo Splash Blue Dial Quartz watch for Men"
        price={5595}
        rating={4}
        description="Titan Neo Splash watch with blue dial and stainless steel strap offers multifunctionality and stylish design for everyday wear."
        image="https://m.media-amazon.com/images/I/71SxGG76qpL.SX679.jpg"
      />
      <Product
        id="45678913"
        title="Samsung Galaxy Buds2 Pro"
        price={9999}
        rating={5}
        description="Samsung Galaxy Buds2 Pro with AI features, noise cancellation, and ergonomic design deliver high-quality sound and comfortable listening experiences."
        image="https://m.media-amazon.com/images/I/61Qqg+T8nsL.AC_UY218.jpg"
      />
       <Product
        id="45678973"
        title="Boat Storm Call 3"
        price={1199}
        rating={5}
        description="1.83” HD Display, Bluetooth Calling, Crest+ OS, QR Tray, Watch Face Studio, Coins, Emergency SOS Smart Watch"
        image="data:image/jpeg;base64,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"
      />
    </div>
    <button className="product__button" onClick={handleClick1}>Go to Home Page</button>

  </div>

  )
}

export default Wearables