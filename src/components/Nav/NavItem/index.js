import React from 'react'

const NavItem = ({text, icon}) => {

    console.log(icon);
    return (
        <div className={`flex cursor-pointer flex-row justify-start mb-6 items-center`}>
            {icon}
            <p className="ml-2 font-bold">
                {text}
            </p>
        </div> 
    )
};

export default NavItem;