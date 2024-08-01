import Product from './Product'
import "./Product.css";
import { useNavigate } from 'react-router-dom';
// import Navbar from '../Navbar';
const TvandAppliance = () => {
  const navigate=useNavigate()

  function handleClick1(){
    navigate('/Home')
  }
  return (
    <div>
        
        <div className="home__row">
  <Product
    id="4903850"
    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
    price={199.99}
    rating={3}
    description="Experience the immersive panoramic view with this 49' curved LED gaming monitor, perfect for multitasking and an expansive gaming experience."
    image="https://m.media-amazon.com/images/I/811lVc206DL.AC_SR230,210_QL70.jpg"
  />
  <Product
    id="23445930"
    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
    price={98.99}
    rating={5}
    description="Smart speaker with Alexa, designed to fit seamlessly into your home. Control your music, smart home devices, and more with your voice."
    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
  />
</div>

<div className="home__row">
  <Product
    id="90829332"
    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
    price={1094.98}
    rating={4}
    description="Super ultra-wide dual WQHD monitor for the ultimate in multitasking and immersive gaming, with a 5120 x 1440 resolution."
    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX355.jpg"
  />
  <Product
    id="67890234"
    title="LG OLED55CXPUA Alexa Built-In OLED TV (2021) - 55-Inch 4K Smart TV"
    price={1399.99}
    rating={5}
    description="55-inch 4K Smart TV with stunning OLED display technology and built-in Alexa for voice control and smart home integration."
    image="https://m.media-amazon.com/images/I/71i9R0xKxrL.AC_UY327_FMwebp_QL65.jpg"
  />
  <Product
    id="54321098"
    title="Sony XBR65A8H 65-Inch 4K Ultra HD OLED TV (2020)"
    price={2499.99}
    rating={4}
    description="65-inch 4K Ultra HD OLED TV featuring exceptional picture quality and immersive sound for an unparalleled home theater experience."
    image="https://m.media-amazon.com/images/I/81GwACmzVRL.AC_UY218.jpg"
  />
</div>

<div className="home__row">
  <Product
    id="23456789"
    title="Samsung 75-Inch 4K Ultra HD Smart TV (UN75TU8000FXZA)"
    price={849.99}
    rating={4}
    description="75-inch 4K Ultra HD Smart TV with vibrant picture quality and a wide range of smart features for an enhanced viewing experience."
    image="https://image-us.samsung.com/SamsungUS/home/television-home-theater/tvs/qled-4k-tvs/07152024/UN85CU8000FXZA-S_COM_Version_1_V01.jpg?$product-details-jpg$"
  />
  <Product
    id="98765432"
    title="Bose Soundbar 700 with Alexa Voice Control Built-In"
    price={799.99}
    rating={5}
    description="Premium soundbar with Alexa voice control built-in, delivering exceptional sound quality and smart home functionality."
    image="https://m.media-amazon.com/images/I/51m8BWQOXWL.AC_UY218.jpg"
  />
</div>

<div className="home__row">
  <Product
    id="87654321"
    title="Dyson V15 Detect Cordless Vacuum Cleaner"
    price={699.99}
    rating={5}
    description="High-performance cordless vacuum cleaner with advanced laser technology to detect and capture hidden dust."
    image="https://m.media-amazon.com/images/I/61bXGHeYuhL.AC_UY218.jpg"
  />
  <Product
    id="11223344"
    title="Philips Airfryer XXL with Fat Removal Technology"
    price={299.99}
    rating={4}
    description="Large capacity air fryer with advanced fat removal technology for healthier frying and cooking."
    image="https://m.media-amazon.com/images/I/619k6JusdAL.AC_SX679.jpg"
  />
</div>

<div className="home__row">
  <Product
    id="34567890"
    title="Whirlpool 240 L Frost-Free Multi-Door Refrigerator"
    price={699.99}
    rating={4}
    description="Spacious and energy-efficient multi-door refrigerator with frost-free technology and ample storage space."
    image="https://m.media-amazon.com/images/I/31j9BWAf-TL.SY445_SX342_QL70_FMwebp.jpg"
  />
  <Product
    id="45678901"
    title="Samsung 6.5 Kg Fully-Automatic Top Loading Washing Machine"
    price={399.99}
    rating={5}
    description="Efficient and user-friendly top-loading washing machine with fully automatic features for a hassle-free laundry experience."
    image="https://m.media-amazon.com/images/I/61YtNJ4j7eL.AC_UY218.jpg"
  />
</div>

<div className="home__row">
  <Product
    id="56789012"
    title="LG 260 L 3 Star Frost Free Double Door Refrigerator"
    price={749.99}
    rating={4}
    description="Double door refrigerator with frost-free technology and energy-efficient performance, ideal for small to medium-sized households."
    image="https://m.media-amazon.com/images/I/31QALPptvTL.SX342_SY445_QL70_FMwebp.jpg"
  />
  <Product
    id="67890123"
    title="Bosch 7 kg Fully-Automatic Front Loading Washing Machine"
    price={549.99}
    rating={5}
    description="Front-loading washing machine with fully automatic operation, known for its reliability and efficient cleaning performance."
    image="https://m.media-amazon.com/images/I/71ROlxCr9xL.AC_UY218.jpg"
  />
</div>

<div className="home__row">
  <Product
    id="78901234"
    title="Coway AP-1512HH Mighty Air Purifier with True HEPA and Eco Mode"
    price={229.99}
    rating={5}
    description="Compact yet powerful air purifier with True HEPA filter and Eco mode for effective air purification in your home."
    image="https://m.media-amazon.com/images/I/61tg5nM+eKL.AC_UY218.jpg"
  />
  <Product
    id="89012345"
    title="Dyson Pure Cool Link TP02 Wi-Fi Enabled Air Purifier"
    price={499.99}
    rating={4}
    description="Wi-Fi enabled air purifier with advanced filtration technology and fan functionality to keep your home clean and cool."
    image="https://m.media-amazon.com/images/I/51lVN19vy6L.AC_UY218.jpg"
  />
  
</div>
<button className="product__button" onClick={handleClick1}>Go to Home Page</button>

</div>

  )
}

export default TvandAppliance