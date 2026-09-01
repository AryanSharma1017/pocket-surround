import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create your account</Text>

            <Text style={styles.subtitle}>
                Sign up to create and join listening rooms.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#71717A"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#71717A"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Pressable style={styles.signupButton}>
                <Text style={styles.signupButtonText}>
                    Create Account
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
        justifyContent: 'center',
    },

    title: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 12,
    },

    subtitle: {
        color: '#A1A1AA',
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 32,
    },

    input: {
        backgroundColor: '#1F1F1F',
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#3F3F46',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 16,
        marginBottom: 14,
    },

    signupButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 17,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },

    signupButtonText: {
        color: '#111111',
        fontSize: 16,
        fontWeight: '700',
    },
});