var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">Il fait {temp} à {location}.</h3>
  )
};

module.exports = WeatherMessage;
