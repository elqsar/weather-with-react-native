'use strict';

var React = require('react-native');
var moment = require('moment');

var WeekForecastComponent = require('./WeekForecastComponent');
var Forecast = require('./services/ForecastApi');
var ForecastPresenter = require('./presenters/ForecastPresenter');

var styles = require('./styles/ForecastPageStyle');

var {
	Text,
	View,
	Image,
  ActivityIndicatorIOS,
	Component
} = React;

class ForecastPage extends Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
    this.forecast = new Forecast();
    this.presenter = new ForecastPresenter();
  }

  getState() {
    return {
      currentForecast: {},
      loading: true,
      weatherIcon: 'image!clear'
    };
  }

	componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      console.log('Location ', location);
      this.loadTemperature(location);
    });
	}

  render() {
    if(this.state.loading) {
      return this.renderLoading();
    }

    var icon = this.presenter.getIcon(this.state.currentForecast.currently.icon);
    var days = this.presenter.createInterval(6);
    var location = this.presenter.getLocationFromTimezone(this.state.currentForecast.timezone);
    var currentTemperature = this.presenter.getCurrentTemperature(this.state.currentForecast.currently.temperature);

    return (
      <View style={styles.container}>
      	<View style={styles.topWrapper}>
      		
      	</View>
      	<View style={styles.middleWrapper}>
      		<Image
      			style={styles.icon} 
      			source={icon}/>
	        <Text style={styles.temperature}>
	          {currentTemperature}
	        </Text>
	        <Text style={styles.locationName}>
	          {location}
	        </Text>
        </View>
        <View>
        	<WeekForecastComponent days={days} data={this.state.currentForecast.daily}/>
        </View>
      </View>
    );
  }

  renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicatorIOS
          hidden='true'
          size='large'/>
      </View>
    );
  }

  loadTemperature(location) {
    var options = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };

  	this.forecast.query(options, (error, json) => {
  		if(error) {
  			console.log(error);
  		} else {
  			this.setState({
  				currentForecast: json,
          loading: false
  			});
  		}
  	});
  }

}

module.exports = ForecastPage;