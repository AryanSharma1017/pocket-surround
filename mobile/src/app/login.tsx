import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { supabase } from '@/lib/supabse';

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    async function handleLogin() {
        const { error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
        });

        if (error) {
            console.log(error.message);
            return;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Pocket Surround</Text>

            <Text style={styles.subtitle}>
                Sign in to create or join a listening room.
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

            <Pressable style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </Pressable>

            <Pressable style={styles.signupButton} onPress={() => router.push('/signup')}>
                <Text style={styles.signupButtonText}>
                    Don't have an account? Sign Up
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

    loginButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 17,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },

    loginButtonText: {
        color: '#111111',
        fontSize: 16,
        fontWeight: '700',
    },

    signupButton: {
        paddingVertical: 18,
        alignItems: 'center',
    },

    signupButtonText: {
        color: '#A1A1AA',
        fontSize: 15,
    },
});