import { useState , useEffect } from "react"
import {Link} from 'react-router-dom'
import './Products.css';
import { motion } from 'framer-motion';

export function Products(){
    const [products ,setProduct] = useState([]);
    useEffect(() =>{
        fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res  => setProduct(res.products));
    },[]);

    return (
        <>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 1, opacity: 1}}
          transition={{ duration: 1 }}>
        <h1 className="text-danger head">All Products</h1>
        </motion.h1>
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}>
        <div className="contain">
          {products.map((product) => (
          
          <div className="card">
          <img src ={product.images[0]} alt = "Not found"/>
          <div className=" "id= {product.id}>
          <Link to={`/product/${product.id}`}><h2>{product.title}</h2></Link>
          </div>
          <p className="price bg-warning">${product.price}</p>
          <p><b>Remaining Stocks:</b> {product.stock}</p>
            
          <button className="more">
          <Link className="link" to={`/product/${product.id}`}>More Details------</Link>
          </button>
          </div>          
          
          ))}
        </div>
        </motion.div> 
      </>
    )
}
