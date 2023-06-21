import React from 'react'

const NavItem = ({text}) => {

    const dynamicStyles = () => {
        if (text === "Contact") {
            return "mx-6 flex px-6 border-white border-2 h-8 items-center justify-center rounded-full"; 
        } else {
            return "px-8 h-full pb-2 pt-8";
        }
    }

    return (
        <div className={`flex cursor-pointer hover:bg-white hover:text-black text-sm ${dynamicStyles()}`}>
            {text}
        </div> 
    )
};

export default NavItem;