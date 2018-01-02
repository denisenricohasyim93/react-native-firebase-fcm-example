import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Header } from 'react-native-elements';

export default class LoginHeader extends React.Component {
  render() {
    return (
      <Header
        statusBarProps={{ barStyle: 'light-content', backgroundColor: '#2A55AB', hidden: true}}
        leftComponent={{ icon: 'home', style: { color: '#fff'} }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff'} }}
        rightComponent={{ icon: 'home', style: { color: '#fff'} }}
      />
    );
  }
}