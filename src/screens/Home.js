import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../components/styles';

export default class Home extends Component {
  next = () => {
    this.props.navigation.navigate('KYC_Id');
  };
  render() {
    return (
      <View>
        <Text style={styles.homeTitle}>Welcome to Learning Factory</Text>
        <TouchableOpacity
          style={styles.homeButtonContainerStyle}
          activeOpacity={0.5}
          onPress={this.next}>
          <View style={styles.homeButton}>
            <Text style={styles.homeButtonStyle}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
