import 
  React, 
{ useState, 
  useEffect 
} from 'react';

import 
{ 
  View, 
  StyleSheet, 
  Button,
  Vibration 
} from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
export default function Qrcode({code}:any) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () :Promise<void> => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
        getBarCodeScannerPermissions();
      }, []);

       const handleBarCodeScanned = ({ type, data } :any) => {
        setScanned(true); 
        code({type, data})  
        Vibration.vibrate(1000);
      };

      if (hasPermission === null) 
      {
        return <View style={styles.containerBtn}><Button title='Dê as permissões da câmera.'/></View>;
      }
      if (hasPermission === false) 
      {
        return <View style={styles.containerBtn}><Button title='Sem acesso a câmera.'/></View>;
      }

      return (
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && <Button title={'toque para escanear novamente'} onPress={() => setScanned(false)} />}
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
          width:'100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerBtn: {
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
        }
      });
      