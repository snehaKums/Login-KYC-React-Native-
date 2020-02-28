import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppContainer from './src/components/Navigator';
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
console.disableYellowBox = true;
