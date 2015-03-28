'use strict';

var React = require('react-native');
var moment = require('moment');

var WeekForecastComponent = require('./WeekForecastComponent');
var ForecastPresenter = require('./presenters/ForecastPresenter');

var styles = require('./styles/ForecastPageStyle');

var {
	Text,
	View,
	Image,
  ActivityIndicatorIOS,
  TouchableHighlight,
	Component
} = React;

class ForecastPage extends Component {

  constructor(props) {
    super(props);
    this.state = this.getState();
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
    this.getUserLocation((error, location) => {
      if(error) {
        console.log(error);
        return;
      }
      this.loadTemperature(location);
    });
	}

  componentWillUnmount() {
    navigator.geolocation.stopObserving();
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
          <TouchableHighlight onPress={this.refresh.bind(this)} underlayColor={'#2C647E'}>
  	        <Text style={styles.temperature}>
  	          {currentTemperature}
  	        </Text>
          </TouchableHighlight>
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

  refresh() {
    this.getUserLocation((error, location) => {
      if(error) {
        console.log(error);
        return;
      }
      this.loadTemperature(location);
    });
  }

  getUserLocation(callback) {
    navigator.geolocation.getCurrentPosition(location => {
      callback(null, location);
    }, error => callback(error, null));
  }

  loadTemperature(location) {
    this.presenter.loadTemperature(location, (error, json) => {
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

  renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicatorIOS
          hidden='true'
          size='large'/>
      </View>
    );
  }

}

module.exports = ForecastPage;