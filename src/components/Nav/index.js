import React from 'react';
import {FiHome, FiUser, FiBookOpen, FiServer, FiMail} from 'react-icons/fi';

import NavItem from './NavItem';
import Headshot from '../../shared/Headshot';

const Nav = () => {

    const links = [
        {
            to: "", 
            text: "Home", 
            icon: <FiHome color='#fff' size={22} />
        },
        {
            to: "", 
            text: "About", 
            icon: <FiUser color="#fff" size={22} />
        }, 
        {
            to: "", 
            text: "Portfolio", 
            icon: <FiBookOpen color="#fff" size={22} />
        }, 
        {
            to: "", 
            text: "Services", 
            icon: <FiServer color="#fff" size={22} />
        }, 
        {
            to: "", 
            text: "Contact", 
            icon: <FiMail color={"#fff"} size={22} />
        }, 
    ];

    const renderLinks = () => {
        return links.map((link, i) => <NavItem icon={link.icon} text={link.text} key={`${i}-${link.text}`} /> );
    }

    return (
        <div className="w-1/5 flex flex-col h-screen bg-black bg-opacity-80 py-4 px-6">
                <Headshot />
                <div className="w-full flex flex-row justify-center mt-2">
                    <h2 className="font-bold text-2xl">Jake Garcia</h2>
                </div>
            <div className="w-full flex flex-col mt-12 ">
                {renderLinks()}
            </div>
        </div>
    )
}

export default Nav;