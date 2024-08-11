// npm install react-native-web react-dom 패키지 설치 후 웹에서 시작될 진입 파일 생성
// root/index.web.js

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { render } from 'react-dom';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
