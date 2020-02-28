import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../components/styles';
import Camera from '../components/Camera';

export default class KYC_Id extends Component {
  next = () => {
    this.props.navigation.navigate('KYC_Form');
  };
  render() {
    return (
      <View>
        <Text style={styles.kycId}>Please upload your college ID</Text>
        <Camera />
        <TouchableOpacity
          style={styles.kycButton}
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
