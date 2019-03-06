import React, { Component } from 'react';
import {Platform, Image, StyleSheet, Text, View} from 'react-native';
import {iconURL} from './const';

export default class Detail extends Component {
    constructor(props) {
        super(props);

        
      }


    render(){
        const
        return(
            <View style={styles.container}>
                
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
  