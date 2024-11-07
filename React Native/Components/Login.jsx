import React, { useState, useRef } from 'react';
import { View, Text, TextInput ,StyleSheet, TouchableOpacity, Alert } from 'react-native-web';

const Login = () => {

    const [id, setId] = useState("")
    const [pw, setPw] = useState("")
    const [isIdFocused, setIsIdFocused] = useState(false)
    const [isPwFocused, setIsPwFocused] = useState(false)
    function handleIdFocus(){
        setIsIdFocused(true)
    }
    function handleIdBlur(){
        setIsIdFocused(false)
    }
    function handlePwFocus(){
        setIsPwFocused(true)
    }
    function handlePwBlur(){
        setIsPwFocused(false)
    }
    const handleLoginPress = async () => {
        try {
            const response = await fetch('http://localhost:8080/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `id=${id}&pw=${pw}`,
            });
            console.log('a');
        } catch (error) {
            console.log('b');
        }
    }

    return(
        <>
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <View style={styles.loginLogo}>
                        -
                    </View>
                    <View style={styles.loginHead}>
                        Login
                    </View>
                    <TextInput style={[styles.loginInput, isIdFocused && styles.InputFocus]} placeholder="아이디" placeholderTextColor='gray' value={id} onChangeText={id => setId(id)} onFocus={handleIdFocus} onBlur={handleIdBlur}></TextInput>
                    
                    <TextInput style={[styles.loginInput, isPwFocused && styles.InputFocus]} placeholder="비밀번호" placeholderTextColor='gray' value={pw} onChangeText={pw => setPw(pw)} onFocus={handlePwFocus} onBlur={handlePwBlur}></TextInput>

                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={handleLoginPress}> {/*() => alert('d')*/}
                            <Text style={styles.loginBtnText}>로그인</Text>
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
        marginTop: '15%',
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
        width: '250px',
        height: '40px',
        fontSize: '16px',
        padding: '10px',
        outlineStyle: 'none',
        borderColor: 'gray',
        marginLeft: '10px',
        marginRight: '10px',
        borderWidth: 1,
        borderRadius: '3px',
        marginTop: '25px',
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
    }

})

export default Login
