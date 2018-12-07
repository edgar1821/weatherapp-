import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastExtended extends Component {

    render() {
        let { city } = this.props;
        return (
            <div>
                <h2 className="forecast-title">
                    Pronostico extendido {city}
                </h2>
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;