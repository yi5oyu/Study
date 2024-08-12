import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// index.web.js, app.web.js 를 나눠서 관리하고 싶지 않을때 Platform.OS 값으로 실행 시킴
if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication(appName, { initialProps: {}, rootTag });
}
