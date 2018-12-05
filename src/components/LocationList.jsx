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

    strComponents = (cities) => {
        //const {onWeatherLocationClick} = this.props;
        var items = cities.map((city) => {
            return (<WeatherLocation
                key={city}
                city={city}
            //onWeatherLocationClick={}
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

// const LocationList = ({ cities, printForeCast }) => {



//     // const strComponents = (cities) => (
//     //     cities.map((city) =>
//     //         (<WeatherLocation
//     //             key={city}
//     //             city={city}
//     //             // onWeatherLocationClick={()=>handleWeatherLocationClick(city) }
//     //         />))
//     // );
//     // const handleWeatherLocationClick = city => {

//     // }

//     const strComponents = (cities) => {
//         //const {onWeatherLocationClick} = this.props;
//         var items = cities.map((city) => {
//             return (<WeatherLocation
//                 key={city}
//                 city={city}
//                 onWeatherLocationClick={printForeCast}
//             />)
//         })
//         return items;
//     }

//     return (
//         <div className="locationlist">
//             {
//                 strComponents(cities)
//             }
//         </div>
//     );

// }

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    printForeCast: PropTypes.func.isRequired,
}

export default LocationList;