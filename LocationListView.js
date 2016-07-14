'use strict';

import React, {Component} from 'react';
import { AppRegistry, ListView, Text, View, TouchableHighlight } from "react-native";


class LocationListView extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== rs});
        this.state = {
            dataSource: ds.cloneWithRows([
                'Montreal', 'Oakville', 'Toronto', 'Quebec City', 'Ottawa'
            ])
        }
    }

    renderRow(rowData) {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                padding: 20,
                alignItems: 'center',
                borderColor: '#D7D7D7',
                borderBottomWidth: 1
            }}>
            <Text style={{fontSize: 45}}> {rowData} </Text>
            </View>
        );
    }

    renderSeperator(sectionID, rowID) {
        return (
            <View style={{backgroundColor:'#CCCCCC'}} />
        )
    }

    render() {
        return (
            <View style={{paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSeperator={this.renderSeparator}
                />
            </View>
        )
    }
}

module.exports = LocationListView;
