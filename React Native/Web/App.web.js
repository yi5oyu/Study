// root/App.web.js
// App.js가 아닌 App.web.js로 나눠서 관리할 경우 webpack.config.js 의 진입점(entry)도 수정해줘야함

import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native Web!</Text>
      <Text style={styles.instructions}>To get started, edit App.web.js</Text>
    </View>
  );
};

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
