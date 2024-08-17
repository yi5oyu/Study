// 화면 위에 새로운 콘텐츠를 덮어쓰는 모달 창을 렌더링하는 컴포넌트
// visible, animationType
// visible: 모달의 표시 여부
// animationType: 모달이 나타날 때 애니메이션 효과

<Modal visible={modalVisible} animationType="slide">
  <View>
    <Text>Hello Modal</Text>
  </View>
</Modal>
