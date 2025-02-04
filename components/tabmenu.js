import { Image, Pressable, StyleSheet, View } from "react-native";
const user = require('../icons/perfil.png');
const carrito = require('../icons/carrito.png');
export default function Configuration() {
    return (
        <View style={styles.containerconfig}>
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