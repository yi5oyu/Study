// Babel 설정 파일(.babelrc or babel.config.js)
// JavaScript 코드 트랜스파일

/* .babelrc
// JSON 형태의 설정 파일
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["babel-plugin-react-native-web"]
}
*/

// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['@babel/plugin-transform-flow-strip-types'],
};
