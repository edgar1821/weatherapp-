import React from 'react';

const WheatherExtraInfo = ({humidity, wind}) =>(
    <div>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} viento`} </span>
        
    </div>
);

export default WheatherExtraInfo;