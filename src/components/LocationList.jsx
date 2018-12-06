import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


class LocationList extends Component {

    constructor(props) {
        super(props);

        const { cities } = props;
        this.state = {
            cities
        }
    }

    onClickLocation = (city) => {

        //callback hacia arriba
        const { onWeatherLocationClick } = this.props;
        onWeatherLocationClick(city);
    }

    strComponents = (cities) => {
        //const {onWeatherLocationClick} = this.props;
        var items = cities.map((city) => {
            return (<WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => this.onClickLocation(city)}
            />)
        })
        return items;
    }

    render() {
        const { cities } = this.state;
        return (
            <div className="locationlist">
                {
                    this.strComponents(cities)
                }
            </div>
        );
    }
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    printForeCast: PropTypes.func.isRequired,
}

export default LocationList;