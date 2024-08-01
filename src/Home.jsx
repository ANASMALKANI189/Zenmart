// import React from 'react'
import { useState } from 'react'
import elect_icon from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/elect.png'
import fash_icon from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/fashion.png'
import tablet from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/tablets.png'
import wear from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/icon1.jpg'
import furn from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/furn.png'
import Navbar from './Navbar.jsx'
import {useNavigate} from 'react-router-dom'
import iphone1 from 'C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/iphon1.jpg'

import  './Home.css'
const Home = () => {


  const [indexValue, setIndexValue] = useState(1);

  const images = [
    'https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/June_SW/978x900_BS3._CB553778125_.gif', // replace with your image URLs
    'https://m.media-amazon.com/images/I/81rNai7AVUL._AC_UL480_FMwebp_QL65_.jpg', // replace with your image URLs
    'https://m.media-amazon.com/images/G/31/img21/MA2024/SS24flip/BBD/Casual_Shirts_978x1410._SX846_QL85_FMpng_.png', // replace with your image URLs
    'https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/bbb9b9b5-7f32-4537-a994-66f176574a16._CR0,0,1200,628_SX810_QL70_.jpg', // replace with your image URLs
    'https://m.media-amazon.com/images/I/51vV9nPUo7L.AC_SR180,120_QL70.jpg', // replace with your image URLs
    
  ];

  const showImg = (e) => {
    let newIndex = e;
    if (newIndex > images.length) newIndex = 1;
    if (newIndex < 1) newIndex = images.length;
    setIndexValue(newIndex);
  };

  const btmSlide = (e) => showImg(e);
  const sideSlide = (e) => showImg(indexValue + e);

const navigate=useNavigate()

  function handleClick(){
    navigate('/Smartdevice')
  }


  return (
    <>
  <div className="main">
  <div className="categories">
    <div className="category">
      <img src={elect_icon} className="icon" alt="Tv & Appliances"/>
      <h1 ><a className="anc" href="/Tv&Appliance">Tv & Appliances</a></h1>
    </div>
    <div className="category">
      <img src={fash_icon} className="icon" alt="Fashion"/>
      <h1 ><a className="anc" href="/Fashion">Fashion</a></h1>
    </div>
    <div className="category">
      <img src={tablet} className="icon" alt="Tablets & Mobile"/>
      <h1 ><a className="anc" href="/Smartdevice">Mobiles & Tablets</a></h1>
    </div>
    <div className="category">
      <img src={wear} className="icon" />
      <h1 ><a className="anc" href="/Wearables">Wearables</a></h1>
    </div>
    <div className="category">
      <img src={furn} className="icon" alt="Furniture"/>
     <h1 ><a className="anc" href="/Furniture">Furniture</a></h1>
    </div>
   </div>
   </div>


<div className='slide'>
   <div className="content">
      <div className="images1">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ display: index + 1 === indexValue ? 'block' : 'none' }}
          />
        ))}
      </div>
      <div className="btm-slides">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => btmSlide(index + 1)}
            style={{
              background: index + 1 === indexValue ? 'white' : 'rgba(255,255,255,0.1)',
            }}
          />
        ))}
      </div>
      <div className="sliders left" onClick={() => sideSlide(-1)}>
        <span className="fas fa-angle-left"></span>
      </div>
      <div className="sliders right" onClick={() => sideSlide(1)}>
        <span className="fas fa-angle-right"></span>
      </div>
    </div>
    </div>



  

  {/* main class */}
 
  <div className="cards">

<div className="card">
  <div className="cardHeading">
    Bluetooth Calling Smartwatch starts at ₹1,999
  </div>
  <img id="wat" decoding="async" src={'https://m.media-amazon.com/images/I/61TapeOXotL._AC_UL480_FMwebp_QL65_.jpg'} alt="" />
  <a href="/Wearables">Shop Now</a>
</div>

<div className="card">
  <div className="cardHeading">Appliances for your home | Up to 55% off</div>
  <div className="cardContainer">
    <div className="product">
      <img src={'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg'} />
      <p>Washing machines</p>
    </div>
    <div className="product">
      <img decoding="async" src={"https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"} alt="" />
      <p>Refrigerators</p>
    </div>
    <div className="product">
      <img decoding="async" src={"https://m.media-amazon.com/images/I/812v525aLdL._AC_UY327_FMwebp_QL65_.jpg"} alt="" />
      <p>TV</p>
    </div>
    <div className="product">
      <img decoding="async" src={"https://m.media-amazon.com/images/I/414ly0wsjYL._AC_UY327_FMwebp_QL65_.jpg"} alt="" />
      <p>Air Fryer</p>
    </div>
  </div>
  <a href="/TV&Appliance">Explore all</a>
</div>

<div className="card">
  <div className="cardHeading">Up to 75% off | Headphones</div>
  <div className="cardContainer">
    <div className="product">
      <img decoding="async" src={"https://m.media-amazon.com/images/G/31/img24hp/halos/1_Shop_By_Brand_300x300._CB557743363_.jpg"} alt="" />
      <p>Up to 75% off | boAt</p>
    </div>
    <div className="product">
      <img decoding="async" src={"https://m.media-amazon.com/images/G/31/img24hp/halos/10_Shop_By_Brand_300x300._CB557743363_.jpg"} alt="" />
      <p>Up to 75% off | boult</p>
    </div>
    <div className="product">
      <img decoding="async" src={"https://m.media-amazon.com/images/G/31/img24hp/halos/3_Shop_By_Brand_300x300._CB557743363_.jpg"} alt="" />
      <p>Up to 75% off | Noise</p>
    </div>
    <div className="product">
      <img decoding="async" src={"https://m.media-amazon.com/images/G/31/img24hp/headphones/MayART_New/Zeb_Shop_By_Brand_300x300._CB556049613_.jpg"} alt="" />
      <p>Up to 75% off | Zebronics</p>
    </div>
  </div>
  <a href="/Wearables">See all offers</a>
</div>

<div className="con">
<div className="card1">
      <div className="right">
        <div className="logo">
          <h1>iPhone 12</h1></div>
        <div className="about">
          <p>
             Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording
            12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording.
          </p>
        </div>
        <button onClick={handleClick}>
          <span>Buy Now</span>
          <span>₹49,999</span>
        </button>
      </div>
      <div className="left">
        <img src={iphone1} alt="iPhone 12" />
      </div>
    </div>
    </div>
    </div>

 <footer>
    <div className="footer-part-1">
      <ul>
        <li>AbeBooks</li>
        <li>Books, art</li>
        <li>&amp; collectibles</li>
      </ul>
      <ul>
        <li>ZenMart  Web Services</li>
        <li>Scalable Cloud</li>
        <li>Computing Services</li>
      </ul>
      <ul>
        <li>Audible</li>
        <li>Download</li>
        <li>Audio Books</li>
      </ul>
      <ul>
        <li>DPReview</li>
        <li>Digital</li>
        <li>Photography</li>
      </ul>
      <ul>
        <li>ZenMart  Bussiness</li>
        <li>Everything For</li>
        <li>Your Bussiness</li>
      </ul>
      <ul>
        <li> ZenMart Prime Now</li>
        <li>2-Hours Delivery</li>
        <li>on Everyday Items</li>
      </ul>
      <ul>
        <li>ZenMart Music</li>
        <li>100 million songs, ad-free</li>
        <li>Over 15 million podcast episodes</li>
      </ul>
    </div>

    <div className="footer-part-sm">
      <div className="lang">
        <i className="fa-solid fa-globe"></i>

      </div>
      <h3><a href="/">Already a customer? Sign in</a></h3>
    </div>

    <div className="footer-part-2">
      <p>
        <a href="">Conditions of Use &amp; Sale</a>
        <a href="">Privacy Notice</a> <a href="">Interest-Based Ads</a>
      </p>
      <p>&copy; 1996-2023, ZenMart.com, Inc. or its affilates</p>
    </div>
  </footer> 
  


  <Navbar/>
  </>
   
  )
}

export default Home;
