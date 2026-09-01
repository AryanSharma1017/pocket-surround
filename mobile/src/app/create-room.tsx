import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function CreateRoomScreen() {

    const [roomCode, setRoomCode] = useState('');
    const [roomLink, setRoomLink] = useState('');

    async function handleCopyLink() {
        await Clipboard.setStringAsync(roomLink);
    }

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
        const newLink = `pocketsurround://join/${newCode}`;

        setRoomCode(newCode);
        setRoomLink(newLink)

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

                    <Text style={styles.roomLink}>
                        {roomLink}
                    </Text>

                    <Pressable
                        style={styles.copyButton}
                        onPress={handleCopyLink}
                    >
                        <Text style={styles.copyButtonText}>Copy Link</Text>
                    </Pressable>

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

    roomLink: {
        color: '#007bee',
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 6,
        marginBottom: 20,
    },

    copyButton: {
        borderWidth: 1,
        borderColor: '#3F3F46',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 32,
    },

    copyButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
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