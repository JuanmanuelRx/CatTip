import React from 'react';
import { View, Image, Text, StyleSheet, Pressable, FlatList } from "react-native";
import ViewRatingBar from '../components/ViewRatingBar';
import BooleanMoreText from '../components/BooleanMoreText';
import { Link } from 'expo-router';

export default function ObjectStyleSheet({ products }) {

  const handlePress = (productId) => {
    console.log(`Tarjeta presionada: ${productId}`);
  };

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

  const renderItem = ({ item }) => (
    <Link href={`/${item.id}`}>
      <Pressable
        style={({ pressed }) => [
          styles.productItem,
          pressed && styles.boxShadow, // Cambia el fondo al presionar
        ]}
        onPress={() => handlePress(item.id)}
      >
        <Image source={imagenes[item.image]} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
          <ViewRatingBar rate={item.rate} />
          <BooleanMoreText description={item.description} />
        </View>
      </Pressable>
    </Link>
  );

  return (
    <FlatList
      numColumns={4}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: "scroll"
  },
  productItem: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#ff6e61',
    borderRadius: 8,
    padding: 10,
    width: 350,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    resizeMode: 'contain',
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  boxShadow: {
    backgroundColor: '#ff9a91',
    shadowColor: "purple",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 16, // Android
  },
});
