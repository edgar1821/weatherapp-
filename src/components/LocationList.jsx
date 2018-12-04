import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';





const LocationList = ({ cities }) => {

    const handleWeatherLocationClick = city =>{
        console.log(city);
        
    }

    const strComponents = (cities) => (
        cities.map((city) =>
            (<WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={()=>handleWeatherLocationClick(city) }
            />))
    );

    return (
        <div className="locationlist">
            {
                strComponents(cities)
            }
        </div>
    );

}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;