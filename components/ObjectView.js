import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Hoverable, Pressable } from 'react-native-web-hover'

export default function itemStyleSheet({item}) {

  const maxRating = [1, 2, 3, 4, 5]
  const starImgFilled = require('../libimg/star_filled.png')
  const starImgCorner = require('../libimg/star_corner.png')
  

  const ViewRatingBar = ({ rate }) => {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((star) => {
            return (
              <Image
                key={uuidv4()}
                style={styles.starImgStyle}
                source={star <= rate ? starImgFilled : starImgCorner }
              />
            )
          })
        }
      </View>
    )
  }

  const BooleanMoreText = ({ description }) => {
    const [moreText, setmoreText] = useState(false)
    return (
      <Text style={{ marginTop: 10, fontSize: 14, color: '#888' }}>
        {moreText ? description : description.slice(0, 50) + '...'}
        <TouchableOpacity onPress={() => setmoreText(!moreText)}>
          <Text style={{ color: '#fff', fontSize: 18, paddingRight: 10 }}>
            {moreText ? (' Ver menos... ') : (' Ver más... ')}
          </Text>
        </TouchableOpacity>
      </Text>

    )
  }

  return (

    <Pressable 
    key={item.id} 
    style={({ hovered, focused, pressed }) => [
      styles.object,
      hovered && styles.objecthover,
      ]} 
    onPress={() => {}}
    >
      <View>
        <Image source={item.image} style={styles.image} />
        <Text>{item.name}</Text>
        <Text>Precio: ${item.price}</Text>
        <ViewRatingBar rate={item.rate} />
        <BooleanMoreText description={item.description} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  object: {
    width: "30%",
    height: "auto",
    padding: 5,
    margin: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
  },
  objecthover: {
    width: "30%",
    height: "auto",
    padding: 5,
    margin: 10,
    backgroundColor: '#ccc',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 160, 
    height: 200, 
    resizeMode: "contain"
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  customRatingBarStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  starImgStyle: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
});
