'use strict';

import React, {Component} from 'react';
import { AppRegistry, ListView, Text, View, TouchableHighlight, StyleSheet, Image } from "react-native";


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
        var photoString = require('./img/Victoria.png')
        console.log(photoString);
        console.log(typeof photoString);

        switch (rowData) {
            case 'Victoria':
                var photoString = require('./img/Victoria.png');
                break;
            case 'Vancouver':
                var photoString = require('./img/east-icon-smaller.png')
                break;
            default:
                var photoString = require('./img/Victoria.png');
                break;
        }

        return (
            <TouchableHighlight
                onPress={()=> this.pressRow(rowData)}
                underlayColor='#ddd'
            >
            <View style={styles.row}>
            <Text style={{fontSize: 45}}> {rowData} </Text>
            <Image
                source={photoString}
                style={{
                    height: 50,
                    width: 100,
                    borderRadius: 10
                }}
            />
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

const styles = StyleSheet.create({
  row: {
      flex: 1,
      flexDirection: 'row',
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#81B0A0',
      borderColor: '#D04734',
      borderBottomWidth: 1
  },
  image: {
      fontSize: 45,
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



module.exports = LocationListView;
