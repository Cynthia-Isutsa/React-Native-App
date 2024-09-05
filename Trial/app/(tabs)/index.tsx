import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import {Slot} from "expo-router"

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>First Application</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
  }
})