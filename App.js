import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Incremento from './src/components/Incremento';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/favicon.png')} />
      <TextInput style={styles.txtInput} placeholder='Digite Seu Email' />
      <Button title='ENTRAR' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInput: {
    width: '60%',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
