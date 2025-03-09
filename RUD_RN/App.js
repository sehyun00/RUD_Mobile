import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    const handlePress = () => {
        alert('버튼이 눌렸습니다!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>안녕하세요, RUD Mobile!</Text>
            <Text style={styles.subtitle}>Open up App.js to start working on your app!</Text>
            <Button title="클릭하세요" onPress={handlePress} color="#841584" />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
