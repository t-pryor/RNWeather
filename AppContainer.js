'use strict'

import React, {Component} from 'react';
import { Text, View, StyleSheet, TabBarIOS } from "react-native";

var LocationListView = require ('./LocationListView')

class AppContainer extends Component {
    constructor(props) {
        super(props);

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
                    <LocationListView />
                </TabBarIOS.Item>

            <TabBarIOS.Item
                title="East"
                selected={this.state.selectedTab == 'east'}
                icon={require('./img/east-icon-smaller.png')}
                onPress={()=> this.setState({selectedTab: 'east'})}
            >
                <LocationListView />
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
