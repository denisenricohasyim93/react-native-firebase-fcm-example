import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginButton extends React.Component {
  render() {
    const { onClickLoginButton } = this.props;
    
    return (
      <Button
        onPress={onClickLoginButton}
        large
        iconRight={{name: 'envira', type: 'font-awesome', size: 20, }}
        title='LARGE WITH RIGHT ICON'
        backgroundColor={'#ffaa11'}
        fontSize={16}
        containerViewStyle={{ marginTop: 21 }}
      />
    );
  }
}