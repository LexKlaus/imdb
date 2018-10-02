import React, { Component } from 'react';
import { Button,Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // Version can be specified in package.json
//import introduction from './introduction';
class HomeScreen extends Component {
  render() {
    
    return (
        <View style={styles.container}>
        <Button
          style={styles.paragraph}
          title= "Avenger3:infinity war"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        /*
        <Text style={styles.paragraph}>
          Avenger3:infinity war
        </Text>
       */
        <Image
          source={{ uri: 'https://1.bp.blogspot.com/-2nmv63UDlOQ/WoWgKVF9FkI/AAAAAAAAAdI/b5LJyoFiZ38FNIVLHnYzoeUp1dJPZoMYQCLcBGAs/s1600/Avengers-Infinity-War-poster.jpg' }}
          style={{ height: 140, width: 200 }}
          //onClick={() =>  this.props.navigation.navigate('Details')}
         // onPress={() => this.props.navigation.navigate('Details')}
        />
      
      </View>
      
     );
  }
}
class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    
    return (
     <RootStack />
    
    
    );
   
  }
}
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
