import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Platform } from '@unimodules/core';

import getImageForWeather from './utils/getImageForWeather';

import SearchInput from './components/SearchInput';

export default class App extends React.Component{
  render () {
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior = 'padding'
      >
        <ImageBackground
          source = {getImageForWeather('Clear')}
          style = {styles.imageContainer}
          imageStyle = {styles.image}
        >
          <View style = {styles.detailsContainer}>
            <Text style = {[styles.largeText, styles.textStyle]}>Gitega</Text>
            <Text style = {[styles.smallText, styles.textStyle]}>Light Cloud</Text>
            <Text style = {[styles.largeText, styles.textStyle]}>24°</Text>
            <SearchInput placeholder = "Search any city"/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS == 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  }, 
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,2)',
    paddingHorizontal: 20,
  },
});
