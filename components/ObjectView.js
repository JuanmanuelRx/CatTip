import React, {useState} from 'react';
import { View, Image, Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function itemStyleSheet({item}) {

  const ViewRatingBar = ({ rate }) => {
    const maxRating = [1, 2, 3, 4, 5]
    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((star) => {
            return (
              <Image
                style={styles.starImgStyle}
                source={star <= {rate} ? { uri: starImgFilled } : { uri: starImgCorner }}
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
    <Pressable key={uuidv4()} style={styles.object}>
      <View key={item.id} style={styles.card}>
        <Image source={{ uri: item.image }} style={{ width: 160, height: 200, resizeMode: "contain" }} />
        <Text>{item.name}</Text>
        <Text>Precio: ${item.price}</Text>
        <ViewRatingBar key={uuidv4()} rate={item.rate} />
        <BooleanMoreText key={uuidv4()} description={item.description} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  object: {
    width: 150,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
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
