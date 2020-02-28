import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../components/styles';
import Camera from '../components/Camera';

export default class KYC_Pic extends Component {
  next = () => {
    this.props.navigation.navigate('Profile');
  };
  render() {
    return (
      <View>
        <Text style={styles.kycId}>Let's take a Selfie</Text>
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
