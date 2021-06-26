//@flow
import React from 'react';
import './Navbar.css'
const MenuItems=[
    {
        title:'Home',
        url:'/',
        CName: 'nav-links'
    },
    {
        title:'Blog',
        url:'Blog',
        CName: 'nav-links'
    },
    {
        title:'Careers',
        url:'#',
        CName: 'nav-links'
    }]
function Navbar(){
        return (
                 <nav className="NavbarItems">
                    <ul className = 'nav-menu'>
                        {MenuItems.map((item,index) =>{
                            return(
                            <li key={index}>
                                <a className={item.CName} href={item.url}>
                                {item.title} 
                                </a>
                            </li>)
                        })}
                    </ul>
                 </nav>
        );
    }

export default Navbar;