'use strict';

var React = require('react-native');
var forecaster = require('./app/ForecastPage');

var {
  AppRegistry
} = React;

AppRegistry.registerComponent('forecaster', () => forecaster);
