import React from 'react';
import PropTypes from 'prop-types';

//import './styles.css';
const WheatherExtraInfo = ({humidity, wind}) =>(
    <div className="weatherExtraInfoCont">
        <span className="extraInfoText">{`Humedad: ${humidity} % - `}</span>
        <span className="extraInfoText">{`viento ${wind} viento`} </span>
        
    </div>
);

WheatherExtraInfo.propTypes={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WheatherExtraInfo;