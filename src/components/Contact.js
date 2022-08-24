import React,{useRef} from "react";
import emailjs from '@emailjs/browser'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const formRef=useRef(null)
  console.log(formRef.current)
  const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_adjv6ok', 'template_el2j4a4', formRef.current, 'gdaH4VX1iT7ZF0pm0')
      .then((result) => {
          alert("Message Sent Succesfully")
          console.log(formRef.current)
          formRef.current.reset()
      }, (error) => {
          alert("Couldn't send message");
          formRef.current.reset()
      });
      
      
  };
  return (
    <div className="contact" id='Contact'>
      <div className="contactfirst">
        <div className="contactme">
        <FontAwesomeIcon  style={{color:'#32de84',fontSize:'20px',margin:'10px'}}icon={faEnvelope}/>
        <h4 className='contactemail'>venkatgiri23@gmail.com</h4>
        <FontAwesomeIcon  style={{color:'#32de84',fontSize:'20px',margin:'10px'}}icon={faPhone}/>
        <h4 className='contactphone'>+91 8217724480</h4>
        </div>
      </div>

      <div className="contactmain">
        <form ref={formRef} >
          <input type="text" placeholder="Name" name='user_name'/>
          <input type="text" placeholder="subject" name='user_subject'/>
          <input type="text" placeholder="Email" name='user_email' />
          <textarea
            placeholder="Enter Your Message"
            id=""
            cols="10"
            rows="4"
            name='message'
          ></textarea>
           <Button onClick={handleSubmit}className="contactbtn">Send Message</Button>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
