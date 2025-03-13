import { Text, View } from "react-native";

export default function pageItemClick({item}){
  return (
    <View>
      <Text>Detalles del Producto: {item.name}</Text>
    </View>
  );
}