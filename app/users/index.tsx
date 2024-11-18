import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Users() {
  return (
    <View style = {styles.container}>
      <Text>Seja bem-vindo Usuario</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});