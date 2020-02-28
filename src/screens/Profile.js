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

export default class Profile extends Component {
  logout = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View>
        <Text style={styles.textStyle}>
          Name: {this.props.navigation.state.params.NameOBJ}
        </Text>

        <Text style={styles.textStyle}>
          Gender: {this.props.navigation.state.params.GenderOBJ}
        </Text>
        <Text style={styles.textStyle}>
          DOB: {this.props.navigation.state.params.DobOBJ}
        </Text>
        <Text style={styles.textStyle}>
          Work Experience: {this.props.navigation.state.params.WorkExpOBJ}
        </Text>
        <TouchableOpacity
          style={styles.buttonContainerStyle}
          activeOpacity={0.5}
          onPress={this.logout}>
          <View style={styles.loginButtonStyles}>
            <Text style={styles.loginTextStyle}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
