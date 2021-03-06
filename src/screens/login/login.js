import React from 'react';
import {
  View,
  AsyncStorage,
  Platform
} from 'react-native';
import environment from '../../tools/createRelayEnvironment';
import {
  LoginButton,
  EmailInput,
  PasswordInput,
  LoginHeader
} from './components';
import { AddPushTokenMutation } from '../../mutations';

const LOGIN_SERVER_URI = 'https://api.savo.nililia.com/account/auth';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'J@h',
      password: 'Q'
    }
  }

  handleAddPushToken = (token) => {
    AddPushTokenMutation.commit(
      environment,
      token,
      (Platform.OS === 'android') ? "FCM" : "APN"
    );
  }

  completeLoginAction = (accessToken) => {
    AsyncStorage.setItem('@LoginAccessToken:key', accessToken);
    this.handleAddPushToken(accessToken);
    this.props.navigation.navigate('Main');
  }

  failLoginAction = (err) => {
    alert(err);
  }

  onClickLoginButton = () => {
    fetch(LOGIN_SERVER_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
    }).then(response => response.json())
      .then((responseData) => 
        (responseData.accessToken) ?
          this.completeLoginAction(responseData.accessToken) :
          this.failLoginAction(responseData.error)
      )
      .catch((err) => {
        alert(err);
    });
  }

  onChangeLoginText = (newEmail) => {
    this.setState({ email: newEmail });
  }

  onChangePasswordText = (newPassword) => {
    this.setState({ password: newPassword });
  }

  renderLoginButton = () => {
    return (
      <LoginButton onClickLoginButton={this.onClickLoginButton} />
    )
  }

  renderEmailInput = () => {
    return (
      <EmailInput onChangeLoginText={this.onChangeLoginText} />
    )
  }

  renderPasswordInput = () => {
    return (
      <PasswordInput onChangePasswordText={this.onChangePasswordText} />
    )
  }

  renderHeader = () => {
    return (
      <LoginHeader />
    )
  }

  render() {
    return (
      <View>
        {this.renderHeader()}
        {this.renderEmailInput()}
        {this.renderPasswordInput()}
        {this.renderLoginButton()}
      </View>
    );
  }
}