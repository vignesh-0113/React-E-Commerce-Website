import React from 'react';
import { useState , useEffect } from "react"
import { useParams } from 'react-router-dom';
import './Product.css';
import { useAuth } from '../auth/Authenticate';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


export function Product(){
    const { user } = useAuth();
    const [products ,setProduct] = useState([]);
    const { id } = useParams();
    const [quantity , setQuantity] = useState(0);
    const navigate = useNavigate();
    const product = products.find(product => product.id === parseInt(id));

    
    useEffect(() =>{
        fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res  => setProduct(res.products));
    },[id]);

    
    function addToCart(){
        console.log(user);
        if(!user){
            navigate('/login')
        }
        if(quantity === 0){
            toast.error('Quantity is zero')
            return 
        }
        const body = {
            userId : user.id,
            products : [
                {
                    id : product.id,
                    quantity : quantity
                }
            ]
        }
        
        console.log(body);
        axios.post('https://dummyjson.com/carts/add', body)
        .then((res) => {
            console.log(res);
            toast.success('Product added to cart');
            setTimeout(() =>{ navigate('/cart')},5000);
        }).catch((err) => {
            console.log(err);
            toast.error('Unable to add to cart');
            setTimeout(() =>{ navigate('/login')},5000);
        })
    }
    
    
    return(
        <>
        <ToastContainer/>
        <div className='product'>
        
        <div className='product1'>
        {
            product ? <img className="image" src={product.images[0]} alt="Not found"/> : <h3>........</h3> 
        }
        
        </div>
        
        
        <div className='product2'>
        <div className='h'>
        {
            product ? <h1>{product.title}</h1> : <h1>Loading.....</h1>
        }
        </div>
        <div className='category'>
        {
            product ? <p><b><h3>{product.category}</h3></b> 
             <h2>{product.tags[0]} {product.tags[1]}</h2></p>: <h2>Category......</h2>
        }
        </div>
        <div className='description'>
            {
                product ? <p><b>Description:</b>{product.description}</p> : <p>description...</p>
            }
        </div>
        <div className='stock'>
        {
            product ? <p><b>Rating:</b> {product.rating} /5 <br/>
            <b>Remaining Stock:</b> {product.stock} <br/>
            <b>Review:</b> {product.reviews[0].rating}<br/>
            <b>Warranty:</b> {product.warrantyInformation}</p> : <p>Page.......</p>
        }
        </div>
        <div className='price'>
        {
            product ? <b>Price: $ {product.price} <br>
            </br>Discount: {product.discountPercentage}% Off </b>: <p>price.....</p>
        }  
        </div>
        <div className='add'>
        <div className='addproduct'>  
            <button onClick={() =>{ setQuantity(quantity +1)}} style={{height:'40px'}}>Quantity Increase +</button>
            <>  
            <span style={{color:quantity>0 ? 'green' : 'red', height:'40px'}}>{quantity}</span>  
            </>
            <button onClick={()=>{ setQuantity(quantity-1)}} style={{height:'40px'}}>Quantity Decrease -</button>
        </div>
        </div>
        
            <button className='btn btn-primary addcart' onClick={() =>{ addToCart()}}>Add to Cart</button>
        
        </div>
        
        </div>   
        </>
    )
}