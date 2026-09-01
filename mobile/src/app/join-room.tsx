import { StyleSheet, View, Text, Alert, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function JoinRoomScreen() {

    const [roomCode, setRoomCode] = useState('');
    const [error, setError] = useState('');
    const [permission, requestPermission] = useCameraPermissions();
    const [isScanning, setIsScanning] = useState(false);


    function handleJoinRoom() {
        const cleanedCode = roomCode.trim().toUpperCase();

        if (cleanedCode === '') {
            setError('Please enter a room code.')
            return;
        }

        console.log(cleanedCode);
    }

    async function handleScanQRCode() {
        if (!permission?.granted) {
            const result = await requestPermission();

            if (!result.granted) {
                return;
            }
        }

        setIsScanning(true);
    }

    function handleBarcodeScanned({ data }: { data: string }) {
        const scannedRoomCode = data.replace(
            'pocketsurround://join/',
            ''
        );

        setRoomCode(scannedRoomCode);
        setIsScanning(false);
    }

    return isScanning ? (

        <CameraView
            style={styles.camera}
            facing="back"
            barcodeScannerSettings={{
                barcodeTypes: ['qr'],
            }
            }
            onBarcodeScanned={handleBarcodeScanned}
        />

    ) : (
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

            <Pressable
                style={styles.scanButton}
                onPress={handleScanQRCode}
            >
                <Text style={styles.scanButtonText}>
                    Scan QR Code
                </Text>
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

    scanButton: {
        borderWidth: 1,
        borderColor: '#3F3F46',
        paddingVertical: 16,
        borderRadius: 14,
        alignItems: 'center',
        marginTop: 12,
    },

    scanButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
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

    },

    camera: {
        flex: 1,
    },

});
