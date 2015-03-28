'use strict';

var moment = require('moment');

var Forecast = require('../services/ForecastApi');

class ForecastPresenter {

  constructor() {
    this.forecast = new Forecast();
  }

	createInterval(limit) {
		var days = [];
    for(var i = 1; i <= limit; i++) {
      days.push(moment().add(i, 'days').format('dddd').substr(0, 3));
    }
    return days;
  }

  getIcon(state) {
    switch(state) {
      case 'cloudy': return require('image!cloudy');
      case 'cloudy-night': return require('image!cloudy-night');
      case 'clear-day': return require('image!clear-day');
      case 'clear-night': return require('image!clear-night');
      case 'partly-cloudy': return require('image!partly-cloudy');
      case 'rain': return require('image!rain');
      case 'sleet': return require('image!sleet');
      case 'fog': return require('image!fog');
      case 'snow': return require('image!snow');
      case 'wind': return require('image!wind');
      default: return require('image!cloudy');
    }
  }

  getLocationFromTimezone(timezone) {
  	var slash = timezone.indexOf('/');
  	var result = timezone.substr(slash + 1);
  	return result;
  }

  getCurrentTemperature(temperature) {
  	return Number(temperature).toFixed(0);
  }

  loadTemperature(location, callback) {
    var options = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };

    this.forecast.query(options, (error, json) => {
      if(error) {
        return callback(error, null);
      } else {
        return callback(null, json);
      }
    });
  }

}

module.exports = ForecastPresenter;