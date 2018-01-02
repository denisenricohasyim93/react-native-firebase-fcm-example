import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class PasswordInput extends React.Component {
  render() {
    const { onChangePasswordText } = this.props;
    return (
      <View>
        <FormLabel>Password</FormLabel>
        <FormInput
          placeholder="input Password ..."
          onChangeText={text => onChangePasswordText(text)}
        />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
      </View>
    );
  }
}