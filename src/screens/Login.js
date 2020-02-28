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

export default class Login extends Component {
  componentDidMount = () => {
    AsyncStorage.getItem('username').then(value =>
      this.setState({username: value}),
    );
    AsyncStorage.getItem('password').then(value =>
      this.setState({password: value}),
    );
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      inputUsername: '',
      inputPassword: '',
      hidePassword: true,
    };
  }
  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };
  myValidate = () => {
    const {inputUsername, inputPassword} = this.state;
    const myUsername = this.state.username;
    const myPassword = this.state.password;
    if (inputUsername == '' && inputPassword == '') {
      Alert.alert('Please fill the credentials');
    } else if (inputUsername != myUsername && inputPassword != myPassword) {
      Alert.alert('Account not found');
    } else if (inputUsername != '' && inputPassword != myPassword) {
      Alert.alert('Please fill the password correctly');
    } else if (inputUsername != myUsername && inputPassword != '') {
      Alert.alert('Please fill the username correctly');
    } else if (inputUsername == myUsername && inputPassword == myPassword) {
      this.props.navigation.navigate('TabNav');
    } else {
      Alert.alert('Data not found');
    }
  };
  render() {
    let {inputUsername} = this.state;
    let {inputPassword} = this.state;
    return (
      <View style={styles.loginContainer}>
        <Image
          source={require('../assets/images/avatar.jpeg')}
          style={{
            width: '50%',
            height: '50%',
            marginTop: 5,
            marginLeft: '30%',
            resizeMode: 'contain',
          }}
        />
        <View style={{padding: 15, marginBottom: -30, marginTop: -20}}>
          <TextField
            label="Username"
            value={inputUsername}
            autoCapitalize="none"
            onChangeText={inputUsername => this.setState({inputUsername})}
            tintColor="grey"
            activeLineWidth={1}
          />
        </View>

        <View style={{padding: 15}}>
          <TextField
            label="Password"
            value={this.state.inputPassword}
            onChangeText={inputPassword => this.setState({inputPassword})}
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
          onPress={this.myValidate}>
          <View style={styles.loginButtonStyles}>
            <Text style={styles.loginTextStyle}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
