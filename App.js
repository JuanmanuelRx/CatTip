import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { getProductCat } from './model/productos';
// import { scrollProductCat } from './view/scrollerPC.js';

export default function App() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      getProductCat().then((productos) =>{
        setProductos(productos);
      });
    }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {
        productos.map((product) => (
          <View key={product.id}  style={ styles.card }>
            <Image 
            source= {{ uri: product.image }}
            style={{ width: 200, height: 200, padding: 5 }}
            />
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        ))
      }
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
  card: {
    width: 200,
    height: 200,
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  }
});
