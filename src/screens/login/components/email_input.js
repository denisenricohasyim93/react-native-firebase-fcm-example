import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export default class EmailInput extends React.Component {
  render() {
    const { onChangeLoginText } = this.props;
    return (
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder="input Email ..."
          onChangeText={text => onChangeLoginText(text)}
        />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
      </View>
    );
  }
}