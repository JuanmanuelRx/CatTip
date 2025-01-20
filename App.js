import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { getProductCat } from './lib/productos';

const logotipo = require('./assets/lightcat.png')
const user = require('./icons/perfil.png');
const carrito = require('./carrito-de-compras.png');

export default function App() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      getProductCat().then((productos) =>{
        setProductos(productos);
      });
    }, []);
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={{ backgroundColor: '#ff8000' }}>
          <Image source={logotipo} style={{width: 300, height: 90 }}/>
          <Image source={user} style={{width: 90, height: 90, paddingLeft: 50 }}/>
          <Image source={carrito} style={{width: 90, height: 90, paddingRight: 10 }}/>
        </View>
        {productos.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%' }} />
              <Text>{item.name}</Text>
              <Text>Precio: ${item.price}</Text>
            </View>
          ))}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  card: {
    width: 200,
    height: 200,
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  }
});
