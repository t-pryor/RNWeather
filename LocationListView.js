'use strict';

import React, {Component} from 'react';
import { AppRegistry, ListView, Text, View, TouchableHighlight } from "react-native";


class LocationListView extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== rs});
        this.state = {
            dataSource: ds.cloneWithRows(props.data)
        }
    }

    pressRow(rowData) {
        console.log(rowData);

        // let newArray = ['Vancouver', 'Calgary', 'Edmonton', 'Victoria', 'Saskatoon'];
        //
        // let newDataSource = this.ds.cloneWithRows(newArray);
        // this.setState({
        //  dataSource: newDataSource
        // });
    }


    // does renderSeperator makes sense?
    renderRow(rowData) {
        return (
            <TouchableHighlight
                onPress={()=> this.pressRow(rowData)}
                underlayColor='#ddd'
            >
            <View style={{
                flex: 1,
                flexDirection: 'row',
                padding: 20,
                alignItems: 'center',
                backgroundColor: '#81B0A0',
                borderColor: '#D04734',
                borderBottomWidth: 1
            }}>
            <Text style={{fontSize: 45}}> {rowData} </Text>
            </View>
            </TouchableHighlight>
        );
    }


    // ListView requires two props: dataSource and renderRow
    render() {
        return (
            <View style={{paddingTop: 22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        )
    }

}

module.exports = LocationListView;
