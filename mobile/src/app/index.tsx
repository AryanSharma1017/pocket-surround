import { StyleSheet, View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { supabase } from '@/lib/supabse';

export default function HomeScreen() {

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.hero}>

        <Text style={styles.title}>Pocket Surround</Text>

        <Text style={styles.subtitle}>
          Turn multiple phones into one synchronized speaker system.
        </Text>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.primaryButton}
          onPress={() => router.push('/create-room')}>
          <Text style={styles.primaryButtonText}>Create Room</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton}
          onPress={() => router.push('/join-room')}>
          <Text style={styles.secondaryButtonText}>Join Room</Text>
        </Pressable>
      </View>

      <View style={styles.status}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>Ready</Text>
      </View>

      <Pressable style = {styles.primaryButton} onPress={handleLogout}>
        <Text style={styles.primaryButtonText}> Log Out </Text>
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 60,
  },

  hero: {
    alignItems: 'center',
  },

  icon: {
    fontSize: 72,
    marginBottom: 24,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 16,
  },

  subtitle: {
    color: '#A1A1AA',
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 25,
    maxWidth: 320,
  },

  actions: {
    gap: 16,
  },

  primaryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#111111',
    fontSize: 17,
    fontWeight: '700',
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: '#3F3F46',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },

  status: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E',
  },

  statusText: {
    color: '#71717A',
    fontSize: 14,
  },
});