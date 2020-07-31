import React from 'react';

const PicHolder = (props) => {
    const {data} = props;

    return (
        <div className='picture-container'>
            <img src = {data}></img>
        </div>
    )
}

export default PicHolder;