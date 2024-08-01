import React from 'react'
import logo from  "C:/Users/anasm/OneDrive/Desktop/E-commerce/client/E-comm/src/assets/logo123.png"
import './About.css'
const About = () => {
  return (
    <div>
        <section className="about1">
        <h1>About Us</h1>
        <p>
          </p>
        <div className="about-info">
            <div className="about-img">
                <img src={logo} alt="Geeksforgeeks"/>
            </div>
            <div>
            <p> 

Welcome to ZenMart, your ultimate destination for a seamless and serene shopping experience. At ZenMart, we believe that shopping should be as easy and stress-free as possible. Our carefully curated selection of products spans a wide range of categories, including electronics, fashion, home essential, furniture—ensuring that you'll find exactly what you need, all in one place.

We are committed to providing high-quality products at competitive prices, with a focus on delivering exceptional customer service. Whether you're looking for the latest tech gadgets, trendy apparel, or everyday household items, ZenMart is here to make your shopping journey smooth and satisfying.

Our user-friendly platform is designed to offer a personalized experience, allowing you to discover new products and brands that fit your lifestyle. We are dedicated to continuously improving our offerings and ensuring that every visit to ZenMart leaves you feeling more at ease.

Thank you for choosing ZenMart as your trusted online marketplace. We look forward to serving you and helping you find your zen in online shopping.

            </p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About