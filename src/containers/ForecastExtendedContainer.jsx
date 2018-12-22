import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    
    render() {
        const { city, forecastData } = this.props;
        
        return (
            <div>
                {
                    this.props.city && 
                    <ForecastExtended city={city} forecastData ={forecastData} />
                }

            </div>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};
const mapStateToProps = ({city})=>({city})
//const mapStateToProps = (state)=>({city:state.city})
export default connect(mapStateToProps,null)(ForecastExtendedContainer);