import React from 'react';

import Portrait from '../../media/people/portrait.jpg'

const Headshot = () => {

    return (
        <div className="w-full flex flex-row items-center justify-center" >
            <img src={Portrait} className="rounded-full border-2 border-gray-500 w-32 h-32" />
        </div>
    )
}

export default Headshot;