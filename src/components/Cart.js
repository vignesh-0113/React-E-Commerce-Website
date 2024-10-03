import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth } from "../auth/Authenticate";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'

export function Cart() {
    const [cart, setCart] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const fetchCart = async () =>{
                await axios.get(`https://dummyjson.com/carts/${user.id}`)
            .then((res) => {
                setCart(res.data.products || []);
            })
            .catch((err) => {
                console.error(err);
            });
            }
            fetchCart()
        }
    }, [user]);

    function placeOrder() {
        toast.success('Order Placed');
        setTimeout(() =>{ navigate('/home')},5000);
    }

    console.log("cart items:",cart)
    

    return (
        <>
        <div className="heading">
            <ToastContainer />
            <h1 className="title">Cart Items</h1>

            <div className="cart-items">
            {
               cart.length === 0 ?(
                <p>Cart is empty</p>
               ) : (
                <>
                {
                    cart.map((item) => {
                        return(
                            <div id={ item.id }>
                            <h3 className="p-title">{ item.title }</h3>
                            <div className="details">
                            <p><b>Quantity:</b> { item.quantity }</p>
                            <p><b>Price:</b> {item.price}</p>
                            <p><b>Discount:</b> {item.discountPercentage}%</p>
                            <p><b>Total:</b> {item.total}</p>
                            </div>
                            </div>
                        )
                        
                    })
                }
                </>                
               )
            }
            </div>
            <div className="order-button">
            <button className="button fs-5" onClick={placeOrder}>Place Order</button>
            </div>
        </div>
        </>
    );
}
