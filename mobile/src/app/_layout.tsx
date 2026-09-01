import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { StackTitle } from 'expo-router/build/layouts/stack-utils';

import { useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { supabase } from '@/lib/supabse';
import type { Session } from '@supabase/supabase-js';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    const inAuthScreen = segments[0] === 'login' || segments[0] === 'signup';

    if (!session && !inAuthScreen) {
      router.replace('/login');
    }

    if (session && inAuthScreen) {
      router.replace('/');
    }
  }, [session, loading, segments]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="create-room" options={{ title: "Create Room", }} />
        <Stack.Screen name="join-room" options={{ title: "Join Room", }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
      </Stack>
    </ThemeProvider>
  );
}
