'use strict';

var React = require('react-native');
var styles = require('./styles/WeekForecastComponentStyle');

var {
	Text,
	View,
	Image,
	Component
} = React;

class WeekForecastComponent extends Component {
	render() {
		var dayForecast = this.props.data.data;
		return (
			<View style={styles.bottomWrapper}>
				{this.props.days.map(day => 
					<View style={styles.weeklyColumn}>
						<Text style={styles.weekForecast}>{day}</Text>
						<Text style={styles.weekForecast}>
							{Number(dayForecast.shift().temperatureMax).toFixed(0)}
						</Text>
					</View>
				)}
  		</View>
		);
	}
}

module.exports = WeekForecastComponent;