import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import 
{ StyleSheet, 
  Text, 
  View, 
  Button, 
  Modal,
  TouchableOpacity 
} from 'react-native';
import OpenModal from './src/modal/OpenModal';

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={modal && styles.hidden}>
        <Text style={styles.title}>QR Code</Text>
        <StatusBar style="auto" />
        <TouchableOpacity
        style={styles.button}
        onPress={() => setModal(true)}
        >
          <Text style={styles.textBtn}>Ler QR Code</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modal}
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        <OpenModal/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
           style={styles.button}
           onPress={() => setModal(false)}
        >
          <Text style={styles.textBtn}>Cancelar Escaneamento</Text>
        </TouchableOpacity>
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

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },

  textBtn: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },

  modal: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  hidden: {
    display: 'none',
  },

  button: {
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },

  buttonContainer:{
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
  }
});



