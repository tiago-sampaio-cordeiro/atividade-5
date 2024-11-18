import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function details() {
  return (
    <View style = {styles.container}>
        <Text>Bem-vindo à tela de Detalhes!</Text>
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
