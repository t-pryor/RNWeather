'use strict';

import React, {Component} from 'react';
import { AppRegistry, ListView, Text, View, TouchableHighlight, StyleSheet, Image, NavigatorIOS } from "react-native";

var WeatherDetailData = require('./WeatherDetailData');

class LocationListView extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.data)
        }
    }

    pressRow(rowData) {
        console.log(rowData);
        console.log(this.props.navigator);
        this.props.navigator.push({
            title: 'Push Event',
            component: WeatherDetailData,
            passProps: {
                pushEvent: rowData
            }
        });

        // move to detail view and load weather data
    }

    renderRow(rowData) {
        // let photoString = require(rowData.imageLocation);
        // console.log(photoString);

        let photoString = this._getCity(rowData);

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

    _getCity(cityname) {
        switch(cityname) {
            case 'Victoria':
                return require('./img/Victoria.png');
                break;
            case 'Vancouver':
                return require('./img/Vancouver.png');
                break;
            case 'Calgary':
                return require('./img/Calgary.png');
                break;
            case 'Edmonton':
                return require('./img/Edmonton.png');
                break;
            case 'Saskatoon':
                return require('./img/Saskatoon.png');
                break;
            case 'Toronto':
                return require('./img/Toronto.png');
                break;
            case 'Ottawa':
                return require('./img/Ottawa.png');
                break;
            case 'Montreal':
                return require('./img/Montreal.png');
                break;
            case 'Quebec City':
                return require('./img/QuebecCity.png');
                break;
            case "St. John's":
                return require('./img/StJohns.png');
                break;
        }

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
