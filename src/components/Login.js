import React, { useState } from 'react';
import './Login.css'; 
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useAuth } from '../auth/Authenticate';
import { motion } from 'framer-motion';



export const Login = () => {
  const { user,loginUpdate } = useAuth();
  const [username , setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function register(){
    toast.success('Register Page');
    setTimeout(() =>{ navigate('/register')},5000);
  }

 function onUserNameChange(e){
    setUserName(e.target.value);
    console.log(username);
 }

 function onPasswordChange(e){
    setPassword(e.target.value);
    console.log(password);
 }

  const onFormSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('https://dummyjson.com/user/login', { username, password });
      loginUpdate(response.data)
      toast.success('Login Successfully', { position : 'top-center'
      })
      setTimeout(() =>{ navigate('/products')},5000);
      console.log(response);
      console.log('User data',user);
    } catch (error) {
      toast.error('Login Failed',{ position : 'top-center'})
      console.error('Login failed:', error.response.data.msg);
    }
    

  }; 

  return (
    <div className="login-container">
    <ToastContainer/>
    <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Login</h1>
        </motion.h1>


        <motion.div
          className="product"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}>      
        <form className="login-form" onSubmit={onFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onUserNameChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          required 
        /> 
        <button className="loginbutton" type="submit">Login</button>
        
        <label>Create an account:<Link onClick={ register }> Register here</Link></label>
      </form>
      </motion.div>
    </div>
  );
};
