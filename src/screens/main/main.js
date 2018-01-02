import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>

        <Button
          onPress={() => this.props.navigation.goBack()}
          large
          iconRight={{name: 'code', size: 20, }}
          title='LARGE WITH RIGHT ICON'
          backgroundColor={'#57D44E'}
          fontSize={16}
          containerViewStyle={{ marginTop: 21 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
