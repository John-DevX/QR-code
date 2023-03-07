import React, {useState} from 'react';
import 
{ View, 
  Text,  
  StyleSheet,
  Share,
  Button
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
          <Text style={styles.text}>Barra de Qrcode com tipo: {type}</Text>
          <Text style={styles.text}>Dados: {data}</Text>
          <View style={styles.share}>
            <Button
            title='Compartilhar'
            onPress={share}
            />
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
  qrcode:{
    marginBottom: 400
  },

  share: {
    marginTop: 20,
  }

})
