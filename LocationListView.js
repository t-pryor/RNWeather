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

        // move to detail view and load weather data

    }

    renderRow(rowData) {
        let photoString;
        console.log(photoString);
        console.log(typeof photoString);

        switch (rowData) {
            case 'Victoria':
                photoString = require('./img/Victoria.png');
                break;
            case 'Vancouver':
                photoString = require('./img/Vancouver.png');
                break;
            case 'Calgary':
                photoString = require('./img/Calgary.png');
                break;
            case 'Edmonton':
                photoString = require('./img/Edmonton.png');
                break;
            case 'Saskatoon':
                photoString = require('./img/Saskatoon.png');
                break;
            case 'Toronto':
                photoString = require('./img/Toronto.png');
                break;
            case 'Ottawa':
                photoString = require('./img/Ottawa.png');
                break;
            case 'Montreal':
                photoString = require('./img/Montreal.png');
                break;
            case 'Quebec City':
                photoString = require('./img/QuebecCity.png');
                break;
            case "St. John's":
                photoString = require('./img/StJohns.png');
                break;
        }

        return (
            <TouchableHighlight
                onPress={()=> this.pressRow(rowData)}
                underlayColor='#ddd'
            >
            <View style={styles.row}>
            <Image
                source={photoString}
                style={styles.image}
            />

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

const styles = StyleSheet.create({
  row: {
      flex: 1,
      flexDirection: 'row',
      padding: 25,
      alignItems: 'center',
      backgroundColor: '#81B0A0',
      borderColor: '#D04734',
      borderBottomWidth: 1,
      justifyContent: 'flex-start'
  },
  image: {
      height: 73,
      width: 110,
      borderRadius: 5,
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
