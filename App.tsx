import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import 
{ StyleSheet, 
  Text, 
  View, 
  Button, 
  Modal 
} from 'react-native';
import OpenModal from './src/modal/OpenModal';

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={modal && styles.hidden}>
        <Text style={styles.text}>QrCode</Text>
        <StatusBar style="auto" />
        <Button
        onPress={() => setModal(true)}
        title='Ler QrCode'/>
      </View>
      <Modal
        visible={modal}
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        <OpenModal/>
        <View style={styles.button}>
          <Button
          onPress={() => setModal(false)}
          title='Cancelar escaneamento'
          />
        </View>
      </Modal>
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

  text: {
    fontSize: 30,
    marginBottom: 20,
  },

  modal: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  hidden: {
    display: 'none',
  },
  button:{
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
  }
});



