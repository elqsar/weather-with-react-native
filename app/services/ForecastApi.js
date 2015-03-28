'use strict';

var config = require('../resources/config');

class ForecastApi {

	query(options, callback) {
		var longitude = options.longitude || 50;
		var latitude = options.latitude || 14;
		var url = config.BASE_URL + config.API_KEY + [latitude, longitude].join(',') + '?units=si';

		console.log('Call forecast.io ', url);
		fetch(url)
			.then(response => response.json())
			.then(json => callback(null, json))
			.catch(error => callback(error, null));
	}

}

module.exports = ForecastApi;