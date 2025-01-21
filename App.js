import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Configuration from './components/tabmenu';

const alcat = require('./assets/alcat.png');
const logotipo = require('./assets/lightcat.png')


export default function App() {

  const productostem = [
    {
      "id": 1,
      "type": "mueble",
      "name": "Árbol Rascador para Gatos con Plataforma Torre Escalador",
      "image": "https://m.media-amazon.com/images/I/81pLdodW5BL._AC_SX679_.jpg",
      "size": "49 x 49 x 138.5 cm",
      "price": 52.99,
      "rate": 4,
      "description": "Materiales selectos: Construido con tablero de partículas robusto y sólido con certificación E1, tejido de terciopelo y sisal resistente, el árbol para gatos ofrece la estabilidad y seguridad para que sus felinos disfruten de horas de juego y descanso."
    },
    {
      "id": 2,
      "type": "mueble",
      "name": "Casa para gato plegable",
      "image": "https://m.media-amazon.com/images/I/61+PwCU2HbL._AC_SY300_SX300_.jpg",
      "size": "38 x 38 x 43 cm",
      "price": 37.98,
      "rate": 4,
      "description": "La casa para gato en forma de cubo ofrece a tu minino un lugar divertido y relajante para descansar, esconderse y jugar. Laterales y parte inferior de ante; parte superior de sherpa agradable con borde elevado de ante suave para mejorar la estructura y la comodidad."
    },
    {
      "id": 3,
      "type": "mueble",
      "name": "Escalera Rascador Para Gatos",
      "image": "https://m.media-amazon.com/images/I/613A-GDAJUL._AC_SX679_.jpg",
      "size": "147,3l. cm",
      "price": 17.99,
      "rate": 4,
      "description": "4 Escalones Resistentes:Soportan hasta 8kg, los escalones tienen cuerdas, perfectas para que tu gato trepe, arañe y se mantenga activo. ¡Proporcionan el agarre ideal para que se sienta seguro en cada movimiento!   Proporciona a tu gato el ambiente perfecto con estos accesorios de muebles para gatos en casa."
    },
    {
      "id": 4,
      "type": "mueble",
      "name": "Arenero para Dos Gatos Grandes Madera con Puerta",
      "image": "https://m.media-amazon.com/images/I/71CC9CSrYNL._AC_SX425_.jpg",
      "size": "75,5 x 51 x 52,5 cm",
      "price": 79.99,
      "rate": 4,
      "description": "La casa para gato en forma de cubo ofrece a tu minino un lugar divertido y relajante para descansar, esconderse y jugar. Laterales y parte inferior de ante; parte superior de sherpa agradable con borde elevado de ante suave para mejorar la estructura y la comodidad."
    },
    {
      "id": 5,
      "type": "juguete",
      "name": "Pez de Simulación de Felpa Móvil con Carga USB",
      "image": "https://m.media-amazon.com/images/I/61+PwCU2HbL._AC_SY300_SX300_.jpg",
      "price": 14.99,
      "rate": 4,
      "description": "Un juguete interactivo para gatos con sensor táctil incorporado. Se mueve y hace un sonido cuando sus gatos golpean al pez en su vientre, lo que mantiene a sus gatos enfocados en el juguete y sacando toda esa energía. Se 'duerme' después de un tiempo y solo se activa cuando se toca."
    },
    {
      "id": 6,
      "type": "juguete",
      "name": "Juguetes para Gatos Pez",
      "image": "https://m.media-amazon.com/images/I/81hUA0rFo3L.__AC_SX300_SY300_QL70_ML2_.jpg",
      "price": 8.35,
      "description": "Atrae la atención: La forma del pez y el relleno de hierba gatera atraerán sin duda la atención del gato y lo mantendrán concentrado mientras juega. Proporcionan estimulación: Los rellenos de hierba gatera de los juguetes emiten un tentador aroma que estimula los sentidos del gato y fomenta el juego activo."
    },
    {
      "id": 7,
      "type": "juguete",
      "name": "Juguete con Hierba gatera",
      "image": "https://m.media-amazon.com/images/I/619aUuA1OVL._AC_SX425_.jpg",
      "price": 12.99,
      "rate": 3,
      "description": "Atrae la atención: La forma del pez y el relleno de hierba gatera atraerán sin duda la atención del gato y lo mantendrán concentrado mientras juega. Proporcionan estimulación: Los rellenos de hierba gatera de los juguetes emiten un tentador aroma que estimula los sentidos del gato y fomenta el juego activo."
    },
    {
      "id": 8,
      "type": "juguete",
      "name": "Palitos para Masticar Gato Juguete",
      "image": "https://m.media-amazon.com/images/I/717uSKc7DAL._AC_SX425_.jpg",
      "price": 6.99,
      "rate": 4,
      "description": "El paquete incluye 4 palitos masticables para gatos, cada palito de pasto para gatos mide 22 cm de largo. Hecho de sustancias vegetales naturales, hace que su gato esté más saludable y dure más. Mantenga a los gatitos felices y frescos."
    }
  ]

  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
        <View style={styles.tabmenu}>
          <Image source={logotipo} style={{ width: 300, height: 90 }} />
          <Configuration/>
        </View>

        <View style={{flexDirection:"row", width: "100%"}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ width: "100%"}} >
          {productostem.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={{ width: 160, height: 200, resizeMode: "contain" }} />
              <SafeAreaView>
                <Text>{item.name}</Text>
                <Text>Precio: ${item.price}</Text>
              </SafeAreaView>
              
            </View>
          ))}
        </ScrollView>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 12,
  },
  card: {
    width: 500,
    height: 280,
    padding: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  tabmenu: {
    backgroundColor: '#ff972f',
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
});
