import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import Configuration from '../components/tabmenu';
import ObjectStyleSheet from '../components/ObjectView';
const logotipo = require('../assets/lightcat.png')

export default function Home() {
  const productostem = [
    {
      id: 1,
      type: "mueble",
      name: "Árbol Rascador para Gatos con Plataforma Torre Escalador",
      image: require('./libimg/cat1.jpg'),
      size: "49 x 49 x 138.5 cm",
      price: 52.99,
      rate: 4,
      description: "Materiales selectos: Construido con tablero de partículas robusto y sólido con certificación E1, tejido de terciopelo y sisal resistente, el árbol para gatos ofrece la estabilidad y seguridad para que sus felinos disfruten de horas de juego y descanso."
    },
    {
      id: 2,
      type: "mueble",
      name: "Casa para gato plegable",
      image: require('./libimg/cat2.jpg'),
      size: "38 x 38 x 43 cm",
      price: 37.98,
      rate: 4,
      description: "La casa para gato en forma de cubo ofrece a tu minino un lugar divertido y relajante para descansar, esconderse y jugar. Laterales y parte inferior de ante; parte superior de sherpa agradable con borde elevado de ante suave para mejorar la estructura y la comodidad."
    },
    {
      id: 3,
      type: "mueble",
      name: "Escalera Rascador Para Gatos",
      image: require('./libimg/cat3.jpg'),
      size: "147,3l. cm",
      price: 17.99,
      rate: 4,
      description: "4 Escalones Resistentes:Soportan hasta 8kg, los escalones tienen cuerdas, perfectas para que tu gato trepe, arañe y se mantenga activo. ¡Proporcionan el agarre ideal para que se sienta seguro en cada movimiento!   Proporciona a tu gato el ambiente perfecto con estos accesorios de muebles para gatos en casa."
    },
    {
      id: 4,
      type: "mueble",
      name: "Arenero para Dos Gatos Grandes Madera con Puerta",
      image: require('./libimg/cat4.jpg'),
      size: "75,5 x 51 x 52,5 cm",
      price: 79.99,
      rate: 4,
      description: "La casa para gato en forma de cubo ofrece a tu minino un lugar divertido y relajante para descansar, esconderse y jugar. Laterales y parte inferior de ante; parte superior de sherpa agradable con borde elevado de ante suave para mejorar la estructura y la comodidad."
    },
    {
      id: 5,
      type: "juguete",
      name: "Pez de Simulación de Felpa Móvil con Carga USB",
      image: require('./libimg/cat5.jpg'),
      price: 14.99,
      rate: 4,
      description: "Un juguete interactivo para gatos con sensor táctil incorporado. Se mueve y hace un sonido cuando sus gatos golpean al pez en su vientre, lo que mantiene a sus gatos enfocados en el juguete y sacando toda esa energía. Se 'duerme' después de un tiempo y solo se activa cuando se toca."
    },
    {
      id: 6,
      type: "juguete",
      name: "Juguetes para Gatos Pez",
      image: require('./libimg/cat6.jpg'),
      price: 8.35,
      rate: 3,
      description: "Atrae la atención: La forma del pez y el relleno de hierba gatera atraerán sin duda la atención del gato y lo mantendrán concentrado mientras juega. Proporcionan estimulación: Los rellenos de hierba gatera de los juguetes emiten un tentador aroma que estimula los sentidos del gato y fomenta el juego activo."
    },
    {
      id: 7,
      type: "juguete",
      name: "Juguete con Hierba gatera",
      image: require('./libimg/cat7.jpg'),
      price: 12.99,
      rate: 3,
      description: "Atrae la atención: La forma del pez y el relleno de hierba gatera atraerán sin duda la atención del gato y lo mantendrán concentrado mientras juega. Proporcionan estimulación: Los rellenos de hierba gatera de los juguetes emiten un tentador aroma que estimula los sentidos del gato y fomenta el juego activo."
    },
    {
      id: 8,
      type: "juguete",
      name: "Palitos para Masticar Gato Juguete",
      image: require('./libimg/cat8.jpg'),
      price: 6.99,
      rate: 4,
      description: "El paquete incluye 4 palitos masticables para gatos, cada palito de pasto para gatos mide 22 cm de largo. Hecho de sustancias vegetales naturales, hace que su gato esté más saludable y dure más. Mantenga a los gatitos felices y frescos."
    }
  ]

  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
          <StatusBar style='light'/>
          
          <View style={styles.tabmenu}>
            <Image source={logotipo} style={{ width: 300, height: 90 }} />
            <Configuration/>
          </View>

          <View style={styles.scrollerFocus} >
            {productostem.map((item) => (
              <ObjectStyleSheet key={uuidv4()} item={item}/>
            ))}
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
    width: "100%",
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
  tabmenu: {
    backgroundColor: '#ff972f',
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  scrollerFocus: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingVertical: 10,
    backgroundColor: '#fff',
    overflow: "scroll",
    width: "100%",
  },
});