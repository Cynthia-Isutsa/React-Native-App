import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const category = () => {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  )
}

export default category

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#fff"
    }
  })