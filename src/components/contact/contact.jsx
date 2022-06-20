import React from 'react'
import "./contact.css"
import emailjs from "emailjs-com"
import Phone from "../../image/phone.png"
import Email from "../../image/phone.png"
import Address from "../../image/phone.png"
import {useRef} from "react"
import {useState} from "react"
import { findByPlaceholderText } from '@testing-library/react'

import { ThemeContext } from "../../context";
import { useContext } from "react";

 const Contact = () => {
     const formRef =useRef ()
     const [done,setDone] =useState (false)
     const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

     const handleSubmit = (e)=>
     {
         e.preventDefault();

         emailjs.sendForm('service_50jrk3a', 'template_6gtha3o', formRef.current, 'S6EjVuqQCLpmiXlvK')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
     }
  return (
    <div className="c">
        <div className="c-bg"> </div>


        <div className ="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Lets get connected  
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                       <img
                        src={Phone}
                         alt="" 
                         className="c-icon" />
                         +1 682 2418 171
                    </div>
                    <div className="c-info-item">
                       <img
                        src={Phone}
                         alt="" 
                         className="c-icon" />
                         +1 682 2418 171
                    </div>
                    <div className="c-info-item">
                       <img
                        src={Phone}
                         alt="" 
                         className="c-icon" />
                         email address here
                    </div>
                </div>
            </div>
            <div className="c-right">
            <p className="c-desc">
                <b> Have a question? </b> Please write your details and message below . 
            </p>
            <form ref = {formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333" , color: darkMode? "white": "#333"} } type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333" , color: darkMode? "white": "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333",color: darkMode? "white": "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333",color: darkMode? "white": "#333"}} rows="5" placeholder="Message" name="message" />
                <button> Submit </button>
                {done && " Thanks, your message has been submitted"}

            </form>
            </div>
        </div>
        


    </div>
  )
}

export default Contact;