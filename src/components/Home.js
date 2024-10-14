import React from 'react'
import { useState , useEffect } from "react"
import './Home.css';
import { motion } from 'framer-motion';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export function Home(){
    const navigate = useNavigate();

    const [products ,setProduct] = useState([]);
    useEffect(() =>{
        fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res  => setProduct(res.products));
    },[]);

    function placeOrder() {
        setTimeout(() =>{ navigate('/products')},5000);
  }


    return (
        <>
        <div className='homepage'>
        <header className="header">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Home Appliances and Cosmetic
        </motion.h1>
        </header>

        <section className="products">
        <motion.div
          className="product"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}>
        <div className='wrapper1'>
        <Carousel>
        <Carousel.Item>
        <img alt="hero_banner" src="https://cmsimages.shoppersstop.com/skechers_Reebok_web_fed1221d66/skechers_Reebok_web_fed1221d66.png" className="md:pl-[2px]" loading="eager"/>        
        </Carousel.Item>

        <Carousel.Item>
        <img alt="hero_banner" src="https://cmsimages.shoppersstop.com/Giftoflove_web_9d4b071b68/Giftoflove_web_9d4b071b68.png" className="md:pl-[2px]" loading="eager"/>        </Carousel.Item>

        <Carousel.Item>
        <img alt="hero_banner" src="https://cmsimages.shoppersstop.com/Forever_New_forever_new_and_more_web_5e9046490f/Forever_New_forever_new_and_more_web_5e9046490f.png" className="md:pl-[2px]" loading="eager"/>
        </Carousel.Item>

        <Carousel.Item>
        <img alt="hero_banner" src="https://cmsimages.shoppersstop.com/Burberry_Versace_and_more_web_39980a1911/Burberry_Versace_and_more_web_39980a1911.png" className="md:pl-[2px]" loading="eager"/>
        </Carousel.Item>

        <Carousel.Item>
        <img alt="hero_banner" src="https://cmsimages.shoppersstop.com/Titan_web_6a9b90ef7c/Titan_web_6a9b90ef7c.png" className="md:pl-[2px]" loading="eager"/>
        </Carousel.Item>
        </Carousel>
        </div>
        <hr/>
        <div className='wrapper2'>
        <Carousel>
        <Carousel.Item>
        <img alt="hero_banner" src="https://cmsimages.shoppersstop.com/new10_sale_strip_web_a9f20f5168/new10_sale_strip_web_a9f20f5168.jpg" className="md:pl-[2px]" loading="eager" />        
        </Carousel.Item>

        <Carousel.Item>
        <img alt="hero_banner" src="https://cmsimages.shoppersstop.com/STYLE_24_strip_web_147c1c0d9d/STYLE_24_strip_web_147c1c0d9d.jpg" className="md:pl-[2px]" loading="eager"/>
        </Carousel.Item>
        </Carousel>
        </div>

        <hr/>

        </motion.div>
        </section>

        <footer className='shopnow'> 
        <motion.button
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
           transition={{ duration: 0.2 }}
          className='shop' onClick={placeOrder}>
          Shop More Products Now...
        </motion.button>
        </footer>
        </div>

        <hr/>
        <div className='web-about'>
              <h1>FREE WEBSITE FOR PURCHASING A PRODUCT</h1>
              <div className='cards'>
                <div className='wrapper'>
                  <h3>Online Shopping</h3>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>Home & Living</li>
                  <li>Beauty</li>
                  <li>Gift</li>
                </div>

                <div className='wrapper'>
                  <h3>Customer Policies</h3>
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>T&C</li>
                  <li>Terms Of Use</li>
                  <li>Track Orders</li>
                  <li>Shipping</li>
                  <li>Cancellation</li>
                  <li>Returns</li>
                </div>

                <div className='social'>
                <h3>Keep in Touch</h3>
                <NavLink className='media'><HiOutlineMailOpen /></NavLink>
                <NavLink className='media'><FaYoutube /></NavLink>
                <NavLink className='media'><FaInstagram /></NavLink>
              </div>
              </div>
              
        </div>
    </>
    )
}