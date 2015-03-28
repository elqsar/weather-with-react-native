'use strict';

var React = require('react-native');

var colors = require('../resources/colors');

var {
  StyleSheet,
  PixelRatio
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2C487E',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C487E',
  },
  topWrapper: {
    
  },
  middleWrapper: {
    alignItems: 'center'
  },
  icon: {
    width: 58,
    height: 54,
    resizeMode: 'contain'
  },
  temperature: {
    fontSize: 128,
    textAlign: 'center',
    fontWeight: '100',
    color: colors.textColor
  },
  locationName: {
    textAlign: 'center',
    color: colors.textColor,
    fontWeight: '200',
    fontSize: 36
  }
});