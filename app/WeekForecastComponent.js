'use strict';

var React = require('react-native');
var styles = require('./styles/WeekForecastComponentStyle');

var ForecastPresenter = require('./presenters/ForecastPresenter');

var {
	Text,
	View,
	Image,
	Component
} = React;

class WeekForecastComponent extends Component {

	constructor() {
		this.presenter = new ForecastPresenter();
	}

	render() {
		var dayForecast = this.props.data.data;
		var icons = [];
		dayForecast.map(day => icons.push(this.presenter.getIcon(day.icon)));
		return (
			<View style={styles.bottomWrapper}>
				{this.props.days.map((day, index) => 
					<View style={styles.weeklyColumn}>
						<Text style={styles.weekForecast}>{day}</Text>
						<Image source={icons[index + 1]} style={styles.miniIcon}/>
						<Text style={styles.weekForecast}>
							{Number(dayForecast[index + 1].temperatureMax).toFixed(0)}
						</Text>
					</View>
				)}
  		</View>
		);
	}
}

module.exports = WeekForecastComponent;