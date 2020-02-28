import React, {Component} from 'react';
import {
  View,
  Text,
  Alert,
  Image,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import styles from '../components/styles';

export default class Register extends Component {
  componentDidMount = () => {
    AsyncStorage.getItem('username').then(value =>
      this.setState({username: value}),
    );
    AsyncStorage.getItem('password').then(value =>
      this.setState({password: value}),
    );
    AsyncStorage.getItem('confirmPassword').then(value =>
      this.setState({confirmPassword: value}),
    );
  };
  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };
  saveRegisterDetails = () => {
    this.props.navigation.navigate('Login');
  };
  setUsername = value => {
    AsyncStorage.setItem('username', value);
    this.setState({username: value});
  };
  setPassword = value => {
    AsyncStorage.setItem('password', value);
    this.setState({password: value});
  };
  setConfirmPassword = value => {
    AsyncStorage.setItem('confirmPassword', value);
    this.setState({confirmPassword: value});
  };
  registerfn = () => {
    this.props.navigation.navigate('Login');
  };
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      hidePassword: true,
    };
  }

  render() {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.rgTitle}>Register here..</Text>
        <View style={{padding: 15, marginBottom: -30, marginTop: -20}}>
          <TextField
            label="Username"
            value={this.state.username}
            autoCapitalize="none"
            onChangeText={this.setUsername}
            tintColor="grey"
            activeLineWidth={1}
          />
        </View>
        <View style={{padding: 15}}>
          <TextField
            label="Password"
            value={this.state.password}
            onChangeText={this.setPassword}
            tintColor="grey"
            activeLineWidth={1}
            secureTextEntry={this.state.hidePassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btneye}
            onPress={this.setPasswordVisibility}>
            <Image
              style={styles.eye}
              source={
                this.state.hidePassword
                  ? require('../assets/images/Hide.png')
                  : require('../assets/images/Show.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View style={{padding: 15}}>
          <TextField
            label="Confirm Password"
            value={this.state.confirmPassword}
            onChangeText={this.setConfirmPassword}
            tintColor="grey"
            activeLineWidth={1}
            secureTextEntry={this.state.hidePassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btneye}
            onPress={this.setPasswordVisibility}>
            <Image
              style={styles.eye}
              source={
                this.state.hidePassword
                  ? require('../assets/images/Hide.png')
                  : require('../assets/images/Show.png')
              }
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.buttonContainerStyle}
          activeOpacity={0.5}
          onPress={this.registerfn}>
          <View style={styles.loginButtonStyles}>
            <Text style={styles.loginTextStyle}>Register</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
