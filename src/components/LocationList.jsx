import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


var strComponents = (cities) => (
    cities.map((city) => <WeatherLocation city={city} />)
)
    

const LocationList = ({ cities }) => {

    return (
        <div>
           {
               strComponents(cities)
           }
        </div>
    )

}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;