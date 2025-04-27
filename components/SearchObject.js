import React from 'react';
import { Image, Pressable, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const lupita = require('../icons/lupa.png')

// Esta función es para buscar productos en CatTip.
export default function SearchForItems(){
  const [text, onChangeText] = React.useState('');
  const handleChangeText = (text) => {
    alert(text)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Buscar producto en CatTip..."
          value={text}
        />
        <Pressable onPress={() => {}} style={styles.stylebutton}>
          <Image source={lupita} style={styles.imagen} />
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 340,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  stylebutton:{
    backgroundColor: '#544d46',
    borderRadius: 30,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagen: {
    width: 20,
    height: 20,
    margin: 12,
    resizeMode: 'contain',
  }
});