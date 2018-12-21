import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
  printForeCast = city => {

    this.props.setCity(city);

  }
  render() {
    return (
      <div>
        <LocationList
          cities={this.props.cities}
          onWeatherLocationClick={this.printForeCast}
        ></LocationList>
      </div>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => (
  {
    setCity: value => dispatch(setSelectedCity(value))
  }
)
export default connect(null, mapDispatchToProps)(LocationListContainer);

