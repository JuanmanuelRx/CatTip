import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { getProductCat } from './lib/productos';

const logotipo = require('./assets/lightcat.png')
const user = require('./icons/perfil.png');
const carrito = require('./icons/carrito.png');

export default function App() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      getProductCat().then((productos) =>{
        setProductos(productos);
      });
    }, []);
    const lecturaObj = [
      {
          "id": 1,
          "name": "Árbol Rascador para Gatos con Plataforma Torre Escalador",
          "image": "https://m.media-amazon.com/images/I/81pLdodW5BL._AC_SX679_.jpg",
          "size": "49 x 49 x 138.5 cm",
          "quantity": 1,
          "price": 52.99,
          "rate": 4,
          "description": "Materiales selectos: Construido con tablero de partículas robusto y sólido con certificación E1, tejido de terciopelo y sisal resistente, el árbol para gatos ofrece la estabilidad y seguridad para que sus felinos disfruten de horas de juego y descanso.    Aspecto encantador: El tejido de terciopelo suave y la divertida disposición hacen que esta torre para gatos parezca un parque único. También le encantará el borde en forma de las orejas de gato de la percha superior, dando un toque de ternura.    Para cada salto seguro: La base de 48 × 48 cm y los postes robustos dan mejor apoyo y estabilidad a este árbol rascador para gatos. Viene con una correa antivuelco para fijar el árbol a la pared y permitir que los gatos salten con seguridad.   Apto para varios gatitos: El árbol para gatos de varios niveles tiene suficientes plataformas, percas y escondites, diseñados para que 2 o 3 gatitos jueguen al mismo tiempo, de modo que cada gato pueda encontrar su lugar favorito.  Para la salud de ambos: Este árbol para gatos está fabricado con madera certificada FSC y con certificación EU E1 para proteger la salud de humanos y gatos"
      },
      {
          "id": 2,
          "name": "Casa para gato plegable",
          "image": "https://m.media-amazon.com/images/I/61+PwCU2HbL._AC_SY300_SX300_.jpg",
          "size": "38 x 38 x 43 cm",
          "quantity": 1,
          "price": 37.98,
          "rate": 4,
          "description": "La casa para gato en forma de cubo ofrece a tu minino un lugar divertido y relajante para descansar, esconderse y jugar.    Laterales y parte inferior de ante; parte superior de sherpa agradable con borde elevado de ante suave para mejorar la estructura y la comodidad.   Espacio interior para esconderse parecido a una madriguera para siestas; orificios circulares para fomentar el juego interactivo.   Fácil de montar; diseño plegable para ahorrar espacio; se limpia con un trapo; el color X elegante conjunta bien con casi cualquier decoración"
      }
  ]
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.tabmenu}>
          <Image source={logotipo} style={{width: 300, height: 90 }}/>
          <Image source={user} style={{width: 90, height: 90, marginLeft: 150 }}/>
          <Image source={carrito} style={{width: 90, height: 90 }}/>
        </View>
        {lecturaObj.map((item) => (
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
  },
  tabmenu: {
    backgroundColor: '#ff8000', 
    width: "100%",
    flexDirection: "row"
  },
});
