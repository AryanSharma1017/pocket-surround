import { StyleSheet, Text, View } from 'react-native';

export default function CreateRoomScreen() {

    function generateRoomCode() {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

        const randomIndex = Math.floor(Math.random() * characters.length);

        const randomCharacter = characters[randomIndex];
        return randomCharacter;
    } 

    console.log(generateRoomCode());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Room</Text>

      <Text style={styles.subtitle}>
        Your listening room will be created here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    color: '#A1A1AA',
  },
});