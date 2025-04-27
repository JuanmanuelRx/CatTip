import React from 'react';
import { View, Image, StyleSheet} from "react-native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
  
const maxRating = [1, 2, 3, 4, 5]
const starImgFilled = require('../icons/star_filled.png')
const starImgCorner = require('../icons/star_corner.png')

export default function ViewRatingBar ({ rate }) {
    return (
      <View style={styles.customRatingBarStyle}>
        {
          maxRating.map((star) => {
            return (
              <Image
                key={uuidv4()}
                style={styles.starImgStyle}
                source={star <= rate ? starImgFilled : starImgCorner}
              />
            )
          })
        }
      </View>
    )
  }

const styles = StyleSheet.create({
  customRatingBarStyle: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  starImgStyle: {
    width: 20,
    height: 20,
    margin: 2,
  },
});
