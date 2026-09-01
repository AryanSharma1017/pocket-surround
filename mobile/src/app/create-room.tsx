import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function CreateRoomScreen() {

    const [roomCode, setRoomCode] = useState('');

    function generateRoomCode() {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

        let randomCode = '';

        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            const randomCharacter = characters[randomIndex];

            randomCode += randomCharacter;
        }
        return randomCode;
    }

    function handleCreateRoom() {
        const newCode = generateRoomCode();

        setRoomCode(newCode);

    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a Room</Text>

            <Text style={styles.subtitle}>
                Start a listening room and invite your friends to join.
            </Text>

            {roomCode === '' ? (
                <Pressable
                    style={styles.button}
                    onPress={handleCreateRoom}
                >
                    <Text style={styles.buttonText}>Create Room</Text>
                </Pressable>
            ) : (
                <View style={styles.roomContainer}>
                    <Text style={styles.roomLabel}>Your Room Code</Text>

                    <Text style={styles.roomCode}>
                        {roomCode}
                    </Text>

                    <Text style={styles.shareText}>
                        Share this code with your friends so they can join your room.
                    </Text>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Start Listening</Text>
                    </Pressable>
                </View>
            )}
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

    roomContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    roomLabel: {
        color: '#A1A1AA',
        fontSize: 15,
        marginBottom: 12,
    },

    roomCode: {
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: '700',
        letterSpacing: 6,
        marginBottom: 20,
    },

    shareText: {
        color: '#A1A1AA',
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
        marginBottom: 32,
    },

    button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 18,
        borderRadius: 14,
        alignItems: 'center',
        width: '100%',
    },

    buttonText: {
        color: '#111111',
        fontSize: 17,
        fontWeight: '700',
    },
});