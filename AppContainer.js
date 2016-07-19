'use strict'

import React, {Component} from 'react';
import { Text, View, StyleSheet, TabBarIOS, NavigatorIOS } from "react-native";

var LocationListView = require ('./LocationListView')
// var westLocations = [ 'Victoria', 'Vancouver', 'Calgary', 'Edmonton', 'Saskatoon']
// var eastLocations = [ ]

class AppContainer extends Component {

    constructor(props) {
        super(props);

        this.westLocations = [ 'Victoria', 'Vancouver', 'Calgary', 'Edmonton', 'Saskatoon']; // could make each of these objects
        this.eastLocations = ['Toronto', 'Ottawa', 'Montreal', 'Quebec City', "St. John's"];



        // this.westLocations2 = [
        //     this._createCityObject('Victoria'),
        //     this._createCityObject('Vancouver'),
        //     this._createCityObject('Calgary'),
        //     this._createCityObject('Edmonton'),
        //     this._createCityObject('Saskatoon')
        // ]
        // console.log(this.westLocations2);
        //
        // this.eastLocations2 = [
        //     this._createCityObject('Toronto'),
        //     this._createCityObject('Ottawa'),
        //     this._createCityObject('Montreal'),
        //     this._createCityObject('Quebec City'),
        //     this._createCityObject("St. John's")
        // ]
        //
        // console.log(this.eastLocations2);

        this.state = {
            selectedTab: 'west'
        }
    }

    render() {
        return (
            <TabBarIOS
                barTintColor='#F5FCFF'
            >
                <TabBarIOS.Item
                    title="West"
                    selected={this.state.selectedTab == 'west'}
                    icon={require('./img/west-icon-smaller.png')}
                    onPress={()=> this.setState({selectedTab: 'west'})}
                >

                <NavigatorIOS
                    style ={{
                        flex:1
                    }}
                    initialRoute={{
                        component: LocationListView,
                        passProps: { data: this.westLocations},
                        title: 'Western Canada',
                        backButtonTitle: 'Cities'
                    }}
                />

                </TabBarIOS.Item>

            <TabBarIOS.Item
                title="East"
                selected={this.state.selectedTab == 'east'}
                icon={require('./img/east-icon-smaller.png')}
                onPress={()=> this.setState({selectedTab: 'east'})}
            >

            <NavigatorIOS
                style ={{
                    flex:1
                }}
                initialRoute={{
                    component: LocationListView,
                    passProps: { data: this.eastLocations},
                    title: 'Eastern Canada',
                    backButtonTitle: 'Cities'
                }}
            />




            </TabBarIOS.Item>
        </TabBarIOS>
        )
    }

    _createCityObject(cityname) {
        let imageLocationString = './img/' + cityname + '.png'
        console.log(imageLocationString);
        return {
            name: cityname,
            imageLocation: require(imageLocationString) // can't require with a variable
        }
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = AppContainer;
