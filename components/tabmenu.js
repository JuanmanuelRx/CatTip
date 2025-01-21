import { Image, Pressable, StyleSheet, View } from "react-native";
const user = require('../icons/perfil.png');
const carrito = require('../icons/carrito.png');
export default function Configuration() {
    return (
        <View>
            <Pressable onPress={() => alert("user")} onLongPress={() => alert("secreto")}>
                <Image source={user} style={styles.iconos} />
            </Pressable>
            <Pressable onPress={() => alert("carrito")}>
                <Image source={carrito} style={styles.iconos} />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    iconos: {
        width: 30,
        height: 30,
        marginHorizontal: 10
    }
})