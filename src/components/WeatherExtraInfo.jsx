import React from 'react';
import PropTypes from 'prop-types';

const WheatherExtraInfo = ({humidity, wind}) =>(
    <div>
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} viento`} </span>
        
    </div>
);

WheatherExtraInfo.propTypes={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WheatherExtraInfo;