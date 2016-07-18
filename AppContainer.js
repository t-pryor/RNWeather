'use strict'

import React, {Component} from 'react';
import { Text, View, StyleSheet, TabBarIOS, NavigatorIOS } from "react-native";

var LocationListView = require ('./LocationListView')
// var westLocations = [ 'Victoria', 'Vancouver', 'Calgary', 'Edmonton', 'Saskatoon']
// var eastLocations = [ ]

class AppContainer extends Component {

    constructor(props) {
        super(props);

        this.westLocations = [ 'Victoria', 'Vancouver', 'Calgary', 'Edmonton', 'Saskatoon'];
        this.eastLocations = ['Toronto', 'Ottawa', 'Montreal', 'Quebec City', "St. John's"];

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

                    <LocationListView data = {this.westLocations}/>
                </TabBarIOS.Item>

            <TabBarIOS.Item
                title="East"
                selected={this.state.selectedTab == 'east'}
                icon={require('./img/east-icon-smaller.png')}
                onPress={()=> this.setState({selectedTab: 'east'})}
            >
                <LocationListView data = {this.eastLocations}/>
            </TabBarIOS.Item>
        </TabBarIOS>
        )
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
