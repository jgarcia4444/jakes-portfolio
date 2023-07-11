import React from 'react'

const NavItem = ({itemInfo}) => {

    const {text, icon, to} = itemInfo;

    console.log(icon);
    return (
        <a href={to} className={`flex cursor-pointer flex-row justify-start mb-6 items-center`}>
                {icon}
                <p className="ml-2 font-bold">
                    {text}
                </p>
        </a> 
    )
};

export default NavItem;