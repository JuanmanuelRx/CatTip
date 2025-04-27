import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import ObjectStyleSheet from './screens/ObjectView';
import TabMenu from './components/tabmenu';

export default function App() {
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
    },
    {
      id: 9,
      type: "higiene",
      name: "Quitapelos y Rodillos para Mascotas",
      image: require('./libimg/cat9.jpg'),
      price: 15.19,
      rate: 4,
      description: "l rodillo quitapelos mascotas tiene una fuerza de vellón muy efectiva y está hecho de un semi rodillo recubierto con un material de carga estática. Solo un par de pases pueden recolectar más pelos de todas partes que el limpiador de alfombras."
    },
    {
      id: 10,
      type: "higiene",
      name: "Arenero Autolimpiable para Gatos",
      image: require('./libimg/cat10.jpg'),
      price: 509.00,
      rate: 4,
      description: "El arenero PETKIT Pura Max 2 incluye sensores de calor, infrarrojos, peso y antipellizcos, junto con detección inteligente, alarma remota y un sistema de prevención de accidentes. Recomendado para gatos de 2 kg a 8 kg. No apto para gatos menores de 6 meses."
    },
    {
      id: 11,
      type: "higiene",
      name: "Champú en seco Aceite de argán para Gatos",
      image: require('./libimg/cat11.jpg'),
      price: 30.99,
      rate: 3,
      description: "El champú en seco Aceite de argán para gatos es un champú de alta calidad que asegura una limpieza satisfactoria y una sabor fresco. El aceite de argán es un producto natural que proporciona un sabor fresco y una textura lisa. El champú se puede tomar en cualquier lugar de la casa o en la cama."
    },
    {
      id: 12,
      type: "higiene",
      name: "Toallitas Higiene para Perro y Gato, Musgo Blanco Aloe",
      image: require('./libimg/cat12.jpg'),
      price: 30.99,
      rate: 3,
      description: "El paquete puede variar. 40 Toallitas por Bolsa. LO MEJOR PARA EL CUIDADO DE TU MASCOTA : Producto especialmente destinado para cuidar a las mascotas. Fragancia: Musgo Blanco y Aloe Vera. Este producto ha sido producido íntegramente o ha pasado su última transformación sustancial en Italia."
    },
    {
      id: 13,
      type: "mueble",
      name: "Tabla cartón para rascar",
      image: require('./libimg/cat13.jpg'),
      price: 7.49,
      rate: 4,
      description: "Está fabricado con cartón corrugado reciclado de alta calidad, lo que lo hace resistente al uso diario y seguro para el medio ambiente. Además, es lo suficientemente firme para soportar los arañazos constantes de los gatos sin deshacerse rápidamente."
    },
    {
      id: 14,
      type: "juguete",
      name: "Tarnel Juguete interactivo para gatos",
      image: require('./libimg/cat14.jpg'),
      price: 27.99,
      rate: 4,
      description: "La base de madera maciza es estable y estable, no se puede doblar fácilmente por las mascotas, resistente a las mordeduras y al desgaste, sólido y duradero, no se vuelca fácilmente y gracias a los lazos finos y los bordes lisos del gato."
    },
    {
      id: 15,
      type: "higiene",
      name: "Desenredante y Desodorante para Gatos",
      image: require('./libimg/cat15.jpg'),
      price: 19.99,
      rate: 4,
      description: "Desodorizante 101 suaviza el pelaje a la vez que ayuda a repeler el polvo y la suciedad y a desenredar los nudos. También aporta brillo, fuerza y suavidad al pelaje. Reaviva el color del pelaje, dándole brillo, fragancia, sedosidad y desenredo. Puede utilizarse solo sobre el cabello seco."
    },
    {
      id: 16,
      type: "juguete",
      name: "Dispensador de Alimentos Interactivo",
      image: require('./libimg/cat16.jpg'),
      price: 10.99,
      rate: 4,
      description: "Fabricado con plástico de alta calidad, es seguro para tus mascotas y puede soportar el desgaste cotidiano. La base de succión permite fijar el juguete en superficies planas, evitando que se mueva durante el juego de tu perro o gato. Controla la ingesta de comida para prevenir obesidad y problemas digestivos."
    }
  ]

  return (
    <SafeAreaProvider >
      <SafeAreaView style={styles.container}>
        <StatusBar style='light'/>
        <TabMenu/>
        <View style={styles.scrollerFocus} >
          <ObjectStyleSheet products={productostem}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: "100%",
  },
  scrollerFocus: {
    flex: 1,
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  },
});