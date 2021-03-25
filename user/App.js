import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import Routes from './Routes.js';

class App extends React.Component {
  
  render(){
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
  },
});

export default App
AppRegistry.registerComponent('App', () => App)