// 애플리케이션 진입점 역할(앱이 시작되면 JavaScript 런타임은 실행을 시작할 이 파일을 찾음)

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
