import React, {Component} from 'react';
import {Button, Text, View} from 'native-base';
import {Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {TextField} from 'react-native-material-textfield';
import {isValid} from './ObjectHelper';

export default class Camera extends Component {
  constructor(props) {
    super(props);
  }
  imageSource = null;

  removePhoto() {
    this.imageSource = null;
    this.setState({});
  }
  openCamera() {
    ImagePicker.launchCamera({}, response => {
      console.log(`response ${JSON.stringify(response)}`);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.imageSource = {uri: response.uri};
        this.setState({});
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  }

  render() {
    shoudlShowImage = isValid(this.imageSource);
    takePhotoButtonText = shoudlShowImage ? 'Take Another Photo' : 'Take Photo';
    shoudlShowRemoveImage = shoudlShowImage;
    console.log(`imageSource => ${JSON.stringify(this.imageSource)}`);
    return (
      <View style={{padding: 10}}>
        {shoudlShowImage && (
          <Image
            source={this.imageSource}
            style={{justifyContent: 'center', width: '95%', height: '50%'}}
          />
        )}
        <Button
          style={{
            justifyContent: 'center',
            marginTop: '5%',
            alignItems: 'center',
          }}
          onPress={this.openCamera.bind(this)}>
          <Text
            uppercase={false}
            style={{color: 'black', justifyContent: 'center'}}>
            {takePhotoButtonText}
          </Text>
        </Button>
        {shoudlShowRemoveImage && (
          <Button
            style={{
              justifyContent: 'center',
              marginTop: '5%',
              alignItems: 'center',
            }}
            onPress={this.removePhoto.bind(this)}>
            <Text uppercase={false} style={{color: 'black'}}>
              Remove Photo
            </Text>
          </Button>
        )}
      </View>
    );
  }
}
