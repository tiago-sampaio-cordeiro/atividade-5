import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function profile() {
  return (
    <View style = {styles.container}>
      <Text>Perfil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }
})