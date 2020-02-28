import React, {Component} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';

import styles from '../components/styles';

export default class KYC_Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput_Name: '',
      TextInput_Gender: '',
      TextInput_Dob: '',
      TextInput_WorkExp: '',
    };
  }

  Send_Data_Function = () => {
    this.props.navigation.navigate('Profile', {
      NameOBJ: this.state.TextInput_Name,
      GenderOBJ: this.state.TextInput_Gender,
      DobOBJ: this.state.TextInput_Dob,
      WorkExpOBJ: this.state.TextInput_WorkExp,
    });
  };
  next = () => {
    this.props.navigation.navigate('KYC_Pic');
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.kycId}>Please Enter following Details</Text>
        <TextInput
          placeholder="Name"
          onChangeText={data => this.setState({TextInput_Name: data})}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />
        <TextInput
          placeholder="Gender"
          onChangeText={data => this.setState({TextInput_Gender: data})}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />
        <TextInput
          placeholder="Date of Birth"
          onChangeText={data => this.setState({TextInput_Dob: data})}
          style={styles.textInputStyle}
          keyboardType={'numeric'}
          underlineColorAndroid="transparent"
        />
        <TextInput
          placeholder="Work Experience"
          onChangeText={data => this.setState({TextInput_WorkExp: data})}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity
          onPress={this.Send_Data_Function}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}> Save Details </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.KYCContainerStyle}
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
