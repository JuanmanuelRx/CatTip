import React, {useState} from 'react';
import { View, Image, Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

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
    <Pressable key={item.id} style={styles.object} onPress={() => {}}>
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
