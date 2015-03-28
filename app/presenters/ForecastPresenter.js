'use strict';

var moment = require('moment');

class ForecastPresenter {

	createInterval(limit) {
		var days = [];
    for(var i = 0; i < limit; i++) {
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
      default: return require('image!default');
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

}

module.exports = ForecastPresenter;