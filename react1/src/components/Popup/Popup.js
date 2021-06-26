//@flow

import React, { useState } from 'react';
import "./popup.css"
import {CREATE_USER_MUTATION} from "./../Graphql/Mutations"
import { useMutation } from "@apollo/client";

const Prompt = props => {

  return (
    <div className="popup-box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
    </div>
  );
};

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {setIsOpen(!isOpen);}
  const [Name, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
  const addcontact = () => {
    createUser({
      variables: {
        Name: Name,
        Email: Email,
        Message: Message
      },
    });

    if (error) {
      console.log(error);
    }
  }; 

  return( <div>
    <li className="btn" 
      onClick={togglePopup}>Contact</li>
        
    {isOpen && <Prompt
      content={<>
      <h1 className="heading">Contact</h1> 
      <p className="subhead">Lorem Ipsum is simply dummy text of the printing</p>
      <p className="mail">Need more info? hello@newzera.com</p>
      <p className="nt1">Name</p>
      <p className="nt2">E-mail</p>
      <p className="nt3">Message</p>


      <div>
      <input
        type="text"
        className="Name"
        placeholder="Enter your name here"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        className="Email" 
        placeholder="Enter your e-mail address here"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        className="Message" 
        placeholder="Wanna share something with us?"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="BTN" onClick={() => {
          addcontact();
          togglePopup();
      }}>
        Submit
      </button>
    </div>
      <a href="#">
      <img src={'images/fb.png'} alt="facebook" className="fbp" />
      </a>
      <a href="#">
      <img src={'images/twt.png'} alt="tweeter" className="twtp" />
      </a>
      <a href="#">
      <img src={'images/ln.png'} alt="linkedin" className="lnp" />
      </a>
      </>}
      handleClose={togglePopup}
    />}
  </div>)}
  

export default Popup;
