'use strict';

var React = require('react-native');

var colors = require('../resources/colors');

var {
  StyleSheet,
  PixelRatio
} = React;

module.exports = StyleSheet.create({
	bottomWrapper: {
    flexDirection: 'row'
  },
	weekForecast: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
    color: colors.textColor
  },
  weeklyColumn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  }
});