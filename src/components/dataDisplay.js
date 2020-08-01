import React from 'react';

const DataDisplay = (props) => {
    const {data} = props; 

    return (
        <h1 className="display-data">{data}</h1>
    )
}

export default DataDisplay;