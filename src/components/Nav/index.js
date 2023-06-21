import React from 'react';
import NavItem from './NavItem';

const Nav = () => {

    const renderLinks = () => {
        const links = [{to: "", text: "About"}, {to: "", text: "Portfolio"}, {to: "", text: "Contact"}];

        return links.map((link, i) => <NavItem text={link.text} key={`${i}-${link.text}`} /> );
    }

    return (
        <div className="w-full flex flex-row px-4 items-center">
            <div className="w-1/2">
                <h2 className="text-4xl font-bold mt-0 cursor-pointer">JG</h2>
            </div>
            <div className="w-1/2 flex flex-row items-end justify-end">{renderLinks()}</div>
        </div>
    )
}

export default Nav;