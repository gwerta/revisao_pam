import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import dog from '../Revisao/assets/casual_dog.png';
import google from '../Revisao/assets/Google.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={dog} style={styles.imgDog} />
      <Text style={styles.dia}>Ótimo dia!</Text>
      <Text style={styles.como}>Como deseja acessar?</Text>

      <Pressable style={({ pressed }) => [
        styles.googleBtn,
        { backgroundColor: pressed ? '#56c67a' : '#72cf90' }
      ]}>
        <View style={styles.googleView}>
          <Image
          source={google}
          style={styles.googleImg}
          resizeMode="contain"
        />
          <Text style={styles.googleText}>Como deseja acessar?</Text>
        </View>
      </Pressable>

      <Pressable style={styles.outrosBtn}>
        <Text style={styles.outrosText}>Outras opções</Text>
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
  imgDog: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  dia: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#555555',
    marginTop: 10,
    textAlign: 'center',
  },
  como: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#6d6d6d',
    marginBottom: 25,
    textAlign: 'center',
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    width: 350,
    height: 55,
    marginBottom: 15,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  googleView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  googleImg: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  googleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    paddingRight: 33,
    flex: 1,
  },
  outrosBtn: {
    width: 350,
    height: 55,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#72cf90',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  outrosText: {
    color: '#6d6d6d',
    fontWeight: 'bold',
    fontSize: 16,
  },
});