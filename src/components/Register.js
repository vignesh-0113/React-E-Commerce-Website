import React from "react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useState } from 'react'
import './Register.css'
import { useAuth } from '../auth/Authenticate';

export const Register = () =>{
    
    const navigate = useNavigate();
    const [username , setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    
    function onUserNameChange(e){
      setUserName(e.target.value);
      console.log(username);
   }
  
   function onPasswordChange(e){
      setPassword(e.target.value);
      console.log(password);
   }
   function onCPasswordChange(e){
    setCPassword(e.target.value);
   }
   
   
    function RegSubmit() {
      toast.success('Register successfully');
        setTimeout(() =>{ navigate('/login')},5000);
    }

    return(
        <div className="register-container">
        <ToastContainer/>
        <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1>Register</h1>
        </motion.h1>

        <motion.div
          className="reg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}>      
        <form className="reg-form">
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
        <label>Confirm Password:</label>
        <input
          type="password"
          name="c-password"
          value={cpassword}
          onChange={onCPasswordChange}
          required 
        /> <br/>
        <button className="regbutton" type="submit" onClick={ RegSubmit } >Register</button>
        
      </form>
      </motion.div>
        </div>
    )
}