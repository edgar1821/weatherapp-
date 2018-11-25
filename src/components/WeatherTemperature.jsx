import React from 'react';
//import Weathericons from 'react-weathericons';
const WheatherTemperature = ({temperature,weatherState}) =>(
    <div>
        {/* <Weathericons name="day-suny" size="2x" /> */}
        <span>{`${temperature} C°`}</span>
    </div>
);

export default WheatherTemperature;