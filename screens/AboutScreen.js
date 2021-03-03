import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>
        About screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
