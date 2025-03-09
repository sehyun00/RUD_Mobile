import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const HeaderComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SMS</Text>
            <Text style={styles.settings}>설정</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15, // 왼쪽과 오른쪽 패딩 추가
        backgroundColor: '#f8f8f8',
        elevation: 2, // 안드로이드에서 그림자 효과
        shadowColor: '#000', // iOS에서 그림자 효과
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        width: '100%',
        position: 'absolute',
        top: StatusBar.currentHeight ? StatusBar.currentHeight : 0, // 상태 표시줄 높이 고려
        zIndex: 1000,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    settings: {
        fontSize: 16,
    },
});

export default HeaderComponent;
