// 이미지를 배경으로 사용하는 컨테이너 컴포넌트
// 이미지 위에 다른 컴포넌트 중첩시킬 수 있음
// 자식 요소를 가질 수 있음

<ImageBackground source={{uri: 'https://example.com/background.png'}} style={{width: '100%', height: '100%'}}>
  <Text>Inside</Text>
</ImageBackground>
