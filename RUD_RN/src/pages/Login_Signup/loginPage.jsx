import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 간단한 로그인 로직 (예: 이메일과 비밀번호 확인)
        if (email && password) {
            onLogin(); // 로그인 성공 시 호출
        } else {
            alert('이메일과 비밀번호를 입력하세요.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>로그인 페이지</Text>
            <TextInput
                style={styles.input}
                placeholder="이메일"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="비밀번호"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="로그인" onPress={handleLogin} color="#841584" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default LoginPage;
