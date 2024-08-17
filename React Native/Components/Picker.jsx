// 사용자에게 선택 옵션을 제공하는 드롭다운 리스트 컴포넌트
// selectedValue, onValueChange
// selectedValue: 선택된 값을 지정
// onValueChange: 값이 변경될 때 호출되는 콜백 함수

<Picker selectedValue={selectedValue} onValueChange={(itemValue) => setSelectedValue(itemValue)}>
  <Picker.Item label="Option 1" value="1" />
  <Picker.Item label="Option 2" value="2" />
</Picker>
