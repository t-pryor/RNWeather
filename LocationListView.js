'use strict';

import React, {Component} from 'react';
import { AppRegistry, ListView, Text, View } from "react-native";


class LocationListView extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== rs});
        this.state = {
            dataSource: ds.cloneWithRows([
                'Montreal', 'Laval', 'Toronto', 'Quebec City', 'Ottawa'
            ])
        }
    }
    render() {
        return (
            <View style={{paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        )
    }
}

module.exports = LocationListView;
