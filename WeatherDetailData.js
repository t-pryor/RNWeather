'use strict';

import React, {Component} from 'react';
import { Text, View, StyleSheet, TabBarIOS, NavigatorIOS, ListView } from "react-native";

class WeatherDetailData extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: 200,
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Text>WEATHER DETAIL DATA</Text>
            </View>
        );

    }
}

module.exports = WeatherDetailData;
