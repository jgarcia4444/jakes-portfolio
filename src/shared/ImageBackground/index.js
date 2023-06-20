
import React from 'react';

import palmSprings from '../../media/backgrounds/palm.jpg';

const ImageBackground = ({children}) => {

    return (
        <div className="w-screen h-screen px-4">
            <img src={palmSprings} className="w-full h-full absolute top-0 left-0 -z-10" />
            {children}
        </div>
    )
}

export default ImageBackground;