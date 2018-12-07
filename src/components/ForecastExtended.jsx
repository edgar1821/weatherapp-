import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/ForecastItem';
class ForecastExtended extends Component {

    render() {
        let { city } = this.props;
        return (
            <div>
                <h2 className="forecast-title">
                    Pronostico extendido {city}
                </h2>
                <ForecastItem></ForecastItem>
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;