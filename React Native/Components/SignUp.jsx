import React, { useState, useRef } from 'react';
import { View, Text, TextInput ,StyleSheet, TouchableOpacity, Alert } from 'react-native-web';
// import instance from "../api/instance";

const SignUp = () => {

    // Input 이벤트
    const [info, setInfo] = useState({
        id: "", pw: "", pwConfirm: "", name: "", email: "", phone: ""
    })
    function changeInfo(e, text){
        setInfo(i => ({...i, [e]: text}))
    }

    // Focus 이벤트
    const [focusState, setFocusState] = useState({
        id: false, pw: false, pwConfirm: false, name: false, email: false, phone: false
    })
    function handleFocus(e){
        setFocusState(f => ({...f, [e]: true}))
    }
    function handleBlur(e, text){
        setFocusState(f => ({...f, [e]: false}))
        if(text !== ''){
            setEmpty(m => ({...m, [e]: true}))
            setSpace(s => ({...s, [e]: !spaceRegex.test(text)}))
            switch (e) {
                case 'id':

                    break;
                case 'pw':
                    setException(x => ({...x, [e]: pwRegex.test(text)}))
                    break;
                case 'pwConfirm':
                    setException(x => ({...x, [e]: info.pw === info.pwConfirm}));
                    break;
                case 'name':
                    setException(x => ({...x, [e]: nameRegex.test(text)}));
                    break;
                case 'email':
                    setException(x => ({...x, [e]: emailRegex.test(text)}));
                    break;
                case 'phone':
                    setException(x => ({...x, [e]: phoneRegex.test(text)}));
                    break;
                default:
                    break;
            }
        }else{
            setEmpty(m => ({...m, [e]: false}))
        }
    }

    // Empty 예외처리
    const [empty, setEmpty] = useState({
        id: true, pw: true, pwConfirm: true, name: true, email: true, phone: true
    })

    // 예외처리
    const [exception, setException] = useState({
        id: true, pw: true, pwConfirm: true, name: true, email: true, phone: true
    })

    // 공백 예외처리
    const [space, setSpace] = useState({
        id: true, pw: true, pwConfirm: true, name: true, email: true, phone: true
    })

    // Password 정규식
    // 영문 숫자 특수기호 조합 8자리 이상
    // let pwRegex = new RegExp('^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$')
    // 영문 숫자 조합 8자리 이상
    let pwRegex = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$')

    let nameRegex = new RegExp('^[가-힣]+$')

    // Email 정규식
    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$')

    // Phone 정규식
    let phoneRegex = new RegExp('^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})')

    // 공백 정규식
    let spaceRegex = new RegExp('\\s')

    // Form
    const handleSignUpPress = async () => {
        try {
            instance.put(`/login?id=${id}&pw=${pw}`)
        } catch (error) {
        }
    }

    return(
        <>
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <Text style={styles.loginLogo}>
                        -
                    </Text>
                    <Text style={styles.loginHead}>
                        회원가입
                    </Text>

                    <TextInput style={[styles.loginInput, focusState.id && styles.InputFocus]} placeholder="아이디" placeholderTextColor='gray'
                        value={info.id}
                        onChangeText={(text) => changeInfo('id', text)}
                        onFocus={() => handleFocus('id')}
                        onBlur={(e) => handleBlur('id', e.nativeEvent.text)}
                    />
                    {!empty.id ? (
                        <Text style={styles.errorText}>아이디를 입력해주세요</Text>
                    ) : !space.id &&
                        <Text style={styles.errorText}>아이디에 공백이 포함되어 있습니다</Text>
                    }

                    <TextInput style={[styles.loginInput, focusState.pw && styles.InputFocus]} placeholder="비밀번호" placeholderTextColor='gray'
                        value={info.pw}
                        onChangeText={(text) => changeInfo('pw', text)}
                        onFocus={() => handleFocus('pw')}
                        onBlur={(e) => handleBlur('pw', e.nativeEvent.text)}
                    />
                    {!empty.pw ? (
                        <Text style={styles.errorText}>비밀번호를 입력해주세요</Text>
                    ) : !space.pw ? (
                        <Text style={styles.errorText}>비밀번호에 공백이 포함되어 있습니다</Text>
                    ) : !exception.pw && <Text style={styles.errorText}>비밀번호는 영문/숫자를 포함한 8~15자 이내로 입력해야 합니다</Text>}

                    <TextInput style={[styles.loginInput, focusState.pwConfirm && styles.InputFocus]} placeholder="비밀번호 확인" placeholderTextColor='gray'
                        value={info.pwConfirm}
                        onChangeText={(text) => changeInfo('pwConfirm', text)}
                        onFocus={() => handleFocus('pwConfirm')}
                        onBlur={(e) => handleBlur('pwConfirm', e.nativeEvent.text)}
                    />
                    {!empty.pwConfirm ? (
                        <Text style={styles.errorText}>비밀번호를 입력해주세요.</Text>
                    ) : !space.pwConfirm ? (
                        <Text style={styles.errorText}>비밀번호에 공백이 포함되어 있습니다</Text>
                    ) : !exception.pwConfirm && <Text style={styles.errorText}>비밀번호가 틀립니다.</Text>}

                    <TextInput style={[styles.loginInput, focusState.name && styles.InputFocus]} placeholder="이름" placeholderTextColor='gray'
                        value={info.name}
                        onChangeText={(text) => changeInfo('name', text)}
                        onFocus={() => handleFocus('name')}
                        onBlur={(e) => handleBlur('name', e.nativeEvent.text)}
                    />
                    {!empty.name ? (
                        <Text style={styles.errorText}>이름을 입력해주세요.</Text>
                    ) : !space.name ? (
                        <Text style={styles.errorText}>이름에 공백이 포함되어 있습니다</Text>
                    ) : !exception.name && <Text style={styles.errorText}>특수문자,영어,숫자는 사용할수없습니다. 한글만 입력하여주세요.</Text>}

                    <TextInput style={[styles.loginInput, focusState.nickname && styles.InputFocus]} placeholder="이메일" placeholderTextColor='gray'
                        value={info.email}
                        onChangeText={(text) => changeInfo('email', text)}
                        onFocus={() => handleFocus('email')}
                        onBlur={(e) => handleBlur('email', e.nativeEvent.text)}
                    />
                    {!empty.email ? (
                        <Text style={styles.errorText}>이메일을 입력해주세요.</Text>
                    ) : !space.email ? (
                        <Text style={styles.errorText}>이메일에 공백이 포함되어 있습니다</Text>
                    ) : !exception.email && <Text style={styles.errorText}>이메일 형식에 따라 정확히 입력해주세요.</Text>}

                    <TextInput style={[styles.loginInput, focusState.phone && styles.InputFocus]} placeholder="전화번호" placeholderTextColor='gray'
                        value={info.phone}
                        onChangeText={(text) => changeInfo('phone', text)}
                        onFocus={() => handleFocus('phone')}
                        onBlur={(e) => handleBlur('phone', e.nativeEvent.text)}
                    />
                    {!empty.phone ? (
                        <Text style={styles.errorText}>전화번호를 입력해주세요.</Text>
                    ) : !space.phone ? (
                        <Text style={styles.errorText}>전화번호에 공백이 포함되어 있습니다</Text>
                    ) : !exception.phone && <Text style={styles.errorText}>전화번호는 숫자 10~11자 이내로 입력해야 합니다</Text>}

                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={handleSignUpPress}> {/*() => alert('d')*/}
                            <Text style={styles.loginBtnText}>회원가입</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBox: {
        // borderWidth: 1,
        // borderColor: 'blue',
        marginTop: '10%',
    },
    loginLogo:{
        margin: 'auto'
    },
    loginHead: {
        fontSize: '2em',
        fontWeight: '900',
        marginTop: '30px',
        marginBottom: '15px',
        margin: 'auto',
    },
    loginInput: {
        width: '270px',
        height: '40px',
        fontSize: '16px',
        padding: '10px',
        outlineStyle: 'none',
        borderColor: 'gray',
        marginLeft: '10px',
        marginRight: '10px',
        borderWidth: 1,
        borderRadius: '3px',
        marginTop: '15px',
    },
    InputFocus:{
        borderColor: 'black'
    },
    loginBtn:{
        marginTop: '30px',
        // borderColor: 'red',
        // borderWidth: 1,
        height: '40px',
        borderRadius: '3px',
        backgroundColor: '#808080',
    },
    loginBtnText: {
        textAlign: 'center',
        lineHeight: '40px',
        fontSize: '18px'
    },
    errorText:{
        color: 'red',
        marginLeft: '15px',
        marginTop: '5px',
        fontSize: '14px'
    }

})

export default SignUp
