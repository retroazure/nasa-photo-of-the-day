import React from 'react';

const imgButton = (props) => {
    const {img} = prop;
    return (
        <div className='button-img'>
            <button onClick={()=> { return img } }></button>
        </div>
    )
}

export default imgButton;