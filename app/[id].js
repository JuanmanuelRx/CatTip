import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function Detail(){
  const { id } = useLocalSearchParams();

  const imagenes = {
    'cat1.jpg': require('../libimg/cat1.jpg'),
    'cat2.jpg': require('../libimg/cat2.jpg'),
    'cat3.jpg': require('../libimg/cat3.jpg'),
    'cat4.jpg': require('../libimg/cat4.jpg'),
    'cat5.jpg': require('../libimg/cat5.jpg'),
    'cat6.jpg': require('../libimg/cat6.jpg'),
    'cat7.jpg': require('../libimg/cat7.jpg'),
    'cat8.jpg': require('../libimg/cat8.jpg'),
    'cat9.jpg': require('../libimg/cat9.jpg'),
    'cat10.jpg': require('../libimg/cat10.jpg'),
    'cat11.jpg': require('../libimg/cat11.jpg'),
    'cat12.jpg': require('../libimg/cat12.jpg'),
    'cat13.jpg': require('../libimg/cat13.jpg'),
    'cat14.jpg': require('../libimg/cat14.jpg'),
    'cat15.jpg': require('../libimg/cat15.jpg'),
    'cat16.jpg': require('../libimg/cat16.jpg'),
  }

  return(
    <View style={styles.containerdetail}>
      <View>
        <Text style={styles.textos}>Detalles del producto {id}</Text>
        <Image source={imagenes[id]}></Image>
        <Link href='/' style={styles.enlace}>Volver Atras</Link>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  containerdetail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textos: {
    color: "orange",
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 18,
  },
  enlace:{
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "",
  }
})