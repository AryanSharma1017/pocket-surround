import { StyleSheet, View, Text, Alert, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function JoinRoomScreen() {

    const [roomCode, setRoomCode] = useState('');
    const [error, setError] = useState('');

    function handleJoinRoom() {
        const cleanedCode = roomCode.trim().toUpperCase();

        if (cleanedCode === '') {
            setError('Please enter a room code.')
            return;
        }

        console.log(cleanedCode);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Join Room</Text>

            <Text style={styles.subtitle}>
                Enter room code.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="     "
                value={roomCode}
                onChangeText={(text) => {
                    setRoomCode(text);
                    setError('');
                }}
            />

            {error !== '' && (
                <Text style={styles.errorText}>
                    {error}
                </Text>
            )}

            <Pressable
                style={styles.button} onPress={handleJoinRoom}>
                <Text style={styles.buttonText}>Join Room</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
        padding: 24,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: '700',
        marginTop: 40,
        marginBottom: 12,
    },

    subtitle: {
        color: '#A1A1AA',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 32,
    },

    input: {

        borderWidth: 1,
        borderColor: '#3F3F46',
        borderRadius: 14,
        paddingHorizontal: 18,
        paddingVertical: 16,
        color: '#FFFFFF',
        fontSize: 18,
        marginBottom: 16,
    },

    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 18,
        borderRadius: 14,
        alignItems: 'center',
    },

    buttonText: {
        color: '#111111',
        fontSize: 17,
        fontWeight: '700',
    },


    errorText: {

        color: '#EF4444',
        fontSize: 14,
        marginBottom: 16,

    }

});
