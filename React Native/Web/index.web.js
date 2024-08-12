// npm install react-native-web react-dom 패키지 설치 후 웹에서 시작될 진입 파일 생성
// root/index.web.js

import React from 'react';
import { AppRegistry } from 'react-native-web';
import App from './App.web';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

const rootTag = document.getElementById('root') || document.getElementById('main');
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag,
});
