import React from 'react'
import './Home.css';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


export function Home(){
    const navigate = useNavigate();

    function placeOrder() {
        setTimeout(() =>{ navigate('/products')},5000);
  }
    return (
        <>
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
        <div className='wrapper'>
        <Carousel>

        <Carousel.Item>
        <img src='https://assets.teenvogue.com/photos/5ece79ff2815b0e8f500e191/16:9/w_2560%2Cc_limit/Fenty%2520Beauty%2520Slip%2520Shine%2520Sheer%2520Shiny%2520Lipstick_Editorial(2).jpg' alt='.....'/>
        </Carousel.Item>

        <Carousel.Item>
        <img src='https://img2.exportersindia.com/product_images/bc-full/dir_188/5616586/wooden-furniture-1523859255-3782082.jpg' alt='.....'/>
        </Carousel.Item>

        <Carousel.Item>
        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Samsung-Galaxy-S20-Family-CC?wid=834&hei=470&fit=crop' alt='.....'/>
        </Carousel.Item>

        </Carousel>
        </div>
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
    </>
    )
}