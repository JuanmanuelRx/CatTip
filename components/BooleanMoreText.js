import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default function BooleanMoreText({ description }) {
  const [moreText, setmoreText] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {moreText ? description : description.slice(0, 50) + '...'}
        <TouchableOpacity onPress={() => setmoreText(!moreText)}>
          <Text style={styles.moreText}>
            {moreText ? (' Ver menos... ') : (' Ver más... ')}
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: "100%",
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
  },
  moreText: {
    color: '#8b0000',
    fontWeight: 'bold',
    fontSize: 16,
    paddingRight: 10,
  },
})