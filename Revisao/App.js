import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import dog from '../Revisao/assets/casual_dog.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={dog}
      /> 
      <Text style={styles.dia}>Ótimo dia!</Text>
      <Text style={styles.como}> Como deseja acessar? </Text>

      <Pressable
      style={({ pressed }) => ({
      backgroundColor: pressed ? '#56c67a' : '#72cf90',
      padding: 10,
      borderRadius: 8,
      width: 350,
      height: 80,
  })}>
      <Text style={
        {color: 'white',
        textAlign: 'center',
          display: 'flex',
        }
      }> Como deseja acessar? </Text>
      </Pressable>
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
  dia: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#555555',
    marginTop: 20,
  },
  como: {
    fontSize: 13,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#6d6d6d',
  },
});
