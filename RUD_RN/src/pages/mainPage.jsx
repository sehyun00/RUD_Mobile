import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import HeaderComponent from '../components/headerComponent';

const MainPage = ({ onLogout }) => {
    return (
        <View style={styles.container}>
            <HeaderComponent />
            <View style={styles.content}>
                <Text style={styles.title}>환영합니다!</Text>
                <Text style={styles.subtitle}>메인 페이지에 오신 것을 환영합니다.</Text>
                <Button title="로그아웃" onPress={onLogout} color="#841584" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0, // 상태 표시줄 높이 고려
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default MainPage;
