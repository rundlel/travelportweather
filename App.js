/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { getCurrentWeather, getWeatherForCity, parseWeatherData} from './util';
import City from './City';

import { CITIES } from './const';



type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    // this.changeView = this.changeView.bind(this);
    this.state = {
      currentWeather: null,
      currentView: 'LIST_VIEW',
      currentCity: null
    };
  }

 async componentWillMount(){

   const currentWeather = await this.getWeatherDataForEachCity();
  this.setState({currentWeather});

  const weatherForEachCity =  await getWeatherForCity('Dublin');
  console.log(weatherForEachCity);
}
getWeatherDataForEachCity = async () =>{
  const allWeatherData = [];
  for(let i =0; i<CITIES.length; i++){
    const weatherData = await getCurrentWeather(CITIES[i]);
    const parsedData = parseWeatherData(weatherData);
    allWeatherData.push(parsedData);
  }

  return allWeatherData;

}


_keyExtractor = (item) => item.city;
_renderItem({item}){

  return (
    <TouchableOpacity style={{marginBottom: '5%'}}>
      <City city={item.city} temperature={item.temperature} icon={item.icon} weather={item.weather}></City>
    </TouchableOpacity>
  )
}


  render() {
    const{ currentWeather, currentView, currentCity} = this.state;
    return (
      <View style={styles.container}>
       {currentView === 'LIST_VIEW' && <FlatList
        data={currentWeather}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />}
      {currentView === 'DETAIL_VIEW'&&<Text>city detail view</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',

  },

});
