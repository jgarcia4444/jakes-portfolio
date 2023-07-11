import React from 'react';
import {FiHome, FiUser, FiBookOpen, FiServer, FiMail} from 'react-icons/fi';

import NavItem from './NavItem';
import Headshot from '../../shared/Headshot';

const Nav = () => {

    const links = [
        {
            to: "/", 
            text: "Home", 
            icon: <FiHome color='#fff' size={22} />
        },
        {
            to: "/about", 
            text: "About", 
            icon: <FiUser color="#fff" size={22} />
        }, 
        {
            to: "/portfolio", 
            text: "Portfolio", 
            icon: <FiBookOpen color="#fff" size={22} />
        }, 
        {
            to: "/services", 
            text: "Services", 
            icon: <FiServer color="#fff" size={22} />
        }, 
        {
            to: "/contact", 
            text: "Contact", 
            icon: <FiMail color={"#fff"} size={22} />
        }, 
    ];

    const renderLinks = () => {
        return links.map((link, i) => <NavItem itemInfo={link} key={`${i}-${link.text}`} /> );
    }

    return (
        <div className="w-1/5 flex flex-col h-screen bg-black bg-opacity-80 py-4 px-6 justify-between">
            <div className="w-full flex flex-col">
                <Headshot />
                <div className="w-full flex flex-row justify-center mt-2">
                    <h2 className="font-bold text-2xl">Jake Garcia</h2>
                </div>
                <div className="w-full flex flex-col mt-12 ">
                    {renderLinks()}
                </div>
            </div>
            <div className="w-full">
                <p className="text-center font-thin text-gray-500">&copy;2023 Jake Garcia</p>
            </div>
        </div>
    )
}

export default Nav;