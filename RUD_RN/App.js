import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './src/pages/Login_Signup/loginPage'; // LoginPage 컴포넌트 임포트
import MainPage from './src/pages/mainPage';   // MainPage 컴포넌트 임포트

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <View style={styles.container}>
            {isLoggedIn ? (
                <MainPage onLogout={handleLogout} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center', // 중앙 정렬 해제
        // justifyContent: 'center', // 중앙 정렬 해제
    },
});
