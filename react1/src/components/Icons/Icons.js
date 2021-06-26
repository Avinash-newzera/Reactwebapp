//@flow
import "./Icons.css"
import React from 'react';

function Icons(){
        return(
            <div>
            <a href="#">
            <img src={'images/playstore.png'} alt="playstore" className="plastore" />
            </a>
            <a href="#">
            <img src={'images/AppStoreBadge.svg'} alt="appstore" className="appstore" />
            </a>
            <a href="#">
            <img src={'images/fb.png'} alt="facebook" className="fb" />
            </a>
            <a href="#">
            <img src={'images/twt.png'} alt="tweeter" className="twt" />
            </a>
            <a href="#">
            <img src={'images/ln.png'} alt="linkedin" className="ln" />
            </a>
            </div>
        )
    }

export default Icons;