import React, {useState} from 'react';
import 
{ View, 
  Text,  
  StyleSheet,
  Share,
  Button,
  TouchableOpacity
  } from 'react-native';

import Qrcode from '../components/Qrcode';
export default function OpenModal() {
  const [type, setType] = useState('');
  const [data, setData] = useState('');
  const code = ({data, type} :any) => {
    setType(type);
    setData(data);
  }

  const share = () => {
    Share.share({
      message: data.toString(),
    })
  }

  return (
    <View>
        <View style={styles.data}>
          <Text style={styles.text}>Barra de QR Code com tipo: {type}</Text>
          <Text style={styles.text}>Dados: {data}</Text>
          <View style={styles.shareContainer}>
            <TouchableOpacity 
            style={styles.share}
            onPress={share}>
              <Text style={styles.titleBtn}>Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.qrcode}>
          <Qrcode code={code}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  data: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },

  text:{
    fontSize: 18,
    fontWeight: 'bold',
  },

  titleBtn: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  qrcode:{
    marginBottom: 400
  },

  shareContainer: {
    marginTop: 20,
  },

  share: {
    backgroundColor: '#1E90FF',
    width: 150,
    borderRadius: 4,
    paddingTop: 8,
    paddingBottom: 8,
  }

})
