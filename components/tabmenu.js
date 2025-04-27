import { Image, StyleSheet, View } from "react-native";
import Configuration from "./Configuration";
import SearchForItems from "./SearchObject";

const logotipo = require('../assets/lightcat.png')
export default function TabMenu() {
  return (
    <View style={styles.tabmenu}>
      <Image source={logotipo} style={styles.logo} />
      <SearchForItems/>
      <Configuration/>
    </View>
  )
}
const styles = StyleSheet.create({
  tabmenu: {
    backgroundColor: '#ff972f',
    width: "100%",
    height: 110,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  logo:{
    width: 300,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
})