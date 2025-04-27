import { Image, Pressable, StyleSheet, View } from "react-native";
import { Link } from 'expo-router';
const user = require('../icons/perfil.png');
const carrito = require('../icons/carrito.png');
const config = require('../icons/config.png');
const info = require('../icons/info.png')
export default function Configuration() {
  return (
    <View style={styles.containerconfig}>
      <Pressable onPress={() => alert("user")} onLongPress={() => alert("secreto")}>
        <Image source={user} style={styles.iconos} />
      </Pressable>
      <Pressable onPress={() => alert("carrito")}>
        <Image source={carrito} style={styles.iconos} />
      </Pressable>
      <Pressable onPress={() => alert("config")}>
        <Image source={config} style={styles.iconos} />
      </Pressable>
      <Link asChild href="/about">
        <Pressable>
          <Image source={info} style={styles.iconos} />
        </Pressable>
      </Link>
    </View>
  )
}
const styles = StyleSheet.create({
  containerconfig: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconos: {
    width: 60,
    height: 60,
    marginHorizontal: 10
  }
})