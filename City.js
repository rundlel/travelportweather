import React, { Component } from 'react';
import {Platform, Image, StyleSheet, Text, View} from 'react-native';
import {iconURL} from './const';

export default class City extends Component {
    constructor(props) {
        super(props);

        this.state = {
          city: null,
          weather: null,
          temperature:null,
          icons: null,

        };
      }


    render(){
        const { city, weather, temperature, icon } = this.props;
        const constructURL= iconURL+icon+'.png';
        return(
            <View style={styles.container}>
                <View style={styles.iconContainer}><Image style={{width: 50, height: 50}} source={{uri: constructURL}}/></View>
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>{city}</Text>
                    <View style={styles.details}>
                        <Text>{weather}</Text>
                        <Text>{temperature}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        borderColor: '#000000',
        borderWidth: 1
    },
    iconContainer: {
    flex: 0.3,

    textAlign: 'center',
    },
    infoContainer:{
        flex: 0.7,
  
    },
    header:{
        fontSize: 20,
        textAlign: 'center',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%',

    }
  });
  