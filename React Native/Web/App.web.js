import React from 'react';
import { View, Text, StyleSheet } from 'react-native-web';
https://github.com/yi5oyu/Study/tree/main/React%20Native/Web
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
